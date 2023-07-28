import { defineStore } from "pinia";
import { IImage } from "~/src/shared/features/types/shared.types";
import { authLeftImages } from "~/src/entities/auth/auth-left-images.consts";

interface IUseLeftImage {
  image: null | IImage;
}

export const useLeftImage = defineStore("left-image", {
  state: (): IUseLeftImage => ({ image: null }),
  actions: {
    setImage(src: string, alt: string) {
      this.image = { imgSource: src, imgAlt: alt };
    },
    resetImage() {
      this.image = null;
    },

    setRestoreStepOne() {
      this.setImage(
        authLeftImages.restoreStart,
        "An opening lock with a red switcher on blue gradient background",
      );
    },

    setCode() {
      this.setImage(
        authLeftImages.code,
        "An electrically buzzing email in an envelope on blue gradient background",
      );
    },

    setRestoreStepThree() {
      this.setImage(
        authLeftImages.restoreComplete,
        "A closed lock with a green switcher on blue gradient background",
      );
    },

    setProfileSetup() {
      this.setImage(
        authLeftImages.profileSetup,
        "A fine tuned profile icon on blue gradient background",
      );
    },
  },
  getters: {
    hasImage(state) {
      return !!state.image;
    },
  },
});
