import { Container } from '@chakra-ui/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Announcement from './Announcement/Announcement';
import Footer from './Footer/Index';
import Navbar from './Navbar/Index';

type Props = {
  children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [announcement, setAnnouncement] = useState(true);
  const [dimensions, setDimensions] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setDimensions(3);
      console.log('effect - ', dimensions);
    }, 0);
  }, [dimensions]);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:title' content='Pratim Bhosale' key='ogtitle' />

        <meta property='og:url' content='https://pratimbhosale.com' />
        <meta property='og:title' content='Pratim Bhosale' />
        <meta
          property='og:description'
          content='I am a Developer Advocate and Community Builder. I love creating strategies for growth hacking.'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/demoniirfan/image/upload/v1657187791/Frame_49_euuyze.png'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='pratimbhosale.com' />
        <meta property='twitter:url' content='https://twitter.com/BhosalePratim' />
        <meta name='twitter:title' content='Pratim Bhosale' />
        <meta
          name='twitter:description'
          content='I am a Developer Advocate and Community Builder. I love creating strategies for growth hacking.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/demoniirfan/image/upload/v1657187791/Frame_49_euuyze.png'
        />
        <meta charSet='utf-8' />
        <title>Pratim Bhosale</title>
      </Head>
      {announcement && (
        <Announcement
          setAnnouncement={setAnnouncement}
          announcement={announcement}
        />
      )}
      <Container
        zIndex='1'
        maxW='full'
        p='0'
        transform={{
          base: `${announcement ? `translateY(${dimensions * 2}rem)` : ''}`,
          md: `${announcement ? `translateY(${dimensions}rem)` : ''}`,
        }}
        transition='all 0.35s'
      >
        <Navbar />
        {children}
        <footer>
          <Footer />
        </footer>
      </Container>
    </>
  );
};

export default Layout;
