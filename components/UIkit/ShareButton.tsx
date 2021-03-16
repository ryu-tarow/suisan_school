import {
  TwitterShareButton,
  FacebookShareButton,
  HatenaShareButton,
  LineShareButton,
  TwitterIcon,
  FacebookIcon,
  HatenaIcon,
  LineIcon,
} from "react-share";

interface Props {
  text: string;
  url: string;
}

export const ShareButton = ({ text, url }: Props) => {
  return (
    <ul className="mt-1 flex justify-end">
      <li className=" m-0.5 duration-300 hover:opacity-70">
        <TwitterShareButton url={url} title={text}>
          <TwitterIcon size={32} round={false} />
        </TwitterShareButton>
      </li>
      <li className="m-0.5 duration-300 hover:opacity-70">
        <FacebookShareButton url={url}>
          <FacebookIcon size={32} round={false} />
        </FacebookShareButton>
      </li>
      <li className="m-0.5 duration-300 hover:opacity-70">
        <HatenaShareButton url={url} title={text}>
          <HatenaIcon size={32} round={false} />
        </HatenaShareButton>
      </li>
      <li className="m-0.5 duration-300 hover:opacity-70">
        <LineShareButton url={url} title={text}>
          <LineIcon size={32} round={false} />
        </LineShareButton>
      </li>
    </ul>
  );
};
