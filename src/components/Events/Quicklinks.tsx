import {
  Box,
  Center,
  Container,
  Fade,
  HStack,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

const Quicklinks = () => {
  const [hover, setHover] = useState(false);
  return (
    <Container maxW='fit-content'>
      {/* <Text
        py='1rem'
        fontSize='3xl'
        fontStyle='italic'
        fontFamily={'Playfair Display'}
      >
        Quick Links
      </Text> */}
      <Stack
        bg='white'
        spacing='-0.5'
        direction={{ base: 'column', md: 'row' }}
      >
        <HStack spacing='-0.5'>
          <Center
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            border={'2px solid black'}
          >
            <Center
              transition='all 0.2s'
              minW={{ base: '8rem', lg: '14rem' }}
              p='1rem'
            >
              <Box
                as='a'
                href='https://youtube.com'
                _
                transition='all 0.2s'
                fontSize={{ base: 'md', md: 'xl' }}
                fontWeight='500'
              >
                Youtube
              </Box>
            </Center>
          </Center>
          <Center border={'2px solid black'}>
            <Center
              minW={{ base: '8rem', lg: '14rem' }}
              p='1rem'
              fontSize={{ base: 'md', md: 'xl' }}
              fontWeight='500'
            >
              Twitter
            </Center>
          </Center>
        </HStack>
        <HStack spacing='-0.5'>
          <Center border={'2px solid black'}>
            <Center
              minW={{ base: '8rem', lg: '14rem' }}
              p='1rem'
              fontSize={{ base: 'md', md: 'xl' }}
              fontWeight='500'
            >
              LinkedIn
            </Center>
          </Center>
          <Center border={'2px solid black'}>
            <Center
              minW={{ base: '8rem', lg: '14rem' }}
              p='1rem'
              fontSize={{ base: 'md', md: 'xl' }}
              fontWeight='500'
            >
              Polywork
            </Center>
          </Center>
        </HStack>
      </Stack>
    </Container>
  );
};

export default Quicklinks;
