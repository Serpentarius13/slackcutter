export enum EItemMenuRender {
  BUTTON = "BUTTON",
  ARROW = "ARROW",
}

export interface IItemMenuOption {
  text: string;
  iconName: string;
  leftRenderType: EItemMenuRender;
}
