import passport from "passport";
import { Response } from "express";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import { Strategy as AppleStrategy } from "passport-apple";
import { db } from "../../prisma/PrismaClient";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: `${process.env.BACKEND_URL}/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await db.user.findUnique({
          where: { email: profile.emails?.[0].value },
        });

        if (!user) {
          user = await db.user.create({
            data: {
              email: profile.emails?.[0].value,
              username: profile.displayName,
              name: `${profile.name?.givenName} ${profile.name?.familyName}`,
              profilePicture: profile.photos?.[0].value || "",
            },
          });
        }

        done(null, user);
      } catch (error) {
        done(error, !!null);
      }
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
      callbackURL: `${process.env.BACKEND_URL}/auth/facebook/callback`,
      profileFields: ["id", "emails", "name", "picture.type(large)"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await db.user.findUnique({
          where: { email: profile.emails?.[0].value },
        });

        if (!user) {
          user = await db.user.create({
            data: {
              email: profile.emails?.[0].value,
              username: `${profile.name?.givenName} ${profile.name?.familyName}`,
              name: `${profile.name?.givenName} ${profile.name?.familyName}`,
              profilePicture: profile.photos?.[0].value || "",
            },
          });
        }

        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);

// // Apple OAuth Strategy
// passport.use(
//   new AppleStrategy(
//     {
//       clientID: process.env.APPLE_CLIENT_ID!,
//       teamID: process.env.APPLE_TEAM_ID!,
//       keyID: process.env.APPLE_KEY_ID!,
//       privateKeyLocation: process.env.APPLE_PRIVATE_KEY_PATH!,
//       callbackURL: `${process.env.BACKEND_URL}/auth/apple/callback`,
//     },
//     async (accessToken, refreshToken, idToken, profile, done) => {
//       try {
//         // Since Apple doesn't provide email or name directly in subsequent logins,
//         // you need to manage that information on the first login.
//         let user = await db.user.findUnique({
//           where: { id: profile.id },
//         });

//         if (!user) {
//           // Apple doesn't always provide email, but you'll get it on the first login
//           const email = idToken.email || "";

//           user = await db.user.create({
//             data: {
//               id: profile.id,
//               email,
//               username: profile.name || "Apple User",
//               profilePicture: "",
//             },
//           });
//         }

//         done(null, user);
//       } catch (error) {
//         done(error, null);
//       }
//     }
//   )
// );

export default passport;
