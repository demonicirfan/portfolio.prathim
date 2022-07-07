import Head from 'next/head';
import React from 'react';
import ComingSoon from '../../components/ComingSoon';

const index = () => {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta name='Services by Pratim' content='This is courses page' />
      </Head>
      <ComingSoon />
    </>
  );
};

export default index;
