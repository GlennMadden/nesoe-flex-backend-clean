export default function handler(req, res) {
  try {
    const { roomName } = req.query;

    if (!roomName) {
      return res.status(400).json({ error: "Missing roomName" });
    }

    // Fake room state
    const state = {
      roomName,
      participants: 2,
      active: true,
      timestamp: Date.now()
    };

    return res.status(200).json(state);

  } catch (error) {
    console.error("roomState error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
