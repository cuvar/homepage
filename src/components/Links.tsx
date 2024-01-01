import { ghIcon, linkedInIcon, mailIcon, twitterIcon } from "~/utils/icons";

export default function Links() {
  return (
    <div className="flex items-baseline justify-center space-x-4">
      <a
        href="/a/github"
        className="transition-all hover:scale-125 hover:underline active:opacity-80"
      >
        {ghIcon}
      </a>
      <a
        href="/a/linkedin"
        target="_blank"
        rel="noopener"
        className="transition-all hover:scale-125 hover:underline active:opacity-80"
      >
        {linkedInIcon}
      </a>
      <a
        href="/a/x"
        target="_blank"
        rel="noopener"
        className="transition-all hover:scale-125 hover:underline active:opacity-80"
      >
        {twitterIcon}
      </a>
      <a
        href="mailto:luca@cuvar.dev"
        className="transition-all hover:scale-125 hover:underline active:opacity-80"
      >
        {mailIcon}
      </a>
    </div>
  );
}
