import { TAnyFunction } from "~/src/shared/features/types/shared.types";

export const promptFileDialog = (cb: TAnyFunction) => {
  const input = document.createElement("input");
  input.type = "file";

  input.addEventListener("change", async (e) => {
    const { files } = e.target as HTMLInputElement;

    await cb(files);
  });

  input.click();
};
