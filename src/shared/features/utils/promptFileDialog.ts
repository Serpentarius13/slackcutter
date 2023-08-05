import { TAnyFunction } from "~/src/shared/features/types/shared.types";

export enum EFileTypes {
  AUDIO = "audio/*",
  VIDEO = "video/*",
}

export const promptFileDialog = (cb: TAnyFunction, fileType?: EFileTypes, isMultiple = false) => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = fileType ?? "*";
  input.multiple = isMultiple;

  input.addEventListener("change", async (e) => {
    const { files } = e.target as HTMLInputElement;

    await cb(files);
  });

  input.click();
};
