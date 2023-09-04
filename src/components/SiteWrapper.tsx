import Head from "next/head";
import Footer from "./Footer";

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
      <div className="h-screen w-screen">
        <main className="h-full w-full bg-slate-900 text-neutral-200">
          {props.children}
        </main>
        <Footer />
      </div>
    </>
  );
}
