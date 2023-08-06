import { makeAxiosInstance } from "~/api/axios";
import { videoApiRoutes } from "~/src/features/cabinet/model/videoApiRoutes";
import {
  makeBlobFromArrayBuffer,
  makeFileFromBlob,
} from "~/src/shared/features/utils/makeBlobFromArrayBuffer";

type TRecordResponse = { id: number };

export const useVideoApi = () => {
  const instance = makeAxiosInstance({ shouldHaveToken: true });

  async function makeVideoRecord(video: File, audio?: File | null) {
    const dto = { video_file: video } as any;

    if (audio) {
      dto["audio_file"] = audio;
    }

    const { data } = await instance.postForm<TRecordResponse>(videoApiRoutes.video, dto);

    return data;
  }

  async function deleteVideoRecord(id: number) {
    await instance.delete(`${videoApiRoutes.video}/${id}`);
    return true;
  }

  async function getAllVideoRecords() {
    const { data } = await instance.get<any>(videoApiRoutes.videos);
    return data;
  }

  async function downloadVideo(videoId: number) {
    const { data } = await instance.post(videoApiRoutes.downloadVideo, { id: videoId });

    return data;
  }

  async function makeClip(videoId: number, outputName: string = "slackcutter_clip") {
    const { data } = await instance.post<TRecordResponse>(videoApiRoutes.clip, {
      id: videoId,
      output_name: outputName,
    });

    return data;
  }

  async function deleteClip(id: number) {
    await instance.delete(`${videoApiRoutes.clip}/${id}`);
    return true;
  }

  async function getAllClips() {
    const { data } = await instance.post(videoApiRoutes.clips);

    return data;
  }

  async function downloadClip(clipId: number) {
    const { data } = await instance.post(
      videoApiRoutes.downloadClip,
      { id: clipId },
      { responseType: "arraybuffer" },
    );

    return makeFileFromBlob(makeBlobFromArrayBuffer(data));
  }

  return {
    downloadClip,
    downloadVideo,
    getAllClips,
    getAllVideoRecords,
    deleteVideoRecord,
    deleteClip,
    makeVideoRecord,
    makeClip,
  };
};
