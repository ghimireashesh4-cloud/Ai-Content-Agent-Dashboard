import { createVideo } from "../backend/src/services/videoService.js";

export async function processVideoJob(job) {
  console.log("Processing job:", job.data);

  const video = await createVideo();

  return video;
}
