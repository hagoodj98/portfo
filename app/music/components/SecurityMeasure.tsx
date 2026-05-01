import React from "react";
import CarouselControlled from "../../components/Carousel";
const securitySlides = [
  {
    id: "csrf",
    title: "CSRF Protection",
    summary:
      "Token-based approach to prevent Cross-Site Request Forgery attacks.",
    description: `// task/schedulerTask.ts\n if (csrfToken !== sessionData.csrfToken) {
      throw new HttpError("Unauthorized.", 403);
    }`,
  },
  {
    id: "rate-limiting",
    title: "Rate Limiting",
    summary:
      "Implemented for critical endpoints to prevent abuse and brute-force attacks.",
    description: `// limiters.ts\n const checkoutSessionRateLimiter = () => {
  return new RateLimiterRedis({
    storeClient: redis,
    keyPrefix: "checkoutSessionRateLimiter", // Prefix for Redis keys to avoid collisions
    points: 3, // Allow 3 attempts per session token
    duration: 600, // Per 10 minutes
  });
};
const subscriberEmailRateLimiter = (ttl: number) => {
  return new RateLimiterRedis({
    storeClient: redis,
    keyPrefix: "subscriberEmailRateLimiter",
    points: 1, // Allow 1 attempt
    duration: ttl, // trying to subscribe with the same email more than once within the TTL will trigger the block
    // Short in-memory block to drop bursts before more Redis roundtrips.
    inMemoryBlockOnConsumed: 1, // If 1 point is consumed, block in memory to prevent further attempts without hitting Redis.
    inMemoryBlockDuration: ttl, // Block in memory for the duration of the TTL
  });
};
const validateAddressRateLimiter = () => {
  return new RateLimiterRedis({
    storeClient: redis,
    keyPrefix: "validateAddressRateLimiter",
    points: 2, // Allow 2 attempts per session token
    duration: 3600, // Per hour
    inMemoryBlockOnConsumed: 2, // If 2 points are consumed, block in memory to prevent further attempts without hitting Redis.
    inMemoryBlockDuration: 3600, // Block in memory for 1 hour to prevent further attempts after the first failure, which adds an extra layer of protection against abuse while still allowing legitimate users to try again after the TTL expires.
  });`,
  },
  {
    id: "secure-redis-access",
    title:
      'Secure Redis Access from Middleware(as of v.15 - the file must be labeled "proxy")',
    summary:
      "Internal API route (/redis-handler) acts as a proxy for Redis operations, allowing secure access from Next.js middleware.",
    description: `// redis-handler/route.ts\n
    //   // Only requests from within the app (e.g. middleware) are allowed.
    // The secret is a non-public env var and never reaches the browser.
    const internalSecret = req.headers.get("x-internal-secret");
    if (!internalSecret || internalSecret !== process.env.INTERNAL_API_SECRET) {
      throw new HttpError("Unauthorized.", 401);
    }`,
  },
  {
    id: "hmac-email-hash",
    title: "HMAC for Email Hashing",
    summary:
      "Uses HMAC with a secret token to create email hashes for tracking pending subscriptions without exposing raw email addresses.",
    description: `// sessionHelpers.ts\n
    const emailHash = crypto
      .createHmac("sha256", userSessionToBeIssued.secretToken)
      .update(userSessionToBeIssued.email)
      .digest("hex");`,
  },
  {
    id: "secure-webhooks",
    title: "Secure Webhook Handling",
    summary:
      "Validates incoming webhook requests from Mailchimp and Stripe by checking for specific tokens stored in the application, verifying content type, and confirming user agent strings to ensure authenticity.",
    description: `// mailchimp-webhook/route.ts\n
function safeCompare(a: string, b: string): boolean {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);
  if (aBuffer.length !== bBuffer.length) return false;
  return crypto.timingSafeEqual(aBuffer, bBuffer);
}
function isExpectedUserAgent(userAgent: string): boolean {
  return /mailchimp/i.test(userAgent);
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let emailHash: string;
const expectedWebhookToken = process.env.MAILCHIMP_WEBHOOK_TOKEN as string;
export async function POST(req: NextRequest) {
  try {
    if (!expectedWebhookToken) {
      throw new HttpError("MAILCHIMP_WEBHOOK_TOKEN is not configured", 500);
    }
    const incomingWebhookToken = req.nextUrl.searchParams.get("token");
    if (
      !incomingWebhookToken ||
      !safeCompare(incomingWebhookToken, expectedWebhookToken)
    ) {
      throw new HttpError("Unauthorized webhook request", 401);
    }

    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/x-www-form-urlencoded")) {
      throw new HttpError("Unsupported webhook payload format", 415);
    }

    const userAgent = req.headers.get("user-agent") || "";
    if (!isExpectedUserAgent(userAgent)) {
      throw new HttpError("Unauthorized webhook source", 401);
    }
    }\n
    // stripe-webhook/route.ts\n
    const sig: string | null = req.headers.get("stripe-signature");
    const webhookSecret = checkEnvVariables().stripeWebhookSecret;
    // Verify the webhook
    let event;
    try {
      if (!sig) {
        throw new HttpError("Missing Stripe signature", 400);
      }
      event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
    } catch (error) {
      // Signature verification failed
      console.error(
        "Stripe webhook signature verification failed:",
        (error as Error).message,
      );
      // 401 Unauthorized: The signature is invalid
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }`,
  },
  {
    id: "",
    title: "Address Validation with Rate Limiting",
    summary:
      "Checkout can only be completed/successful if the shipping address is validated as deliverable using the SmartyStreets API. This endpoint implements rate limiting to prevent abuse, and if the limit is exceeded, the user's session is terminated to enforce the block. This reduce the chance for users inserting fake addresses and abusing the checkout process.",
    description: `// validate-shipping-address/route.ts\n
    // Build a fresh Smarty lookup for this request
     try {
     // The duration is irrelevant here because if users exceed the limit, they are probably scammers. So go ahead and delete their session and make them start over. This will make it more time consuming for scammers to brute-force addresses, while still allowing legitimate users to try again after an hour if they make a mistake in entering their address.
      await handleValidateAddressRateLimit(sessionToken); 
    } catch (error) {
      console.error("Rate limit error for address validation:", error);
      // Delete session server-side so the ban holds even if the client ignores the 429 and clears their own cookies.
      await redis.del(session:${"${sessionToken}"});
      cookieStore.delete("sessionToken");
      cookieStore.delete("csrfToken");
      throw new HttpError(
        Too many attempts for validating address. Your session is closed. Try again later.,
        429,
      );
    }`,
  },
  {
    id: "session-management",
    title: "Secure Session Management",
    summary:
      "Sessions are stored in Redis with secure tokens, and session termination properly clears data and cookies to prevent unauthorized access.",
    description: `// end-session/route.ts\n
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("sessionToken")?.value;

    redis.del(session:${"${sessionToken}"});
    cookieStore.delete("sessionToken");
    cookieStore.delete("csrfToken");

    return NextResponse.json(
      { message: "Session ended. Cookies cleared." },
      { status: 200 },
    );
    // Creating session /route.ts\n
    `,
  },
  {
    id: "A user cannot fake a subscription confirmation",
    title: "Subscription Confirmation Security",
    summary:
      "The subscription confirmation process is designed to prevent users from faking a subscription by directly accessing the session issuance endpoint. This is achieved by using a combination of email hashing, preliminary sessions, and waiting for the Mailchimp webhook to confirm the subscription before issuing a session. The client is redirected to a processing page that checks for the presence of a pending subscription cookie and waits for the webhook to update the session status before issuing a session and granting access. If emailhash does not match the email(old salt hash) coming from mailchimp, then session will not be issued and access will be denied.",
    description: `//utils/sessionHelpers.ts\n export async function getPrelimSession(email: string): Promise<UserSession> {
  try {
    const emailHashReference = (await redis.get(
      emailReference:${"${email.toLowerCase()}"},
    )) as string | null;
    const emailHashStored = emailHashReference;
    if (!emailHashStored) {
      throw new HttpError("Email mapping not found. Unauthorized access", 404);
    }
    const pendingSession = await redis.get(prelimSession:${"${emailHashStored}"});
    if (!pendingSession) {
      throw new HttpError("Session not found. Unauthorized access", 404);
    }
    const prelimSession = JSON.parse(pendingSession) as UserSession;
    const originalSalt = prelimSession.secretToken as string;
    const mailchimpEmail = computeEmailHash(originalSalt, email);

    if (emailHashStored !== mailchimpEmail) {
      throw new HttpError("Unauthorized access", 401);
    }
    return prelimSession;`,
  },
  {
    id: "Prevent recreating sessions",
    title: "Prevent Session Recreation",
    summary:
      "The system prevents users who are already logged in from initiating the subscription process again, which could lead to confusion or unintended consequences. By enforcing that there is no active session, we ensure that the subscription flow is only initiated for users who are not currently authenticated, maintaining a clear and secure user experience.",
    description: `// check-subscriber/route.ts\n
    await assertNoActiveSession();`,
  },
  {
    id: "Protected pages",
    title: "Protected Pages with Middleware",
    summary:
      "Next.js middleware is used to protect certain pages by checking for an active session in Redis. If no valid session is found, the user is redirected to the landing page, ensuring that only authenticated users can access protected content. The rest of the middleware checks sessionData properties and determine if the checkout session is completed or not and redirects accordingly.",
    description: `// middleware.ts\n
    
    export async function proxy(req: NextRequest) {
  
  const sessionToken = req.cookies.get("sessionToken")?.value;
  
  if (!sessionToken) {
    const redirectUrl = new URL("/", req.url);
    const message = "You cannot proceed without an active session!!";
    //This will redirect the user to something like:/landing?msg=Your%20checkout%20session%20expired.%20Please%20try%20again.
    redirectUrl.searchParams.append("msg", encodeURIComponent(message));
    return NextResponse.redirect(redirectUrl);
  }`,
  },
  {
    id: "Stripe Checkout Session Security",
    title: "Stripe Checkout Session Security",
    summary:
      "Before creating a Stripe checkout session, the system checks the session data to ensure that a checkout session has not already been completed. This prevents users from initiating multiple checkout sessions for the same purchase, which could lead to confusion or unintended consequences. By enforcing this check, we maintain a clear and secure checkout process for users.",
    description: `// create-checkout-session/route.ts\n
     
    if (sessionData.checkoutStatus === "completed") {
      throw new HttpError("Purchase already completed.", 403);
    }
    // Checkout session created
    const session = await stripe.checkout.sessions.create({
      ui_mode: "elements",
      customer_email: sessionData.email,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      automatic_tax: { enabled: true },
      return_url: ${"${process.env.NEXT_PUBLIC_BASE_URL}/processing?session_id={CHECKOUT_SESSION_ID}"}

      metadata: {
        sessionToken: sessionToken,
      },
    });\n

    // processing-webhook/route.ts\n
     const stripeSession =
      await stripe.checkout.sessions.retrieve(stripeSessionId);
    if (stripeSession.payment_status !== "paid") {
      throw new HttpError("Payment not completed", 402);
    }
    await processSuccessfulCheckout(stripeSession);
    
    return NextResponse.json({
      success: true,
      redirectUrl: "/landing/thankyou",
    });
    `,
  },
];

const SecurityMeasure = () => {
  return (
    <div className="tw-container tw-py-10 tw-mx-auto tw-p-5">
      <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse">
        Security Layer
      </h3>
      <div className="tw-w-56">
        <hr className="tw-h-2 tw-bg-bluegreen" />
      </div>
      <p className="md:tw-w-2/3 tw-mt-3 tw-text-black">
        Each layer handles specific concerns: repositories execute SQL queries,
        services orchestrate business logic, and external services handle
        third-party integrations.
      </p>

      <div className="tw-flex tw-flex-col tw-gap-8 tw-mt-8">
        <div className="tw-bg-[#17213a] tw-rounded-2xl tw-border tw-border-[#38bdf8]/30 tw-p-5 tw-shadow-md tw-w-full">
          <h4 className="tw-text-[#38bdf8] tw-font-semibold tw-mb-3 tw-text-lg">
            Security Layer
          </h4>
          <CarouselControlled
            wireframeslides={securitySlides}
            width="100%"
            height="auto"
          />
        </div>
      </div>
    </div>
  );
};

export default SecurityMeasure;
