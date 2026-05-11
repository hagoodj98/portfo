import React from "react";
import CarouselControlled from "../../components/Carousel";
const apiEndpointSlides = [
  {
    id: "/check-subscriber",
    title: "POST /check-subscriber",
    summary:
      "Looks up an existing Mailchimp subscriber before allowing login. Enforces that no active session exists, applies rate limiting on email lookups, and returns the subscriber's current status. Returns 404 if the email is not found in the list.",
    description: `Key behaviors:
• Calls assertNoActiveSession() — blocks re-entry if user is already logged in
• Rate-limits lookup attempts per email to prevent abuse
• Generates an MD5 subscriber hash and queries Mailchimp's getListMember API
• Returns 404 with a friendly message if the member is not found
• Returns 500 if Mailchimp responds with an unexpected shape`,
  },
  {
    id: "/create-checkout-session",
    title: "POST /create-checkout-session",
    summary: `Creates a Stripe Checkout session for the fan pack purchase. Validates the user's active session, checks CSRF token, and confirms no prior purchase exists before handing off to Stripe's Elements UI.`,
    description: `Key behaviors:
• Reads sessionToken cookie and fetches session data from Redis
• Validates CSRF token to protect against cross-site request forgery
• Blocks duplicate purchases — rejects if checkoutStatus === "completed"
• Creates a Stripe Checkout session in Elements (ui_mode: "elements") with line items, billing, and shipping collection
• Enables automatic tax calculation
• Returns clientSecret and customerEmail to the frontend for rendering the Stripe Elements form`,
  },
  {
    id: "/end-session",
    title: "POST /end-session",
    summary: `Terminates the user's session securely. Deletes the session record from Redis and clears all relevant cookies from the browser, ensuring no stale credentials remain after logout.`,
    description: `Key behaviors:
• Reads sessionToken from cookies
• Calls redis.del() to remove the session record from Redis
• Clears both sessionToken and csrfToken cookies
• Returns 200 with a confirmation message on success`,
  },
  {
    id: "/processing-webhook",
    title: "GET /processing (redirect handler)",
    summary: `Handles the post-checkout redirect after Stripe or Mailchimp confirmation. Determines which flow the user came from — email confirmation or Stripe payment — and issues a full session once verification passes.`,
    description: `Key behaviors:
• If no Stripe session_id in query params: confirms email subscription flow
  - Checks for pendingSubscription cookie
  - Polls Redis up to 30 times (1s intervals) for the session ready for issuance
• If Stripe session_id is present: verifies payment with Stripe API
  - Updates Redis and Mailchimp records on successful checkout
• Issues sessionToken and csrfToken cookies after verification
• Redirects to thank-you page on success`,
  },
  {
    id: "/refresh-session",
    title: "POST /refresh-session",
    summary: `Refreshes the user's session and CSRF tokens before expiry. Generates new tokens, copies over existing session data, updates Redis with the new TTL, and sets fresh cookies — keeping the user seamlessly logged in.`,
    description: `Key behaviors:
• Calculates TTL based on rememberMe flag (1 week vs 15 minutes)
• Generates a new sessionToken and csrfToken pair
• Copies current session data and updates CSRF token field
• Writes new session record to Redis with updated TTL
• Sets fresh sessionToken and csrfToken cookies on the response`,
  },
  {
    id: "/session-info",
    title: "GET /session-info",
    summary: `Returns the remaining TTL of the current session for client-side timer management. The frontend uses this to display a countdown and prompt the user to extend their session before it expires.`,
    description: `Key behaviors:
• Reads sessionToken from cookies
• Calls redis.ttl() to get seconds remaining on the session key
• Returns 404 if the session is not found or already expired (ttl === -2)
• Returns { ttl } in the JSON response for use by the client-side session timer`,
  },
  {
    id: "/subscribe",
    title: "POST /subscribe",
    summary: `Handles new subscriber registration with layered anti-abuse checks. The route validates format with Zod, blocks disposable and bot-like patterns, verifies deliverability with Abstract API (+ DNS MX fallback), then creates a pending Mailchimp subscriber and Redis prelim session.`,
    description: `Key behaviors:
• Validates and normalizes input with Zod (trim + lowercase email)
• Blocks disposable domains using disposable-email-domains-js
• Rejects obvious bot/junk patterns in both email and name (test/fake/mailinator/repeated chars)
• Calls Abstract API Email Validation to check deliverability and disposable risk
• Falls back to DNS MX checks when Abstract returns inconclusive results
• Applies endpoint-level rate limiting before any Mailchimp write
• Calls Mailchimp addListMember with status "pending" — triggers the confirmation email
• Returns 400 if the member already exists in Mailchimp
• Generates an emailHash and stores a preliminary session in Redis
• Sets a pendingSubscription cookie (short-lived) to associate the browser with the pending flow
• Returns a message prompting the user to confirm via email`,
  },
  {
    id: "/validate-shipping-address",
    title: "POST /validate-shipping-address",
    summary: `Validates a shipping address using the SmartyStreets API before Stripe checkout. Ensures the address is deliverable before a purchase is processed, preventing failed shipments.`,
    description: `Key behaviors:
• Applies rate limiting to prevent address-validation abuse
• Builds a SmartyStreets lookup with street, city, state, and zip
• Sets maxCandidates: 1 and match: "strict" for efficiency and precision
• Returns 422 Unprocessable Entity if the address is not deliverable
• Returns 200 with a success message if the address is valid`,
  },
  {
    id: "/mailchimp-webhook",
    title: "POST /mailchimp-webhook",
    summary: `Receives and processes Mailchimp subscription confirmation webhooks. Validates the source, extracts subscriber data, upgrades the preliminary session to a ready-to-issue session in Redis, and cleans up temp keys atomically.`,
    description: `Key behaviors:
• Validates the request token, content type, and user-agent to confirm it's from Mailchimp
• Parses the URL-encoded body to extract event type and subscriber email
• Rejects if event type is not "subscribe" or email is missing
• Fetches preliminary session from Redis using the subscriber's email
• Derives the emailHash using HMAC-SHA256 with the session's secret token
• Atomically (redis.multi()):
  - Writes a sessionReadyForIssuance key with updated session data
  - Deletes the preliminary session and email reference keys`,
  },
  {
    id: "/stripe-webhook",
    title: "POST /stripe-webhook",
    summary: `Receives and verifies Stripe webhook events for checkout completion. Validates the Stripe signature, handles the checkout.session.completed event, and updates the user's purchase record in Redis and Mailchimp.`,
    description: `Key behaviors:
• Reads raw request body as ArrayBuffer for Stripe signature verification
• Calls stripe.webhooks.constructEvent() — returns 401 if signature is invalid
• Handles "checkout.session.completed" event — only processes if payment_status === "paid"
• Calls processSuccessfulCheckout() to update Redis session and Mailchimp subscriber status
• Returns 200 for unhandled event types (Stripe expects a 2xx to stop retries)`,
  },
  {
    id: "/redis-handler",
    title: "POST /redis-handler (internal)",
    summary: `An internal-only API route used by Next.js middleware to read and write Redis keys without exposing Redis directly to the browser. Protected by a shared internal secret that is never sent to the client.`,
    description: `Key behaviors:
• Validates x-internal-secret header against INTERNAL_API_SECRET env variable — returns 401 if missing or mismatched
• Supports "get" and "set" actions for Redis key access
• Used by middleware to check session validity during route protection
• Never called directly from the browser — only invoked server-to-server within the Next.js runtime`,
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
