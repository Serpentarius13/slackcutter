import {defineStore} from "pinia";
import {AUTH_COOKIE_KEY, AUTH_REFRESH_COOKIE_KEY} from "~/src/shared/features/constants/auth.constants";

import {setCookieClient} from "~/src/shared/features/utils/cookie";
import {IUser, TLoginData, TRegisterCompleteData} from "~/src/features/auth/types/auth.types";
import {useAuth} from "~/src/features/auth/model/useAuth";


interface IUserStoreState {
    user: Partial<IUser> | null;
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
                const {apiLogin, apiGetUserWithToken} = useAuth();

                const tokens = await apiLogin(data);

                setCookieClient(AUTH_COOKIE_KEY, tokens.access_token)
                setCookieClient(AUTH_REFRESH_COOKIE_KEY, tokens.refresh_token)

                const user = await apiGetUserWithToken(tokens.access_token)


                if (typeof user === "object") {
                    this.user = user;
                }
            } catch (error) {
                // throw new Error(error as any);
            } finally {
                this.unload();
            }
        },


        async loginWithToken(triggerLoading: boolean = true) {
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


                const token = useCookie(AUTH_REFRESH_COOKIE_KEY)

                if (!token.value) throw new Error('No token was provided')

                const {apiRefreshTokens, apiGetUserWithToken} = useAuth();

                const tokens = await apiRefreshTokens(token.value)

                setCookieClient(AUTH_COOKIE_KEY, tokens.access_token)
                setCookieClient(AUTH_REFRESH_COOKIE_KEY, tokens.refresh_token)

                const user = await apiGetUserWithToken(tokens.access_token)


                if (typeof user === "object") this.user = user;
                // else throw new Error("Error getting user");
            } catch (error) {
                throw new Error(error as any);
            } finally {
                this.unload();
            }
        },

        async completeRegister(data: TRegisterCompleteData) {
            try {
                this.load();
                const {apiCompleteRegister, apiGetUserWithToken} = useAuth();

                const tokens = await apiCompleteRegister(data)

                setCookieClient(AUTH_COOKIE_KEY, tokens.access_token)
                setCookieClient(AUTH_REFRESH_COOKIE_KEY, tokens.refresh_token)

                const user = await apiGetUserWithToken(tokens.access_token)


                if (typeof user === "object") {
                    this.user = user;
                }
            } catch (error) {
                // throw new Error(error as any);
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
