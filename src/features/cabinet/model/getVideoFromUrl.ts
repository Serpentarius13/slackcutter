import { makeAxiosInstance } from "~/api/axios";
import {
  makeBlobFromArrayBuffer,
  makeFileFromBlob,
} from "~/src/shared/features/utils/makeBlobFromArrayBuffer";

export async function getVideoFromUrl(url: string): Promise<File> {
  const instance = makeAxiosInstance();

  const { data } = await instance.get(url, { responseType: "arraybuffer" });

  return makeFileFromBlob(makeBlobFromArrayBuffer(data));
}
