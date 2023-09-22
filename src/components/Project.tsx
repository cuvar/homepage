import Link from "next/link";
import { linkIcon } from "~/utils/icons";

type Props = {
  name: string;
  description: string;
  url: string;
};

export default function Project(props: Props) {
  const url = new URL(props.url);
  const host = url.host + url.pathname;
  console.log(host);

  return (
    <div className="space-y-4 rounded-md border border-transparent px-4 py-4 hover:bg-slate-800">
      <h2 className="text-xl font-bold">{props.name}</h2>
      <p>{props.description}</p>
      <Link
        href={props.url}
        className="flex space-x-2 text-sm hover:text-cgreen-300"
      >
        <span>{linkIcon}</span>
        <span>{host}</span>
      </Link>
    </div>
  );
}
