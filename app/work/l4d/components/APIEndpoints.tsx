import React from "react";
import CarouselControlled from "../../../components/Carousel";
const EndpointsLayerSlides = [
  {
    id: "api-endpoints",
    title: "POST /login",
    summary:
      "Express routes are protected with authentication checks and input validation using Zod schemas.",
    description: `app.post("/login", async (req, res, next) => {
      // Keep local auth result handling in this route so form-specific errors
      // can be normalized into the central error middleware.
      passport.authenticate("local", function (err, user, info) {
        const validation = loginSchema.safeParse({
          username: req.body.username,
          password: req.body.password,
        });
    
        if (!validation.success) {
          return next(
            new ErrorHandler(400, "Validation failed", {
              username: validation.error.issues.find(
                (err) => err.path[0] === "username",
              )
                ? validation.error.issues.find((err) => err.path[0] === "username")
                    .message
                : null,
              password: validation.error.issues.find(
                (err) => err.path[0] === "password",
              )
                ? validation.error.issues.find((err) => err.path[0] === "password")
                    .message
                : null,
            }),
          );
        }
        if (err) {
          return next(err);
        }
        if (!user) {
          if (info && info.message === "User not found") {
            return next(new ErrorHandler(401, "User not found", info));
          }
    
          return next(new ErrorHandler(401, "Invalid credentials", info));
          // return res.redirect("/login-error");
        }
        req.logIn(user, function (err) {
          if (err) {
            return next(err);
          }
          return res.redirect("/forum");
        });
      })(req, res, next);
    });`,
  },
  {
    id: "register-endpoint",
    title: "POST /register",
    summary:
      "Registration route validates input and creates a new user with hashed password before redirecting to login.",
    description: `app.post("/register", async (req, res, next) => {
        if (req.isAuthenticated()) {
          return res.redirect("/forum");
        }
      
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const validation = registrationSchema.safeParse({
          username,
          email,
          password,
        });
      
        if (!validation.success) {
          return next(
            new ErrorHandler(400, "Registration failed", {
              username: validation.error.issues.find(
                (err) => err.path[0] === "username",
              )
                ? validation.error.issues.find((err) => err.path[0] === "username")
                    .message
                : null,
              email: validation.error.issues.find((err) => err.path[0] === "email")
                ? validation.error.issues.find((err) => err.path[0] === "email")
                    .message
                : null,
              password: validation.error.issues.find(
                (err) => err.path[0] === "password",
              )
                ? validation.error.issues.find((err) => err.path[0] === "password")
                    .message
                : null,
            }),
          );
        }
      
        try {
          const userExists = await checkingIfExisting(email, username);
          if (userExists) {
            return next(
              new ErrorHandler(400, "User already exists", {
                duplicateInfo:
                  "You typed an email or username that already exists, try a new one!",
              }),
            );
          } else {
            // Hash password before persistence, then create a logged-in session.
            bcrypt.hash(password, saltRounds, async (err, hash) => {
              if (err) {
                return next(new ErrorHandler(500, "Error hashing password"));
              } else {
                const user = await createUser(username, email, hash);
                req.login(user, (loginError) => {
                  if (loginError) {
                    return next(loginError);
                  }
                  return res.redirect("/forum");
                });
              }
            });
          }
        } catch (err) {
          return next(err);
        }
      });`,
  },
  {
    id: "passport-auth-endpoints",
    title: "OAuth Authentication Endpoints",
    summary:
      "Passport routes for Google, Twitch, and Discord initiate OAuth flows and handle callbacks to authenticate users.",
    description: `app.get(
      "/auth/google",
      passport.authenticate("google", { scope: ["profile", "email"] }),
    );
    app.get(
      "/auth/discord",
      passport.authenticate("discord", { scope: ["identify", "email"] }),
    );
     app.get(
      "/auth/discord/forum",
      passport.authenticate("discord", {
        successRedirect: "/forum",
        failureRedirect: "/login",
      }),
    );
    app.get(
      "/auth/google/forum",
      passport.authenticate("google", {
        successRedirect: "/forum",
        failureRedirect: "/login",
      }),
    );`,
  },
  {
    id: "protected-routes",
    title: "Protected Routes with Authentication Checks",
    summary:
      "Middleware guards forum and content creation routes to ensure only authenticated users can access them. For example, the POST /add-post route checks authentication and validates input before allowing post creation.",
    description: `app.post("/add-post", async (req, res, next) => {
      if (!req.isAuthenticated()) return res.redirect("/login");
    
      const post = req.body.newPost;
    
      const validation = postSchema.safeParse({ newPost: post });
      if (!validation.success) {
        return next(
          new ErrorHandler(400, "Invalid post data", validation.error.issues),
        );
      }
      try {
        await createPost(post, req.user.id);
        res.redirect("/forum");
      } catch (err) {
        return next(new ErrorHandler(500, "Internal Server Error", err));
      }
    });`,
  },
  {
    id: "logout-endpoint",
    title: "Logout Endpoint",
    summary:
      "GET /logout route terminates the user session and redirects to login. Passport's req.logout is used to clear the session and ensure the user is logged out securely. Sessions were created using express-session with secure cookie settings to protect against common vulnerabilities.",
    description: ` 
    app.use(
      session({
        name: "zombieslayers.sid",
        cookie: {
          maxAge: 1000 * 60 * 60 * 24, // 1 day
          httpOnly: true,
          sameSite: "lax",
          secure: isProduction,
        },
        secret: process.env.SESSION_SECRET || "test-session-secret",
        resave: false,
        saveUninitialized: false,
        // Refresh cookie expiry on each request while a user is active.
        rolling: true,
      }),
    );
    
    
    
    app.get("/logout", (req, res, next) => {
      req.logout(function (err) {
        if (err) {
          return next(err);
        }
        res.redirect("/login    ");
      });
    });`,
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
