import axios from "axios";

async function matchPose(base64Img: string) {
  const { data } = await axios({
    method: "POST",
    url: "https://classify.roboflow.com/yoga-pose-detection-2.0/1",
    params: {
      api_key: import.meta.env.VITE_ROBOFLOW_API_KEY,
    },
    data: base64Img,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  const { top: pose, confidence } = data;
  return { pose, confidence };
}

export default { matchPose };
