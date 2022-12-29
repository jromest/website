import { Codepen, Github, Twitter } from "./Icons";
import { config } from "../config";

interface SocialProps {
  color: string;
}

const { twitter, github, codepen } = config.socials;

export const Social = ({ color }: SocialProps) => {
  return (
    <div className="flex">
      <a
        aria-label="twitter"
        href={twitter}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter color={color} />
      </a>

      <a
        aria-label="github"
        className="pl-4"
        href={github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github color={color} />
      </a>

      <a
        aria-label="codepen"
        className="pl-4"
        href={codepen}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Codepen color={color} />
      </a>
    </div>
  );
};
