import ffmpeg from "fluent-ffmpeg";

export async function createVideo() {
  return new Promise((resolve) => {
    ffmpeg()
      .addInput("background.mp4")
      .addInput("voice.mp3")
      .output("output.mp4")
      .on("end", () => resolve("output.mp4"))
      .run();
  });
}
