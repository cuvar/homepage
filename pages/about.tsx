import type { NextPage } from 'next';
import Head from 'next/head';
import SiteWrapper from '../components/SiteWrapper';
import Title from '../components/Title/h2';

const About: NextPage = () => {
  const head = (
    <Head>
      <title>cuvar | About</title>
      <meta name='description' content={'About cuvar'} />
    </Head>
  );
  return (
    <SiteWrapper head={head}>
      <Title>About me</Title>
    </SiteWrapper>
  );
};

export default About;
