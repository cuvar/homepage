import Link from "next/link";

interface IProps {
  href: string;
  title: string;
  tab?: "new" | "self";
}

export default function CustomLink(props: IProps) {
  return (
    <Link href={props.href}>
      {props.tab === "new" ? (
        <a className="hover:underline" target="_blank" rel="noopener">
          {props.title}
        </a>
      ) : (
        <a className="hover:underline">{props.title}</a>
      )}
    </Link>
  );
}
