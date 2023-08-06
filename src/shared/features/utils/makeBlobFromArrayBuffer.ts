export const makeBlobFromArrayBuffer = (arrayBuffer: ArrayBuffer) =>
  new Blob([arrayBuffer], { type: "video/mp4" });

export const makeFileFromBlob = (blob: Blob) => new File([blob], "filename", { type: "video/mp4" });
