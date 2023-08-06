import { defineStore } from "pinia";

import { extend } from "@vue/shared";

import { lockBody, unlockBody } from "~/src/shared/features/utils/overflow";
import { IframeHTMLAttributes } from "nuxt/dist/app/compat/capi";
import ModalIFrameVue from "~/src/widgets/other/Modal/ModalIFrame.vue";
import { IModalSuccessProps } from "~/src/shared/ui/Modal/success/modal-success.types";
import ModalSuccess from "~/src/shared/ui/Modal/success/ModalSuccess.vue";
import { IInitModalProps } from "~/src/widgets/cabinet/Modal/InitModal/init-modal.types";
import InitModal from "~/src/widgets/cabinet/Modal/InitModal/InitModal.vue";
import ProfileModal from "~/src/widgets/cabinet/Modal/ProfileModal/ProfileModal.vue";
import ModalLoading from "~/src/widgets/other/Modal/ModalLoading.vue";
import { sleep } from "~/src/shared/features/utils/sleep";

const component = extend({});
type VueComponent = InstanceType<typeof component>;

interface IModalOptions {
  darkened?: boolean;
  closeDelay?: number | null;
  notClosableFromOutside?: boolean;
}

// ? Тип компонента должен работать.
// ? Если ругается, снести нахер или при наличии избыточной тонны времени пофиксить
export interface IStoreProps {
  component: null | VueComponent;
  props?: Partial<Record<string, any> & IModalOptions>;
  options?: IModalOptions;
}

export interface IStoreState {
  modalState: IStoreProps;
  isOpened: boolean;
}

const useModalStore = defineStore("modalStore", {
  state: (): IStoreState => ({
    modalState: { component: null, props: {}, options: { darkened: false, closeDelay: null } },
    isOpened: false,
  }),
  actions: {
    /**
     * Open modal with providing vue component and/or props
     */
    openModal(payload: IStoreProps) {
      const { props, component, options } = payload;

      lockBody();

      this.modalState = { component, props: props || {}, options };
      this.setOpened();
    },

    clearState() {
      const basicState: IStoreProps = { component: null, props: {}, options: {} };
      this.modalState = basicState;

      this.setClosed();

      unlockBody();
    },

    /**
     * Closes modal
     */
    async closeModal(fromClick?: boolean) {
      if (fromClick) return this.clearState();

      if (this.modalState?.options?.closeDelay) {
        this.setClosed();

        await sleep(this.modalState.options.closeDelay);

        this.clearState();
      } else this.clearState();
    },

    openIFrameModal(url: string) {
      const options: IframeHTMLAttributes = {
        src: url,
      };

      this.openModal({ component: ModalIFrameVue, props: options });
    },

    openSuccessModal(options: IModalSuccessProps) {
      this.openModal({ component: ModalSuccess, props: options });
    },

    openInitModal(props: IInitModalProps) {
      this.openModal({ component: InitModal, props });
    },

    openProfileModal() {
      this.openModal({ component: ProfileModal, props: {}, options: { darkened: true } });
    },

    openLoadingModal() {
      this.openModal({
        component: ModalLoading,
        props: {},
        options: { darkened: true, closeDelay: 400, notClosableFromOutside: true },
      });
    },

    setOpened() {
      this.isOpened = true;
    },
    setClosed() {
      this.isOpened = false;
    },
  },
});

export default useModalStore;
