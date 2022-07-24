import Heading from "./Heading";
import Link from "./Link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-5 py-5 bg-darkred-400">
      <Heading text={"cuvar.dev"} type={"h1"}></Heading>
      <div className="flex space-x-4">
        <Link href="/" title="Home" />
        <Link href="/playground" title="Playground" />
      </div>
    </div>
  );
}
