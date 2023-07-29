import { IImage } from "~/src/shared/features/types/shared.types";

export interface IInitModalProps {
  title: string;
  text: string;
  optimizedFor: IImage[];

  backgroundImage: IImage;
}
