import { useUserStore } from "~/stores/useUserStore";

export default defineNuxtRouteMiddleware(async (request) => {
  if (process.server) return;

  const userStore = useUserStore();

  if (!userStore.user && userStore.isAuthPossible) {
    await userStore.loginWithToken();
  }

  if (!userStore.user) {
    return navigateTo("/auth/login");
  }
});
