import axios, { AxiosRequestConfig } from "axios";
import { CaptionPositionEnum } from "../store/pageSlice";
import { makeMockProgress } from "./mockProgress";

const BASE_URL = import.meta.env.VITE_APII_URL;

export async function generateVideo(
  inputVideo: File,
  captionPosition: CaptionPositionEnum,
  onProgress: (progress: number) => void
) {
  const progressSeconds = 25;
  const mockProgress = makeMockProgress(progressSeconds, onProgress);

  const formdata = new FormData();
  formdata.append(
    "video_file",
    inputVideo,
    "/C:/Users/Dylan Harness/Desktop/yogo_demo_01.mp4"
  );
  formdata.append("caption_position", captionPosition);

  const config: AxiosRequestConfig = {
    method: "post",
    url: `${BASE_URL}/api/video`,
    data: formdata,
    headers: {
      Accept: "video/mp4;charset=UTF-8",
    },
    responseType: "blob",
  };

  const response = await axios(config);
  await mockProgress.complete();
  return response.data;
}
