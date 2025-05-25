import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getRecentTrack } from "./spotify";
import path from "path";

dotenv.config();
const app = express();
app.use(cors());

app.get("/api/spotify", async (req, res) => {
  try {
    const track = await getRecentTrack();
    res.json(track);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to fetch track" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/BenjaminWarnerResume2025", (req, res) => {
  const filePath = path.join(
    __dirname,
    "files",
    "BenjaminWarnerResume2025.pdf"
  );
  res.setHeader("Content-Type", "application/pdf");
  res.sendFile(filePath);
});
