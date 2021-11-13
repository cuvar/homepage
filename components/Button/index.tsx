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
        'bg-crayola-500 text-black rounded-md py-2 px-4 hover:bg-crayola-200 active:bg-crayola-900 focus:outline-none focus:ring focus:border-crayola-100' +
        ' ' +
        props.className
      }>
      {props.children}
    </button>
  );
}
