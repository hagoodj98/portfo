import CarouselControlled from "../../../components/Carousel";
const SecurityLayerSlides = [
  {
    id: "local-auth",
    title: "Local Login and Password Verification",
    summary:
      "Passport local strategy validates credentials and compares bcrypt hashes before issuing an authenticated session.",
    description: `Flow:\nPOST /auth/login\n-> loginSchema.safeParse(...)\n-> passport.authenticate('local')\n-> bcrypt.compare(input, storedHash)\n-> req.logIn(user)
    // passport/passport.ts\nimport passport from 'passport';\nimport { Strategy as LocalStrategy } from 'passport-local';\npassport.use(
      "local",
      new Strategy(async function verify(username, password, cb) {
        try {
          const result = await findCredentialsFromLocalPassportStrategy(
            username,
            "local",
          );
          if (result) {
            const user = result;
            const storedHashedPassword = user.password;
            bcrypt.compare(password, storedHashedPassword, (err, valid) => {
              if (err) {
                return cb(err);
              } else {
                if (valid) {
                  return cb(null, user);
                } else {
                  return cb(null, false, { message: "Invalid password" });
                }
              }
            });
          } else {
            return cb(null, false, { message: "User not found" });
          }
        } catch (err) {
          return cb(err);
        }
      }),
    );
    `,
  },
  {
    id: "oauth-linking",
    title: "Account Linking via OAuth",
    summary:
      "Google, Twitch, and Discord strategies link provider IDs to existing local accounts using shared email when possible.",
    description: `Provider callback behavior:\n1) check existing provider-linked user\n2) fallback to existing email user\n3) update provider field + provider_id\n4) create new user if no match
    
     passport.use(
      "google",
      new GoogleStrategy(
        {
          clientID: GOOGLE_CLIENT_ID,
          clientSecret: GOOGLE_CLIENT_SECRET,
          callbackURL: "http://localhost:3000/auth/google/forum",
          userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
        },
        async function verify(accessToken, refreshToken, profile, cb) {
          try {
            // Fast path: provider account already linked to a local user.
            const existingGoogleUser =
              await findExistingUserViaPassportStrategyThroughProvider(
                profile,
                "google",
              );
    
            if (existingGoogleUser) {
              return cb(null, existingGoogleUser);
            }
    
            const googleEmail = profile.emails?.[0]?.value;
            if (!googleEmail) {
              return cb(
                new Error("Google account did not return an email address"),
              );
            }
    
            const existingEmailUser =
              await receivedExistingUserViaPassportStrategyProvider(profile);
    
            if (existingEmailUser) {
              // Link OAuth provider to an existing account matched by email.
              const linkedUser = await db.query(
                UPDATE users
                 SET google_id = $1, provider = 'google'
                 WHERE id = $2
                 RETURNING *,
                [profile.id, existingEmailUser.id],
              );
              return cb(null, linkedUser.rows[0]);
            }
            const newUser = await createUserViaPassportStrategyProvider(
              profile,
              "google",
            );
            return cb(null, newUser);
          } catch (err) {
            return cb(err);
          }
        },
      ),
    );
   ...OAuth strategies for Twitch and Discord follow the same pattern with provider-specific fields and logic.
    `,
  },
];

const Security = () => {
  return (
    <div className="tw-bg-[#17213a] tw-rounded-2xl tw-border tw-border-[#38bdf8]/30 tw-p-5 tw-shadow-md tw-w-full">
      <h4 className="tw-text-[#38bdf8] tw-font-semibold tw-mb-3 tw-text-lg">
        Passport Layer (passport/passport.ts)
      </h4>
      <CarouselControlled
        wireframeslides={SecurityLayerSlides}
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default Security;
