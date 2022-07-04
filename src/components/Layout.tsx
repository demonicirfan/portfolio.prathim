import { Container } from '@chakra-ui/react';
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
