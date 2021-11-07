import type { NextPage } from 'next';
import Head from 'next/head';
import SiteWrapper from '../components/SiteWrapper';
import Title from '../components/Title/h2';

const Imprint: NextPage = () => {
  const head = (
    <Head>
      <title>cuvar | Imprint</title>
      <meta name='description' content={"Imprint for cuvar's homepage"} />
    </Head>
  );
  return (
    <SiteWrapper head={head}>
      <Title>This part of the website is currently under construction.</Title>
    </SiteWrapper>
  );
};

export default Imprint;
