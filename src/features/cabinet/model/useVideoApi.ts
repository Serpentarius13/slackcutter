import { makeAxiosInstance } from "~/api/axios";
import { videoApiRoutes } from "~/src/features/cabinet/model/videoApiRoutes";

type TVideoRecordResponse = { id: number };

export const useVideoApi = () => {
  const instance = makeAxiosInstance({ shouldHaveToken: true });

  async function makeVideoRecord(video: File, audio?: File) {
    const dto = { video_file: video };

    if (audio) {
      dto["audio_file"] = audio;
    }

    const { data } = await instance.postForm<TVideoRecordResponse>(videoApiRoutes.video, dto);

    return data;
  }

  async function deleteVideoRecord(id: number) {
    await instance.delete(videoApiRoutes.video, { id });
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

  async function makeClip(videoId: number, outputName?: string = "") {
    const { data } = await instance.post(videoApiRoutes.clip, {
      id: videoId,
      output_name: outputName,
    });

    return data;
  }

  async function deleteClip(videoId: number) {
    await instance.delete(videoApiRoutes.clip, { id: videoId });
    return true;
  }

  async function getAllClips() {
    const { data } = await instance.post(videoApiRoutes.clips);

    return data;
  }

  async function downloadClip(clipId: number) {
    const { data } = await instance.post(videoApiRoutes.downloadClip, { id: clipId });

    return data;
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
