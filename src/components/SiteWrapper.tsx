import Head from "next/head";
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
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="flex h-screen w-screen flex-col bg-gray-900">
        <Navbar />
        <main className="h-full w-full pt-10 text-neutral-200">
          {props.children}
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}
