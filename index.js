const express = require("express");
const app = express();
const port = 3000;

app.set("trust proxy", true);
app.get("/getRequestInfo", (req, res) => {
  const capturedAt = new Date();
  const clientIp = req.socket.remoteAddress;
  const clientPort = req.socket.remotePort;
  res.json({ remoteAddress: clientIp, remotePort: clientPort, capturedAt });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
