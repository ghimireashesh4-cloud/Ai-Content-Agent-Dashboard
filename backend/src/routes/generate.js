import express from "express";
import { generateScript } from "../services/scriptService.js";
import { generateVoice } from "../services/voiceService.js";
import { createVideo } from "../services/videoService.js";

const router = express.Router();

router.post("/generate", async (req, res) => {
  const { topic } = req.body;

  const script = await generateScript(topic);
  await generateVoice(script);
  const video = await createVideo();

  res.json({
    success: true,
    script,
    video
  });
});

export default router;
