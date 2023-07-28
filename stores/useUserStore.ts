import { defineStore } from "pinia";
import {
  AUTH_COOKIE_KEY,
  AUTH_REFRESH_COOKIE_KEY,
} from "~/src/shared/features/constants/auth.constants";

import { removeCookieClient, setCookieClient } from "~/src/shared/features/utils/cookie";
import {
  IUser,
  TLoginData,
  TRegisterCompleteData,
  TRegisterCompleteDTO,
} from "~/src/features/auth/types/auth.types";
import { useAuth } from "~/src/features/auth/model/useAuth";

interface IUserStoreState {
  user: IUser | null;
  isLoading: boolean;
  timeout: NodeJS.Timeout | null;
}

export const useUserStore = defineStore("user-store", {
  state: (): IUserStoreState => ({
    user: null,
    isLoading: false,
    timeout: null,
  }),
  actions: {
    async login(data: TLoginData) {
      try {
        this.load();
        const { apiLogin, apiGetUserWithToken } = useAuth();

        const tokens = await apiLogin(data);

        setCookieClient(AUTH_COOKIE_KEY, tokens.access_token);
        setCookieClient(AUTH_REFRESH_COOKIE_KEY, tokens.refresh_token);

        const user = await apiGetUserWithToken(tokens.access_token);

        if (typeof user === "object") {
          this.user = user;
        }
      } catch (error) {
        // throw new Error(error as any);
      } finally {
        this.unload();
      }
    },

    async loginWithToken() {
      try {
        // if (triggerLoading) this.load();
        //
        // const {apiLoginWithToken} = useAuth();
        //
        //
        // const {value: token} = useCookie(AUTH_COOKIE_KEY);
        //
        // if (!token) return;
        //
        // const user = await apiLoginWithToken(token);
        // if (this.timeout) clearTimeout(this.timeout);
        // this.timeout = setTimeout(() => {
        //     this.user = null;
        //
        //     this.loginWithToken(false);
        // }, 20000);

        const token = useCookie(AUTH_REFRESH_COOKIE_KEY);

        if (!token.value) return;

        const { apiRefreshTokens, apiGetUserWithToken } = useAuth();

        const tokens = await apiRefreshTokens(token.value);

        setCookieClient(AUTH_COOKIE_KEY, tokens.access_token);
        setCookieClient(AUTH_REFRESH_COOKIE_KEY, tokens.refresh_token);

        const user = await apiGetUserWithToken(tokens.access_token);

        if (typeof user === "object") this.user = user;
        // else throw new Error("Error getting user");
      } catch (error) {
        console.log(error);
        throw new Error(error as any);
      } finally {
        this.unload();
      }
    },

    async completeRegister(data: TRegisterCompleteData, email: string) {
      try {
        this.load();
        const { apiCompleteRegister, apiGetUserWithToken } = useAuth();

        const dto: TRegisterCompleteDTO = {
          first_name: data.firstName,
          last_name: data.lastName,
          password: data.password,
          email,
        };

        const tokens = await apiCompleteRegister(dto);

        setCookieClient(AUTH_COOKIE_KEY, tokens.access_token);
        setCookieClient(AUTH_REFRESH_COOKIE_KEY, tokens.refresh_token);

        const user = await apiGetUserWithToken(tokens.access_token);

        if (typeof user === "object") {
          this.user = user;
        }
      } catch (error) {
        // throw new Error(error as any);
      } finally {
        this.unload();
      }
    },

    async logout() {
      try {
        this.load();
        const { apiLogout } = useAuth();

        const token = useCookie(AUTH_COOKIE_KEY);

        if (!token.value) {
          this.clearEverything();
          return;
        }

        await apiLogout(token.value);

        this.clearEverything();

        const router = useRouter();
        router.push("/");
      } catch (error) {
        // throw new Error(error as any);
      } finally {
        this.unload();
      }
    },
    load() {
      this.isLoading = true;
    },
    unload() {
      this.isLoading = false;
    },

    clearEverything() {
      this.user = null;

      removeCookieClient(AUTH_COOKIE_KEY);
      removeCookieClient(AUTH_REFRESH_COOKIE_KEY);
    },
  },
  getters: {
    isAuthPossible() {
      return !!useCookie(AUTH_COOKIE_KEY).value && !!useCookie(AUTH_REFRESH_COOKIE_KEY).value;
    },

    isAuth(state): boolean {
      return !!state.user;
    },
  },
});
