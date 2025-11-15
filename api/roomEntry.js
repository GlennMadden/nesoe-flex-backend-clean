export default function handler(req, res) {
  try {
    const { roomName, userName, role } = req.query;

    if (!roomName || !userName) {
      return res.status(400).json({ error: "Missing roomName or userName" });
    }

    return res.status(200).json({
      allowed: true,
      roomName,
      userName,
      role: role || "student"
    });
  } catch (err) {
    console.error("Room entry error:", err);
    return res.status(500).json({ error: "Room entry failed" });
  }
}
