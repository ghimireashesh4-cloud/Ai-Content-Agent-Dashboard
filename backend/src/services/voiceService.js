import axios from "axios";
import fs from "fs";

export async function generateVoice(text) {
  const res = await axios.post(
    "https://api.elevenlabs.io/v1/text-to-speech/VOICE_ID",
    { text },
    {
      headers: {
        "xi-api-key": process.env.ELEVENLABS_API_KEY
      },
      responseType: "arraybuffer"
    }
  );

  fs.writeFileSync("voice.mp3", res.data);
  return "voice.mp3";
}
