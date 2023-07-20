/**
 * Webcam class for accessing the webcam and taking snapshots
 * @class
 * @classdesc Webcam class for accessing the webcam
 */
class Webcam {
  isConnected = false;
  #videoEl: HTMLVideoElement;
  #canvasEl: HTMLCanvasElement;
  #canvasCtx: CanvasRenderingContext2D | null;

  constructor(videoEl: HTMLVideoElement, canvasEl: HTMLCanvasElement) {
    this.#videoEl = videoEl;
    this.#canvasEl = canvasEl;
    this.#canvasCtx = canvasEl.getContext("2d");

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        this.#videoEl.srcObject = stream;
        this.isConnected = true;
      })
      .catch((error) => {
        console.error("Error accessing the webcam:", error);
      });
  }

  getSnapshot(): string {
    if (!this.#canvasEl || !this.#canvasCtx) {
      console.warn("Canvas element required for snapshot");
      return "";
    }

    const { width, height } = this.#canvasEl;
    this.#canvasCtx.drawImage(this.#videoEl, 0, 0, width, height);
    return this.#canvasEl.toDataURL();
  }
}

export default Webcam;
