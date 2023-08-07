import { TAnyFunction } from "~/src/shared/features/types/shared.types";

type TShareToFacebookArguments = {
  href: string;
  cb?: TAnyFunction;
};
export const shareToFacebook = ({ cb = () => undefined, href = "" }: TShareToFacebookArguments) => {
  if (FB) {
    FB.ui(
      {
        method: "share",
        href: href,
        display: "touch",
      },
      cb,
    );
  }
};
