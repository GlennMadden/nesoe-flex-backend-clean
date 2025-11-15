export default function handler(req, res) {
  try {
    const { roomName } = req.query;

    if (!roomName) {
      return res.status(400).json({ error: "Missing roomName" });
    }

    return res.status(200).json({
      roomName,
      state: "active"
    });
  } catch (err) {
    console.error("Room state error:", err);
    return res.status(500).json({ error: "Room state lookup failed" });
  }
}
