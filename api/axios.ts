import axios, { AxiosInstance } from "axios";
import useToastStore from "~/stores/useToastStore";

export function makeAxiosInstance(): AxiosInstance {
  const config = useRuntimeConfig();

  const instance = axios.create({
    baseURL: config.public.apiBase,
    timeout: 5000,
  });

  instance.interceptors.response.use(
    (resp) => {
      if (resp.status === 400 || resp.status === 500)
        return Promise.reject("There was an error");
      else return resp;
    },
    (error) => {
      const toast = useToastStore();

      error.response.data.message.forEach((m: string) =>
        toast.error({ text: m })
      );

      return Promise.reject(error);
    }
  );

  return instance;
}
