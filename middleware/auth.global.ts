import { useUserStore } from "~/stores/useUserStore";

export default defineNuxtRouteMiddleware(async (request) => {
  if (process.server) return;

  const userStore = useUserStore();
  console.log("!");

  if (!userStore.user && userStore.isAuthPossible) {
    console.log("fetch ");
    await userStore.loginWithToken();
  }

  if (request.meta.auth) {
    switch (request.meta.auth) {
      case "user":
        if (!userStore.user) {
          return navigateTo("/login");
        }
        break;
      case "guest":
        if (userStore.user) return navigateTo("/profile");
    }
  }
});
