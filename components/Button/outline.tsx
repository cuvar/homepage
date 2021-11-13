interface IProps {
  className?: string;
  onClick?: () => any | null;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button(props: IProps) {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={
        'bg-transparent border text-crayola-500 border-crayola-500 rounded-md py-2 px-4 hover:text-crayola-200 hover:border-crayola-200 active:text-white active:border-crayola-900 active:bg-crayola-900 focus:outline-none' +
        ' ' +
        props.className
      }>
      {props.children}
    </button>
  );
}
