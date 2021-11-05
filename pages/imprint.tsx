import type { NextPage } from 'next';
import Head from 'next/head';

const Imprint: NextPage = () => {
  return (
    <div className='bg-oxford h-screen'>
      <Head>
        <title>cuvar | Imprint</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      <main className='h-screen flex justify-center align-items-center'>
        <h1 className='my-auto text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gradientred to-gradientblue'>
          This is the imprint section for my homepage
        </h1>
      </main>
    </div>
  );
};

export default Imprint;
