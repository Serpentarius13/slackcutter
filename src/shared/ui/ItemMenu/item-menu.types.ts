import { IImage, ILink, TAnyFunction } from "~/src/shared/features/types/shared.types";

export enum EItemMenuRender {
  BUTTON = "BUTTON",
  ARROW = "ARROW",
}

export interface IItemMenuOption {
  text: string;
  img: IImage;
  leftRenderType: EItemMenuRender;

  action?: TAnyFunction | ILink;
}
