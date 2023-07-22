import { IImage } from "~/src/shared/features/types/shared.types";

export type IAuthSwiperSlide = {
 
  title: string;
  text: string;
} & IImage;
