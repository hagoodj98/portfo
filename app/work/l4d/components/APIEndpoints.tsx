import React from "react";
import CarouselControlled from "../../../components/Carousel";
const EndpointsLayerSlides = [
  {
    id: "api-endpoints",
    title: "POST /auth/login",
    summary:
      "Express routes are protected with authentication checks and input validation using Zod schemas.",
    description: `What it does:
  - Validates username/password with Zod
  - Authenticates via Passport local strategy
  - Starts user session on success

Responses:
  200 redirect to /forum
  401 invalid credentials
  400 validation errors`,
  },
  {
    id: "register-endpoint",
    title: "POST /auth/register",
    summary:
      "Registration route validates input and creates a new user with hashed password before redirecting to login.",
    description: `What it does:
  - Validates username/email/password
  - Checks duplicates before create
  - Hashes password and stores user
  - Creates authenticated session`,
  },
  {
    id: "passport-auth-endpoints",
    title: "OAuth Authentication Endpoints",
    summary:
      "Passport routes for Google, Twitch, and Discord initiate OAuth flows and handle callbacks to authenticate users.",
    description: `OAuth routes:
  /auth/google
  /auth/discord
  callback routes with successRedirect/failureRedirect

What it does:
  - Starts provider auth flow
  - Handles callback and session creation
  - Redirects to forum on success`,
  },
  {
    id: "protected-routes",
    title: "Protected Routes with Authentication Checks",
    summary:
      "Middleware guards forum and content creation routes to ensure only authenticated users can access them. For example, the POST /forum/response-body/add-post route checks authentication and validates input before allowing post creation.",
    description: `What it does:
  - Requires authenticated session for protected routes
  - Validates payload before persistence
  - Rejects unauthorized requests early

Example protected action:
  POST /forum/response-body/add-post`,
  },
  {
    id: "logout-endpoint",
    title: "Logout Endpoint",
    summary:
      "GET /auth/logout route terminates the user session and redirects to login. Passport's req.logout is used to clear the session and ensure the user is logged out securely. Sessions were created using express-session with secure cookie settings to protect against common vulnerabilities.",
    description: `GET /auth/logout

What it does:
  - Calls Passport logout
  - Clears active authenticated session
  - Redirects user to login screen`,
  },
];

const APIEndpoints = () => {
  return (
    <div className="tw-bg-[#17213a] tw-rounded-2xl tw-border tw-border-[#38bdf8]/30 tw-p-5 tw-shadow-md tw-w-full">
      <h4 className="tw-text-[#38bdf8] tw-font-semibold tw-mb-3 tw-text-lg">
        API Layer
      </h4>
      <CarouselControlled
        wireframeslides={EndpointsLayerSlides}
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default APIEndpoints;
