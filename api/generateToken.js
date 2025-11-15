import { RtcTokenBuilder, RtcRole } from "agora-access-token";

export default function handler(req, res) {
  try {
    const { channel, uid } = req.query;

    if (!channel) {
      return res.status(400).json({ error: "Missing channel" });
    }

    const appId = process.env.APP_ID;
    const appCertificate = process.env.APP_CERT;

    if (!appId || !appCertificate) {
      return res.status(500).json({ error: "Server missing APP_ID or APP_CERT" });
    }

    const role = RtcRole.PUBLISHER;
    const expirationTimeInSeconds = 3600;
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const privilegeExpire = currentTimestamp + expirationTimeInSeconds;

    const token = RtcTokenBuilder.buildTokenWithUid(
      appId,
      appCertificate,
      channel,
      uid || 0,
      role,
      privilegeExpire
    );

    return res.status(200).json({ token });
  } catch (err) {
    console.error("Token error:", err);
    return res.status(500).json({ error: "Failed to generate token" });
  }
}
