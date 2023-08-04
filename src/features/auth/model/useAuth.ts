import { makeAxiosInstance } from "~/api/axios";
import { IUser, TConfirmationCodeData, TLoginData } from "../types/auth.types";
import { TEmailData } from "~/src/shared/features/types/zod.types";

type TAuthResponse = {
  access_token: string;
  refresh_token: string;
};

export type TPasswordRestoreDTO = {
  new_password: string;
} & TConfirmationCodeData;

export function useAuth() {
  const instance = makeAxiosInstance();

  /**
   * Login with email & password
   * @param data
   */
  async function apiLogin(data: TLoginData): Promise<TAuthResponse> {
    const { data: tokens } = await instance.post<TAuthResponse>("/api/auth/login", data);

    return tokens;
  }

  /**
   * Get user by token
   * @param token
   */
  async function apiGetUserWithToken(token: string): Promise<IUser> {
    const { data: user } = await instance.get<IUser>("/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return user;
  }

  /**
   * Logout
   * @param token
   */
  async function apiLogout(token: string) {
    await instance.post("/api/auth/logout", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return true;
  }

  /**
   * Start registration
   * @param data
   */
  async function apiStartRegister(data: TEmailData) {
    console.log(data);
    await instance.post<{ msg: string }>("/api/auth/register", data);

    return true;
  }

  /**
   * Complete registration
   * @param data
   */
  async function apiCompleteRegister(data: TRegisterCompleteDTO): Promise<TAuthResponse> {
    const { data: tokens } = await instance.post<TAuthResponse>("/api/auth/setup", data);

    return tokens;
  }

  /**
   * Send confirmation code
   * @param data
   */
  async function apiSendConfirmationCode(data: TConfirmationCodeData) {
    await instance.post<{ msg: string }>("/api/auth/email/confirm", data);

    return true;
  }

  /**
   * Send confirmation code for password restore
   * @param data
   */
  async function apiSendConfirmationCodeForPasswordRestoring(data: TConfirmationCodeData) {
    await instance.post<{ msg: string }>("/api/auth/passcode_verification", data);

    return true;
  }

  /**
   * Resend email code
   * @param data
   */
  async function apiResendEmailCode(data: { email: string }) {
    await instance.post<{ msg: string }>("/api/auth/email/resend", data);

    return true;
  }

  /**
   * Refresh tokens with token
   * @param token
   */
  async function apiRefreshTokens(refreshToken: string): Promise<TAuthResponse> {
    const { data: tokens } = await instance.post<TAuthResponse>("/api/auth/refresh", null, {
      headers: { Authorization: `Bearer ${refreshToken}` },
    });

    return tokens;
  }

  /**
   * Start password recover
   * @param data
   */
  async function apiStartPasswordRecover(data: TEmailData) {
    await instance.post<{ msg: string }>("/api/auth/password_recover", data);

    return true;
  }

  /**
   * Finish password recover
   * @param data
   */
  async function apiFinishPasswordRecover(data: TPasswordRestoreDTO) {
    await instance.put<{ msg: string }>("/api/auth/password_recover", data);

    return true;
  }

  return {
    apiLogin,
    apiLogout,
    apiCompleteRegister,
    apiStartRegister,
    apiStartPasswordRecover,
    apiFinishPasswordRecover,
    apiGetUserWithToken,
    apiRefreshTokens,
    apiSendConfirmationCode,
    apiSendConfirmationCodeForPasswordRestoring,
    apiResendEmailCode,
  };
}
