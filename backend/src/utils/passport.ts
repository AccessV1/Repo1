import passport from "passport";
import {
  Strategy as GoogleStrategy,
  Profile as GoogleProfile,
} from "passport-google-oauth20";
import {
  Strategy as FacebookStrategy,
  Profile as FacebookProfile,
} from "passport-facebook";
import { db } from "../../prisma/PrismaClient";
import { VerifyCallback } from "passport-google-oauth20";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: `${process.env.BACKEND_URL}/api/auth/google/callback`,
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: GoogleProfile,
      done: VerifyCallback
    ) => {
      try {
        let user = await db.user.findUnique({
          where: { email: profile.emails?.[0].value! },
        });

        if (!user) {
          user = await db.user.create({
            data: {
              email: profile.emails?.[0].value!,
              username: profile.displayName,
              name: `${profile.name?.givenName} ${profile.name?.familyName}`,
              profilePicture: profile.photos?.[0]?.value || "",
            },
          });
        }

        done(null, user);
      } catch (error: unknown) {
        done(error as Error, null);
      }
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
      callbackURL: `${process.env.BACKEND_URL}/api/auth/facebook/callback`,
      profileFields: ["id", "emails", "name", "picture.type(large)"],
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: FacebookProfile,
      done: VerifyCallback
    ) => {
      try {
        let user = await db.user.findUnique({
          where: { email: profile.emails?.[0].value! },
        });

        if (!user) {
          user = await db.user.create({
            data: {
              email: profile.emails?.[0].value!,
              username: `${profile.name?.givenName} ${profile.name?.familyName}`,
              name: `${profile.name?.givenName} ${profile.name?.familyName}`,
              profilePicture: profile.photos?.[0]?.value || "",
            },
          });
        }
        done(null, user);
      } catch (error: unknown) {
        done(error as Error, null);
      }
    }
  )
);

export default passport;
