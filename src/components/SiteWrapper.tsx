import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

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
      <div className="w-screen bg-slate-900">
        <Navbar />
        <main className="h-screen w-full text-neutral-200">
          {props.children}
        </main>
        <Footer />
      </div>
    </>
  );
}
