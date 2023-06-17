import { makeAxiosInstance } from "~/api/axios";
import {
  IAccount,
  TLoginData,
  TRegisterData,
} from "~/features/types/auth.types";

type TAuthResponse = {
  token: string;
  account: IAccount;
};

export default function useAuth() {
  const instance = makeAxiosInstance();
  async function apiLogin(data: TLoginData) {
    const { data: user } = await instance.post<TAuthResponse>(
      "/auth/login",
      data
    );

    return user;
  }

  async function apiLoginWithToken(token: string) {
    const { data: user } = await instance.get<IAccount>("/auth/account", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return user;
  }

  async function apiRegister(data: TRegisterData) {
    const { data: user } = await instance.post<TAuthResponse>(
      "/auth/register",
      data
    );

    return user;
  }

  return { apiRegister, apiLogin, apiLoginWithToken };
}
