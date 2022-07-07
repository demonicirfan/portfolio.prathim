import Head from 'next/head';
import React from 'react';
import ComingSoon from '../../components/ComingSoon';

const index = () => {
  return (
    <>
        <Head>
        <title>Contact</title>
        <meta
          name="Contact me"
          content="This is a Contact me page"
        />
      </Head>
      <ComingSoon />
    </>
  );
};

export default index;
