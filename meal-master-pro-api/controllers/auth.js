import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Redirect user to Google OAuth
export const login = (req, res) => {
  const redirectUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&response_type=code&scope=openid%20email%20profile&access_type=offline&prompt=consent`;
  res.redirect(redirectUrl);
};

// Handle Google callback and issue JWT
export const googleCallback = async (req, res) => {
  try {
    const { code } = req.query;

    const { tokens } = await client.getToken({
      code,
      redirect_uri: process.env.GOOGLE_REDIRECT_URI
    });

    // Create JWT for your API
    const jwtToken = jwt.sign(
      { idToken: tokens.id_token },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login successful", token: jwtToken });
  } catch (err) {
    res.status(500).json({ message: "OAuth callback failed", error: err.message });
  }
};

// Simple logout
export const logout = (req, res) => {
  res.json({ message: "Logged out" });
};
