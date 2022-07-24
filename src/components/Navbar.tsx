import Link from "./Link";

export default function Navbar() {
  return (
    <div className="flex justify-between px-5 py-5 bg-darkred-400">
      <div>cuvar.dev</div>
      <Link href="/playground" title="Playground" />
    </div>
  );
}
