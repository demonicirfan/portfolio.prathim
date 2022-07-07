import Head from 'next/head';
import React from 'react';
import ComingSoon from '../../components/ComingSoon';

const index = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="Pratim's Blog" content='This is a Blog' />
      </Head>
      <ComingSoon />
    </>
  );
};

export default index;
