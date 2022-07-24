type THeading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
interface IProps {
  text: string;
  className?: string;
  type: THeading;
}

export default function Heading(props: IProps) {
  switch (props.type) {
    case "h1":
      return (
        <h1 className={"text-2xl" + " " + props.className}>{props.text}</h1>
      );
    case "h2":
      return (
        <h2 className={"text-xl" + " " + props.className}>{props.text}</h2>
      );
    case "h3":
      return (
        <h3 className={"text-xl" + " " + props.className}>{props.text}</h3>
      );
    case "h4":
      return (
        <h4 className={"text-lg" + " " + props.className}>{props.text}</h4>
      );
    case "h5":
      return (
        <h5 className={"text-lg" + " " + props.className}>{props.text}</h5>
      );
    case "h6":
      return (
        <h6 className={"text-md" + " " + props.className}>{props.text}</h6>
      );
    default:
      return (
        <h1 className={"text-md" + " " + props.className}>{props.text}</h1>
      );
  }
}
