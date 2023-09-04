import Head from "next/head";

interface IProps {
  children: JSX.Element;
}

export default function SiteWrapper(props: IProps) {
  return (
    <>
      <Head>
        <title>cuvar.dev</title>
        <meta name="description" content="cuvar's Homepage" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full">
        <main className="h-screen w-screen bg-slate-900 text-neutral-200">
          {props.children}
        </main>
        <script
          defer
          data-domain="cuvar.dev"
          src="https://plausible.io/js/script.js"
        ></script>
      </div>
    </>
  );
}
