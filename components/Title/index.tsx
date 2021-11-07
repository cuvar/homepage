interface IProps {
  className?: string;
  children: React.ReactNode;
}

export default function Title(props: IProps) {
  return (
    <h1
      className={
        'my-auto text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-byzantium-500 to-crayola-500' +
        ' ' +
        props.className
      }>
      {props.children}
    </h1>
  );
}
