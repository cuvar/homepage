import Link from "./Link";

export default function Footer() {
  return (
    <div className="flex justify-center px-5 py-5">
      <div>
        <Link href="https://github.com/cuvar" title="cuvar" tab="new" /> | made
        with love and{" "}
        <Link href="https://nextjs.org/" title="Nextjs" tab="new" />
      </div>
    </div>
  );
}
