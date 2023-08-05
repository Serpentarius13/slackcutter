import { defineStore } from "pinia";
import { makeFileUrl } from "~/src/shared/features/utils/makeFileUrl";
import { useVideoApi } from "~/src/features/cabinet/model/useVideoApi";

interface IVideoEditorStore {
  videoFile: File | null;
  audioFile: File | null;
  videoReceived: {
    videoId: number | null;
    clipId: number | null;
  };
}

export const useVideoEditor = defineStore("video-editor", {
  state: (): IVideoEditorStore => ({
    videoFile: null,
    audioFile: null,
    videoReceived: {
      videoId: null,
      clipId: null,
    },
  }),
  actions: {
    setVideoFile(videoFile: File) {
      this.videoFile = videoFile;
    },
    setAudioFile(audioFile: File) {
      this.audioFile = audioFile;
    },

    async makeVideoRecord() {
      if (!this.videoFile) return;

      const { makeVideoRecord } = useVideoApi();

      const { id } = await makeVideoRecord(this.videoFile, this.audioFile);

      this.videoReceived.videoId = id;
    },

    async makeClip() {
      if (!this.videoReceived.videoId) return;

      const { makeClip } = useVideoApi();

      const { id } = await makeClip(this.videoReceived.videoId);

      this.videoReceived.clipId = id;
    },
  },
  getters: {
    videoUrlLink(): string {
      return this.videoFile ? makeFileUrl(this.videoFile) : "";
    },
    audioUrlLink(): string {
      return this.audioFile ? makeFileUrl(this.audioFile) : "";
    },
  },
});
