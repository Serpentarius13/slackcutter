import { defineStore } from "pinia";

export type TToastStatus = "success" | "warning" | "error";

interface IToast {
  text: string;
  status: TToastStatus;
  id: string;
}
type ToastPayload = Omit<IToast, "status" | "id"> & { timeout?: number };

const defaultTimeout = 2000;

function createToast(text: string, status: TToastStatus, id: string): IToast {
  return { text, status, id };
}

export default defineStore("toast-store", {
  state: (): { toasts: IToast[] } => ({
    toasts: [],
  }),
  actions: {
    updateState(payload: ToastPayload, status: TToastStatus) {
      const { text, timeout } = payload;
      const id = String(Math.random() * 1000);
      const toast = createToast(text, status, id);

      this.toasts.push(toast);

      setTimeout(() => {
        this.toasts = this.toasts.filter((t) => t.id !== id);
      }, timeout ?? defaultTimeout);
    },
    success(payload: ToastPayload) {
      this.updateState(payload, "success");
    },

    warning(payload: ToastPayload) {
      this.updateState(payload, "warning");
    },

    error(payload: ToastPayload) {
      this.updateState(payload, "error");
    },
  },
});
