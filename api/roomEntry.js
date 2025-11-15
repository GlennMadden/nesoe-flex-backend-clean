export default function handler(req, res) {
  try {
    const { roomName, userName, roleType } = req.query;

    if (!roomName || !userName || !roleType) {
      return res.status(400).json({ error: "Missing parameters" });
    }

    return res.status(200).json({
      roomName,
      userName,
      roleType,
      status: "ENTRY_OK"
    });

  } catch (error) {
    console.error("roomEntry error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
