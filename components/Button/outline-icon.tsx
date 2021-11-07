interface IProps {
  className?: string;
  onClick?: () => any | null;
  children: React.ReactNode;
  icon: React.ReactNode;
  inactive?: boolean;
}

export default function Button(props: IProps) {
  const styling = props.inactive
    ? 'text-gray-500 border-gray-500 '
    : 'ext-crayola-500 border-crayola-500 hover:text-crayola-200 hover:border-crayola-200 active:text-white active:border-crayola-900 active:bg-crayola-900';
  return (
    <button
      onClick={props.onClick}
      className={
        'bg-transparent border rounded-md py-2 px-4 focus:outline-none' +
        ' ' +
        styling +
        ' ' +
        props.className
      }
      disabled={props.inactive}>
      {props.icon}
      {props.children}
    </button>
  );
}
