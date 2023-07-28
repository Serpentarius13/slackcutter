import { useUserStore } from "~/stores/useUserStore";

export default defineNuxtRouteMiddleware(async (request) => {
  if (process.server) return;

  const store = useUserStore();

  if (!store.user && store.isAuthPossible) {
    await store.loginWithToken();
  }

  if (store.user) return navigateTo("/cabinet");
});
