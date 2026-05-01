import React from "react";
import CarouselControlled from "../../components/Carousel";
const apiEndpointSlides = [
  {
    id: "/check-subscriber",
    title: "/check-subscriber Endpoint",
    summary:
      "Handles initial subscriber registration, stores data in a preliminary session in Redis, and triggers email confirmation via Mailchimp.",
    description: `export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    // Ensure no active session exists for this user. This check prevents users who are already logged in from initiating the subscription process again, which could lead to confusion or unintended consequences. By enforcing that there is no active session, we ensure that the subscription flow is only initiated for users who are not currently authenticated, maintaining a clear and secure user experience.
    await assertNoActiveSession();
    validationSchema.pick({ email: true }).parse({ email });

    // Implement rate limiting for email lookup to prevent abuse and brute-force attacks. This checks if the email has exceeded the allowed number of lookup attempts within a certain time frame. If the limit is exceeded, it will throw an error and prevent further processing of the request.
    await handleFindEmailRateLimit(email);

    // Generate the subscriber hash required by Mailchimp (MD5 hash of the lowercase email)
    const subscriberHash = crypto.createHash("md5").update(email).digest("hex");

    // Call Mailchimp's API to get the list member data
    let member: { status: string; merge_fields?: Record<string, unknown> };
    try {
      const memberResponse = await mailchimpClient.lists.getListMember(
        listID,
        subscriberHash,
      );

      if (
        !("status" in memberResponse) ||
        typeof memberResponse.status !== "string"
      ) {
        throw new HttpError("Unexpected Mailchimp response shape", 500);
      }

      member = memberResponse as {
        status: string;
        merge_fields?: Record<string, unknown>;
      };
    } catch (error: unknown) {
      // If Mailchimp returns a 404 error (member not found)
      if ((error as ErrorResponse).status === 404) {
        throw new HttpError(
          "Mhm we couldn't find that email. You should subscribe!🙃",
          404,
        );
      } else {
        throw new HttpError(
          "Error retrieving subscriber data from Mailchimp",
          500,
        );
      }
    }
`,
  },
  {
    id: "/create-checkout-session",
    title: "/create-checkout-session Endpoint",
    summary: `Integrates with Stripe for payment processing and handles checkout status updates via webhooks. On the landing page, if user hits the buy fan pack button, then this endpoint will create a stripe checkoutsessison from Stripe's API docs.`,
    description: `    const sessionData = await getSessionDataByToken(sessionToken);
    if (!sessionData) {
      throw new HttpError("Session not found. Unauthorized access", 404);
    }
    if (sessionData.rememberMe === undefined) {
      throw new HttpError(
        "Session data is incomplete. Missing rememberMe property.",
        500,
      );
    }
    if (sessionData.checkoutStatus === "completed") {
      throw new HttpError("Purchase already completed.", 403);
    }
    if (csrfToken !== sessionData.csrfToken) {
      throw new HttpError("Unauthorized.", 403);
    }
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
      return_url: ${"${process.env.NEXT_PUBLIC_BASE_URL}/processing?session_id={CHECKOUT_SESSION_ID}"},

      metadata: {
        sessionToken: sessionToken,
      },
    });
    return NextResponse.json(
      {
        clientSecret: session.client_secret,
        customerEmail: sessionData.email,
      },
      {
        status: 200,
      },
    );`,
  },
  {
    id: "/end-session",
    title: "/end-session Endpoint",
    summary: `Handles session termination by deleting the session from Redis and clearing relevant cookies. This endpoint ensures that when a user logs out, their session data is securely removed, preventing unauthorized access and maintaining the integrity of the user's account.`,
    description: `export async function POST() {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("sessionToken")?.value;

    redis.del(session:${"${sessionToken}"});
    cookieStore.delete("sessionToken");
    cookieStore.delete("csrfToken");

    return NextResponse.json(
      { message: "Session ended. Cookies cleared." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error ending session:", error);
    return NextResponse.error();
  }
}
`,
  },
  {
    id: "/processing-webhook Endpoint",
    title: "/processing-webhook Endpoint",
    summary: `Handles Stripe webhook events related to checkout session completion. When a checkout session is completed, this endpoint updates the subscriber's status in Redis and Mailchimp, ensuring that the user's purchase is properly recorded and their subscription status is updated accordingly.`,
    description: ` const stripeSessionId = url.searchParams.get("session_id");
    // If there is no session_id in the query params, it likely means that the user is being redirected here after subscribing through Mailchimp but has not gone through the Stripe checkout process. In this case, we want to check for the pending subscription cookie and the associated session data to confirm their subscription and issue them a session if everything checks out. If there is a session_id in the query params, it means the user is being redirected here after completing the Stripe checkout process, and we want to verify the session with Stripe, update our records accordingly, and then issue them a session and redirect to the thank you page.
    if (!stripeSessionId) {
      await assertNoActiveSession();
      // Check for the presence of the pendingSubscription cookie, which contains a hash of the user's email. This cookie is set when the user initiates the subscription process and is used to track the pending subscription status. If this cookie is not present, it indicates that there is no pending subscription associated with the request, and we should reject the request with a 400 Bad Request error, indicating that the pending data was not found and access is unauthorized.
      const cookieStore = await cookies();
      const emailHashPendingSubCookie = cookieStore.get(
        "pendingSubscription",
      )?.value;
      //If we are going to check the cookie here, we also want to check it over in mailchimp webhook before changing the status to subscribed.
      if (!emailHashPendingSubCookie) {
        throw new HttpError(
          "Pending data not found. Unauthorized access.",
          400,
        );
      }
      // Mailchimp fires the webhook and redirects the browser simultaneously, so the
      // sessionReadyForIssuance key may not exist yet when the browser arrives first.
      // Retry up to 30 times (30 s total) to let the webhook complete before giving up.
      let userSessionToBeIssued = null;
      for (let attempt = 0; attempt < 30; attempt++) {
        try {
          userSessionToBeIssued = await getSessionDataByHash(
            emailHashPendingSubCookie,
          );
          break;
        } catch (err) {
          if (err instanceof HttpError && err.status === 404 && attempt < 30) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            continue;
          }
          throw err;
        }
      }\n
      (Note)
      if there is a stripeSessionId, it means the user is being redirected here after completing the Stripe checkout process, and we want to verify the session with Stripe, update our records accordingly, and then issue them a session and redirect to the thank you page.

      ......
      `,
  },
  {
    id: "/refresh-session Endpoint",
    title: "/refresh-session Endpoint",
    summary: `Refreshes session tokens and CSRF, validates session state. This endpoint is designed to extend the user's session by refreshing the session token and CSRF token, while also validating the current session state to ensure that the user is still authenticated and authorized to continue their session.`,
    description: ` const ttl = setTimeToLive(currentSessionData.rememberMe); // 1 week vs 15 minutes

    const { sessionToken: newSessionToken, csrfToken: newCsrfToken } =
      generateToken();

    // Copy the current session data and update tokens accordingly
    const updatedSessionData = {
      ...currentSessionData,
      csrfToken: newCsrfToken,
    };

    await updateSessionData(newSessionToken, updatedSessionData, ttl);

    await createCookie("sessionToken", newSessionToken, {
      maxAge: ttl,
      sameSite: "lax",
    });
    await createCookie("csrfToken", newCsrfToken, {
      maxAge: ttl,
      sameSite: "lax",
    });
    return NextResponse.json(
      {
        message: "Session and cookies are refreshed with new ones ",
        sessionTTL: ttl,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Error refreshing session:", error);
    if (error instanceof HttpError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status },
      );
    }
    return NextResponse.json(
      { error: (error as Error).message },
      {
        status: 500,
      },
    );`,
  },
  {
    id: "/session-info Endpoint",
    title: "/session-info Endpoint",
    summary: `Returns session TTL for client-side session management. This endpoint provides information about the remaining time-to-live (TTL) of the user's current session, allowing the client-side application to manage session expiration and prompt the user to refresh their session or log in again as needed.`,
    description: `export async function GET() {
  try {
    //Retrieve cookies from the request
    const cookieStore = await cookies();
    //get name of the cookie that we want to retrieve and its value
    const sessionToken = cookieStore.get("sessionToken")?.value;

    if (!sessionToken) {
      throw new HttpError("Session token not found", 404);
    }

    const ttl = await redis.ttl(session:${"${sessionToken}"});

    if (ttl === -2) {
      throw new HttpError("Session not found or expired", 404);
    }
    //Return the TTL value. We use this value to set our timer on the client side to know when session is going to expire
    return NextResponse.json({ ttl }, { status: 200 });
  } catch (error) {
    if (error instanceof HttpError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status },
      );
    }
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}`,
  },
  {
    id: "/subscribe Endpoint",
    title: "/subscribe Endpoint",
    summary: `Handles initial subscriber registration, stores data in a preliminary session in Redis, and triggers email confirmation via Mailchimp.`,
    description: `  await handleSubscribeRateLimit(email, setTimeToLive(rememberMe || false));

    const addSubscriber = limiter.wrap(async (email: string, name: string) => {
      try {
        const listID = checkEnvVariables().listID;
        const response = await mailchimpClient.lists.addListMember(listID, {
          email_address: email,
          status: "pending",
          merge_fields: { FNAME: name },
        });

        return response;
      } catch (error: unknown) {
        if (
          (error as MailchimpWrapped).response?.body?.title === "Member Exists"
        ) {
          throw new HttpError("Mailchimp: User already subscribed", 400);
        }
      }
    });

    const ttl = setTimeToLive(rememberMe || false); // 1 week vs 15 minutes

    // Call the rate-limited function
    await addSubscriber(email, name);

    const emailHash = await createPrelimSession(email, name, rememberMe);
    await createCookie("pendingSubscription", emailHash, {
      maxAge: ttl,
      sameSite: "lax",
    });

    return NextResponse.json(
      {
        message:
          "Subscription initiated. Please check your email to confirm. Don't see it, check spam!!",
        emailHash,
        status: "pending",
      },
      { status: 200 },
    );`,
  },
  {
    id: "/validate-shipping-address Endpoint",
    title: "/validate-shipping-address Endpoint",
    summary: `Validates shipping address using SmartyStreets API. This endpoint receives shipping address details from the client, validates them against the SmartyStreets API to ensure they are deliverable, and implements rate limiting to prevent abuse.`,
    description: `    // Build a fresh Smarty lookup for this request
    const lookup = createLookup();
    lookup.street = line1;
    if (line2) lookup.street2 = line2;
    lookup.city = city;
    lookup.state = state;
    lookup.zipCode = postal_code;
    // We only care if there's at least one deliverable match, so limit to 1 candidate for efficiency. This tells Smarty to stop searching for more candidates after it finds the first one, which can improve performance since we only need to know if the address is deliverable or not.
    lookup.maxCandidates = 1;
    // This tells Smarty to only return candidates that are confirmed deliverable, filtering out undeliverable addresses right away.
    lookup.match = "strict";

    await client.send(lookup); // Send the lookup request to Smarty's API
    // If Smarty returns at least one candidate, the address is deliverable. If it returns zero candidates, it's undeliverable.
    const isDeliverable = (lookup.result ?? []).length > 0;
    if (!isDeliverable) {
      // If the address is undeliverable, we return a 422 Unprocessable Entity response with an appropriate error message. This indicates to the client that the provided address is not valid for shipping.
      throw new HttpError(
        "The provided shipping address is undeliverable.",
        422,
      );
    }

    return NextResponse.json(
      { message: "Address is deliverable and valid!" },
      { status: 200 },
    );`,
  },
  {
    id: "/mailchimp-webhook Endpoint",
    title: "/mailchimp-webhook Endpoint",
    summary: `Handles Mailchimp webhook events, validates source and payload. This endpoint processes incoming webhook requests from Mailchimp, validating the authenticity of the request by checking for a specific token, verifying the content type, and confirming the user agent string. It then parses the webhook payload to extract relevant data such as the event type and subscriber email, and updates the user's subscription status accordingly in Redis and Mailchimp.`,
    description: ` const body = await req.text(); //parse text body that is coming in from mailchimp
    const params = new URLSearchParams(body);

    const type = params.get("type");
    const email = params.get("data[email]");

    if (type !== "subscribe" || !email) {
      console.error("Webhook Error: Invalid or missing data");
      throw new HttpError("Invalid or missing data", 400);
    }
    //returns object
    const userSessionToBeIssued: UserSession = await getPrelimSession(email);

    if (
      userSessionToBeIssued.rememberMe === undefined ||
      !userSessionToBeIssued
    ) {
      throw new HttpError(
        "Session data is incomplete. Missing possible session or rememberMe property.",
        500,
      );
    }
    const ttl = setTimeToLive(userSessionToBeIssued.rememberMe);
    if (!userSessionToBeIssued.secretToken) {
      throw new HttpError(
        "Session data is incomplete. Missing secret token.",
        500,
      );
    }
    const oldEmailHash = crypto
      .createHmac("sha256", userSessionToBeIssued.secretToken)
      .update(userSessionToBeIssued.email)
      .digest("hex");
    emailHash = oldEmailHash;

    // Update the session data with the new status
    const updatedUserSession: UserSession = {
      ...userSessionToBeIssued,
      status: "subscribed",
      ttl,
    };

    //Instead of polling, and being concerned about state resetting on the client. At the point the user confirms email, issue all cookies and session here and do a permanent redirect.
    await redis
      .multi()
      .set(
        sessionReadyForIssuance:${"${oldEmailHash}"},,
        JSON.stringify(updatedUserSession),
        "EX",
        ttl,
      )
      .del(emailReference:${"${userSessionToBeIssued.email}"})
      .del(prelimSession:${"${oldEmailHash}"})
      .exec();

    return NextResponse.json({ message: "user subscribed!" }, { status: 200 });`,
  },
  {
    id: "/stripe-webhook Endpoint",
    title: "/stripe-webhook Endpoint",
    summary: `Handles Stripe webhook events related to checkout session completion. This endpoint verifies the authenticity of incoming webhook requests from Stripe using the provided signature and webhook secret, processes relevant events such as "checkout.session.completed", and updates the subscriber's status in Redis and Mailchimp accordingly to reflect the successful purchase.`,
    description: ` try {
    const buffer = await req.arrayBuffer();
    const rawBody = Buffer.from(buffer);

    const sig: string | null = req.headers.get("stripe-signature");
    const webhookSecret = checkEnvVariables().stripeWebhookSecret;
    // Verify the webhook
    let event;
    try {
      if (!sig) {
        throw new HttpError("Missing Stripe signature", 400);
      }
      event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
      //est_aFaeVegwL3PuepTfzN3Je2b
    } catch (error) {
      // Signature verification failed
      console.error(
        "Stripe webhook signature verification failed:",
        (error as Error).message,
      );
      // 401 Unauthorized: The signature is invalid
      return NextResponse.json(
        { error: Webhook Error: ${"${(error as Error).message}"} },
        {
          status: 401,
        },
      );
    }
    switch (event.type) {
      case "checkout.session.completed":
        if (event.data.object.payment_status === "paid") {
          await processSuccessfulCheckout(event.data.object);
        }
        break;
      default:
        return NextResponse.json(
          { message: "Event type not handled" },
          { status: 200 },
        );
    }
    return NextResponse.json(
      { received: true },
      {
        status: 200,
      },
    );`,
  },
  {
    id: "/redis-handler Endpoint",
    title: "/redis-handler Endpoint",
    summary: ``,
    description: ` const { action, key } = await req.json();
  try {
    // Only requests from within the app (e.g. middleware) are allowed.
    // The secret is a non-public env var and never reaches the browser.
    const internalSecret = req.headers.get("x-internal-secret");
    if (!internalSecret || internalSecret !== process.env.INTERNAL_API_SECRET) {
      throw new HttpError("Unauthorized.", 401);
    }
    let result = null;
    switch (action) {
      case "get":
        result = await redis.get(key);
        break;
      case "set":
        const { value } = await req.json();
        result = await redis.set(key, value);
        break;
      default:
        throw new HttpError("Unsupported action", 400);
    }
    return NextResponse.json({ result }, { status: 200 });`,
  },
];

const APIEndpoints = () => {
  return (
    <div className="tw-relative  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal">
      <div className="tw-w-full tw-mx-auto">
        <CarouselControlled
          wireframeslides={apiEndpointSlides}
          width="100%"
          height="auto"
        />
      </div>
    </div>
  );
};

export default APIEndpoints;
