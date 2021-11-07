import Link from 'next/link';

interface IProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  inactive?: boolean;
}

export default function OutlineLink(props: IProps) {
  const styling = props.inactive
    ? 'text-gray-500 border-gray-500 pointer-events-none'
    : 'ext-crayola-500 border-crayola-500 hover:text-crayola-200 hover:border-crayola-200 active:text-white active:border-crayola-900 active:bg-crayola-900';
  return (
    <Link href={props.href}>
      <a
        className={
          'bg-transparent border rounded-md py-2 px-4 focus:outline-none' +
          ' ' +
          styling +
          ' ' +
          props.className
        }>
        {props.icon}
        {props.children}
      </a>
    </Link>
  );
}
