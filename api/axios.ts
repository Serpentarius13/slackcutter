import axios, { AxiosInstance } from "axios";
import { useToast } from "vue-toastification/dist/index.mjs";
import { AUTH_COOKIE_KEY } from "~/src/shared/features/constants/auth.constants";

interface IAxiosInstanceSettings {
  shouldHaveToken: boolean;
}

type TAxiosInstanceSettings = Partial<IAxiosInstanceSettings>;

export function makeAxiosInstance({ shouldHaveToken }: TAxiosInstanceSettings = {}): AxiosInstance {
  const config = useRuntimeConfig();

  const token = useCookie(AUTH_COOKIE_KEY).value;

  if (!token && shouldHaveToken) throw new Error("No token was provided");

  const instance = axios.create({
    baseURL: config.public.apiBase,
    timeout: 5000,
    headers: {
      Authorization: token ? `Bearer ${token}` : ``,
    },
  });

  instance.interceptors.response.use(
    (resp) => {
      if (resp.status === 400 || resp.status === 500) return Promise.reject("There was an error");
      else return resp;
    },
    (error) => {
      const toast = useToast();

      Object.values(error.response.data).forEach((e) => toast.error(e));

      return Promise.reject(error);
    },
  );

  return instance;
}
