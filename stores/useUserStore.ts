import { defineStore } from "pinia";

import { AUTH_COOKIE_KEY } from "~/features/constants/auth.constants";
import {
  IAccount,
  TLoginData,
  TRegisterData,
} from "~/features/types/auth.types";
import { setCookieClient } from "~/features/utils/cookie";

interface IUserStoreState {
  user: Partial<IAccount> | null;
  isLoading: boolean;
  timeout: NodeJS.Timeout | null;
}

export const useUserStore = defineStore("user-store", {
  state: (): IUserStoreState => ({
    user: {},
    isLoading: false,
    timeout: null,
  }),
  actions: {
    async login(data: TLoginData) {
      try {
        this.load();
        const { apiLogin } = useAuth();

        const user = await apiLogin(data);

        if (typeof user === "object") {
          setCookieClient(AUTH_COOKIE_KEY, user.token);

          this.user = user.account;
        }
      } catch (error) {
        throw new Error(error as any);
      } finally {
        this.unload();
      }
    },

    async loginWithToken(triggerLoading: boolean = true) {
      try {
        if (triggerLoading) this.load();

        const { apiLoginWithToken } = useAuth();
        const router = useRouter();

        const { value: token } = useCookie(AUTH_COOKIE_KEY);

        if (!token) return;

        const user = await apiLoginWithToken(token);
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.user = null;

          this.loginWithToken(false);
        }, 20000);

        if (typeof user === "object") this.user = user;
        else throw new Error("Error getting user");
      } catch (error) {
        throw new Error(error as any);
      } finally {
        this.unload();
      }
    },

    async register(data: TRegisterData) {
      try {
        this.load();
        const { apiRegister } = useAuth();

        const user = await apiRegister(data);

        if (typeof user === "object") {
          setCookieClient(AUTH_COOKIE_KEY, user.token);

          this.user = user.account;
        }
      } catch (error) {
        throw new Error(error as any);
      } finally {
        this.unload();
      }
    },
    logout() {
      this.user = null;
    },
    load() {
      this.isLoading = true;
    },
    unload() {
      this.isLoading = false;
    },
  },
  getters: {
    isAuthPossible() {
      return !!useCookie(AUTH_COOKIE_KEY).value;
    },
  },
});
