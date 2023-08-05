import { useVideoEditor } from "~/stores/useVideoEditor";

export default defineNuxtRouteMiddleware(async (request) => {
  if (process.server) return;

  const store = useVideoEditor();

  if (!store.videoUrlLink) {
    return navigateTo("/cabinet");
  }
});
