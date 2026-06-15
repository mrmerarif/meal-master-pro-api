import { OAuth2Client } from "google-auth-library";
import dotenv from "dotenv";

dotenv.config();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Middleware to verify Google OAuth 2.0 token
export const verifyGoogleToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Authorization token missing" });
    }

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    req.user = {
      email: payload.email,
      name: payload.name,
      picture: payload.picture
    };

    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token", error: err.message });
  }
};
