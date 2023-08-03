export type ILink = {
  link: string;
  text: string;
};

export interface IHeroCard {
  img: string;
  alt: string;
  text: string;
}

export interface IImage {
  imgSource: string;
  imgAlt: string;
}

export type TAnyFunction = (...args: any[]) => any;
