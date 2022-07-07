import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  VStack,
  useColorModeValue,
  InputGroup,
  Heading,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import Logo from '../Logo/Logo';
import {
  SiPolywork,
  SiHashnode,
  SiTwitter,
  SiYoutube,
  SiLinkedin,
} from 'react-icons/si';
import { ImLinkedin2 } from 'react-icons/im';
import Link from 'next/link';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={'auto'}
      h={'auto'}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
      target='_blank'
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Box
      borderTop={'2px solid black'}
      p={{ base: '1.5rem', md: '2rem' }}
      bg={'pratim.yellow'}
      color='black'
    >
      <Container fontSize='lg' as={Stack} maxW={'6xl'} py={10} h='100%'>
        <Stack
          gap='5rem'
          flexDirection={{ base: 'column-reverse', md: 'row' }}
          w='full'
          justifyContent={'space-between'}
        >
          <Stack
            gap={{ base: '3rem', md: '5rem' }}
            flexDirection={{ base: 'column', md: 'row' }}
          >
            <Stack spacing={6}>
              <Box w='fit-content'>
                <Logo />
              </Box>
              <Stack direction={'row'} spacing={4}>
                <SocialButton
                  label={'Twitter'}
                  href={'https://twitter.com/BhosalePratim'}
                >
                  <SiTwitter size={22} />
                </SocialButton>
                <SocialButton label={'YouTube'} href='https://youtube.com'>
                  <SiYoutube size={22} />
                </SocialButton>
                <SocialButton
                  label={'Linkedin'}
                  href={'https://www.linkedin.com/in/pratim-bhosale'}
                >
                  <SiLinkedin size={22} />
                </SocialButton>
                <SocialButton
                  label={'Hashnode'}
                  href={'https://hashnode.com/@Pratim'}
                >
                  <SiHashnode size={22} />
                </SocialButton>
                <SocialButton
                  label={'Polywork'}
                  href={'https://www.polywork.com/pratimbhosale'}
                >
                  <SiPolywork size={22} />
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <Link href={'/blog'}>Blog</Link>
              <Link href={'/course'}>Courses</Link>
              <Link href={'/service'}>Services</Link>
              <Link href={'/contact'}>Contact</Link>
            </Stack>
            <Stack gap='1rem' align={'flex-start'}>
              <Box>
                <Text fontFamily={'Playfair Display'} fontStyle='italic'>
                  Email
                </Text>
                <Text fontSize='md' fontWeight={'400'} color='#878787'>
                  <Link href={'#'}>email@xyz.com</Link>
                </Text>
              </Box>
              <Box>
                <Text fontFamily={'Playfair Display'} fontStyle='italic'>
                  Contact
                </Text>
                <Text fontSize='md' fontWeight={'400'} color='#878787'>
                  <Link href={'#'}>+9123456789</Link>
                </Text>
              </Box>
            </Stack>
          </Stack>
          <Stack gap='1.5rem' align={'flex-start'}>
            <VStack alignItems='start' gap='0.5re'>
              <Heading fontSize='2xl' fontWeight={'500'}>
                Pratim`s Newsletter
              </Heading>
              <Text
                fontSize='md'
                fontWeight={'400'}
                color='#878787'
                maxW='22rem'
              >
                {' '}
                Sharing insights about Dev Rel, Community Building, Growth
                hacking and Content Creation.
              </Text>
            </VStack>
            <Stack direction={'row'}>
              <InputGroup border='2px solid black'>
                <Input
                  h='6rem'
                  border={0}
                  w='10rem'
                  rounded='0'
                  placeholder={'Email'}
                  _placeholder={{
                    color: 'gray.500',
                    fontSize: '1.3rem',
                  }}
                  bg={'white'}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <Box
                  w='10rem'
                  as='button'
                  bg={'black'}
                  fontSize={'1.2rem'}
                  color={'white'}
                  fontFamily={'Playfair Display'}
                  fontStyle='italic'
                >
                  Subscribe
                </Box>
              </InputGroup>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
export default Footer;
