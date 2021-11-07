interface IProps {
  className?: string;
  children: React.ReactNode;
}

export default function Title(props: IProps) {
  return (
    <h2
      className={
        'text-3xl text-center font-bold text-crayola-100' +
        ' ' +
        props.className
      }>
      {props.children}
    </h2>
  );
}
