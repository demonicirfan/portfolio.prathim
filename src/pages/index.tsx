import type { NextPage } from 'next';
import Head from 'next/head';
import Blog from '../components/Blogs/Index';
import Events from '../components/Events/Index';
import Hero from '../components/Hero/Index';
import Tweets from '../components/Tweets/Tweets';
import { Container } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <>
      <Container
        display='flex'
        flexDirection={'column'}
        gap={{ base: '3rem', md: '6rem' }}
        maxW='full'
        py={{ base: '2rem', md: '4rem' }}
      >
        <Hero />
        <Events />
        <Tweets />
        <Blog />
      </Container>
    </>
  );
};

export default Home;
