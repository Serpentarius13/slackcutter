import { useVideoEditor } from "~/stores/useVideoEditor";
import useModalStore from "~/stores/useModalStore";

export default defineNuxtRouteMiddleware(async (request) => {
  if (process.server) return;

  const store = useVideoEditor();
  const modalStore = useModalStore();

  const pathId = request.fullPath.split("/").at(-1);

  if (pathId && Number.isFinite(+pathId) && !store.videoReceived.downloadedClip) {
    store.setClipId(+pathId);
    modalStore.openLoadingModal();

    try {
      store.loadClip().then(() => modalStore.closeModal());
    } catch (e: any) {
      modalStore.closeModal();
      return navigateTo("/cabinet");
    }
  } else if (!store.videoUrlLink) {
    return navigateTo("/cabinet");
  }
});
