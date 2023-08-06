import { makeFileUrl } from "~/src/shared/features/utils/makeFileUrl";

export const downloadFile = (file: File) => {
  const link = makeFileUrl(file);
  const a = document.createElement("a");

  a.href = link;
  a.download = `${file.name}.mp4`;

  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);

  URL.revokeObjectURL(link);
};
