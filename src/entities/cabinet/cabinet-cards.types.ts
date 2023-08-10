import { IProjectApiData } from "./ProjectCard/project-card.types";
import { ITemplate } from "./TemplateCard/template-card.types";

export enum ECabinetCardsTypes {
  PROJECT = "PROJECT",
  TEMPLATE = "TEMPLATE",
}

export type ICardList =
  | {
      type: ECabinetCardsTypes.PROJECT;
      items: IProjectApiData[];
    }
  | { type: ECabinetCardsTypes.TEMPLATE; items: ITemplate[] };
