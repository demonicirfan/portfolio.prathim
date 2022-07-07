import {
  Box,
  Center,
  Container,
  Flex,
  Collapse,
  Text,
  useDisclosure,
  Button,
  MenuList,
  MenuButton,
  MenuItem,
} from '@chakra-ui/react';
import { Cross as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CustomButton from '../../HOC/Button';
import Logo from '../Logo/Logo';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure() as any;
  const router = useRouter();
  const path = router.pathname;
  console.log(router.pathname);
  return (
    <header>
      <Container maxW='full'>
        <Flex
          maxW='8xl'
          mx='auto'
          justifyContent='space-between'
          p={{ base: '1.8rem 1rem', sm: '2.6rem 1.4rem' }}
        >
          <Link href='/'>
            <Box as='button'>
              <Logo />
            </Box>
          </Link>
          <nav>
            <Center
              display={{ base: 'none', lg: 'flex' }}
              flexDirection='row'
              fontSize='xl'
              minH='100%'
              gap={{ base: '0', md: '2vw', lg: '3.5vw' }}
              maxW='36rem'
              fontWeight='500'
            >
              <Link href='/blog'>
                <Box
                  as='button'
                  _hover={{
                    paddingBottom: '0.2rem',
                    borderBottom: '1px solid black',
                  }}
                  transition='all 0.2s'
                  fontWeight={router.pathname === '/blog' ? '600' : '400'}
                >
                  Blog
                </Box>
              </Link>
              <Link href='/service'>
                <Box
                  as='button'
                  _hover={{
                    paddingBottom: '0.2rem',
                    borderBottom: '1px solid black',
                  }}
                  transition='all 0.2s'
                  fontWeight={router.pathname === '/service' ? '600' : '400'}
                >
                  Services
                </Box>
              </Link>
              <Link href='/course'>
                <Box
                  as='button'
                  _hover={{
                    paddingBottom: '0.2rem',
                    borderBottom: '1px solid black',
                  }}
                  transition='all 0.2s'
                  fontWeight={router.pathname === '/course' ? '600' : '400'}
                >
                  Course
                </Box>
              </Link>
              <Link href='/contact'>
                <Box
                  as='button'
                  _hover={{
                    paddingBottom: '0.2rem',
                    borderBottom: '1px solid black',
                  }}
                  transition='all 0.2s'
                  fontWeight={router.pathname === '/contact' ? '600' : '400'}
                >
                  Contact
                </Box>
              </Link>
            </Center>
          </nav>
          <Button variant={'unstyled'} display={{ base: 'none', lg: 'flex' }}>
            <CustomButton>Sponsor Me</CustomButton>
          </Button>
          <Center display={{ base: 'flex', lg: 'none' }}>
            <Hamburger toggled={isOpen} toggle={onToggle} />
          </Center>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <nav>
            <Center
              display={{ base: 'flex', lg: 'none' }}
              flexDirection='column'
              fontSize='2xl'
              p='2rem'
              gap='1.4rem'
              fontWeight='500'
            >
              <Link href='/blog'>Blog</Link>
              <Link href='/services'>Services </Link>
              <Link href='/course'>Course </Link>
              <Link href='/contact'>Contact </Link>
            </Center>{' '}
          </nav>
        </Collapse>
      </Container>
    </header>
  );
};

export default Navbar;
