import crypto from "crypto";

export default function handler(req, res) {
  try {
    const { roomName, userId, role } = req.query;

    if (!roomName || !userId || !role) {
      return res.status(400).json({ error: "Missing parameters" });
    }

    // Generate a random token
    const token = crypto.randomBytes(16).toString("hex");

    return res.status(200).json({
      roomName,
      userId,
      role,
      token
    });

  } catch (error) {
    console.error("generateToken error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
