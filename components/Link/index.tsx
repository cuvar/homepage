import Link from 'next/link';

interface ILinkProps {
  href: string;
  className?: string;
  children?: any;
}

export default function CustomLink(props: ILinkProps) {
  return (
    <Link href={props.href}>
      <a
        className={
          'text-beigewhite-500 hover:underline text-lg active:text-byzantium-500' +
          ' ' +
          props.className
        }>
        {props.children}
      </a>
    </Link>
  );
}
