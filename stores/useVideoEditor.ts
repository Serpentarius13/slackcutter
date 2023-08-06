import { defineStore } from "pinia";
import { makeFileUrl } from "~/src/shared/features/utils/makeFileUrl";
import { useVideoApi } from "~/src/features/cabinet/model/useVideoApi";
import { downloadFile } from "~/src/shared/features/utils/downloadFile";

interface IVideoEditorStore {
  videoFile: File | null;
  audioFile: File | null;
  videoReceived: {
    videoId: number | null;
    clipId: number | null;
    downloadedClip: File | null;
  };
}

export const useVideoEditor = defineStore("video-editor", {
  state: (): IVideoEditorStore => ({
    videoFile: null,
    audioFile: null,
    videoReceived: {
      videoId: null,
      clipId: null,
      downloadedClip: null,
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

    setClipId(clipId: number) {
      this.videoReceived.clipId = clipId;
    },

    async loadClip() {
      if (!this.videoReceived.clipId) return;

      const { downloadClip } = useVideoApi();

      const clip = await downloadClip(this.videoReceived.clipId);

      this.videoReceived.downloadedClip = clip;
    },

    downloadClip() {
      if (!this.videoReceived.downloadedClip) return;

      downloadFile(this.videoReceived.downloadedClip);
    },
  },
  getters: {
    videoUrlLink(): string {
      return this.videoFile ? makeFileUrl(this.videoFile) : "";
    },
    audioUrlLink(): string {
      return this.audioFile ? makeFileUrl(this.audioFile) : "";
    },

    clipVideoLink(): string {
      return this.videoReceived?.downloadedClip
        ? makeFileUrl(this.videoReceived.downloadedClip)
        : "";
    },
  },
});
