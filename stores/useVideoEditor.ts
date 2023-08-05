import { defineStore } from "pinia";
import { makeFileUrl } from "~/src/shared/features/utils/makeFileUrl";

interface IVideoEditorStore {
  videoFile: File | null;
  audioFile: File | null;
  videoReceived?: {
    videoId: number;
    clipId: number;
  };
}

export const useVideoEditor = defineStore("video-editor", {
  state: (): IVideoEditorStore => ({
    videoFile: null,
    audioFile: null,
    videoReceived: undefined,
  }),
  actions: {
    setVideoFile(videoFile: File) {
      this.videoFile = videoFile;
    },
    setAudioFile(audioFile: File) {
      this.audioFile = audioFile;
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
