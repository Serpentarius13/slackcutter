import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "w-fit flex items-center justify-center border-[1px] border-solid border-transparent transition-standard",
  {
    variants: {
      variant: {
        outline:
          "bg-white !border-black text-black hover:bg-black hover:text-white",
        filled:
          "bg-black !border-black text-white hover:bg-white hover:text-black",
        blue: "!border-blue bg-blue text-white hover:bg-white hover:text-blue",
        transparent:
          "borderline-transparent bg-white text-black hover:border-black hover:bg-black hover:text-white",
      },
      size: {
        small:
          "py-[1.3rem] text-small rounded-[1.6rem] px-[3rem] text-[1.9rem]",
        medium: "py-[2rem] px-[4.2rem] rounded-biggest text-big",
        big: "py-[4rem] px-[5.5rem] rounded-big text-big",
        smallest: "py-[1.2rem] px-[3.4rem] rounded-[3.8rem] text-medium",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "medium",
    },
  }
);
