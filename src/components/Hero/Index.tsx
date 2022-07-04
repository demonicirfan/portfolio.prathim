import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import CustomButton from '../../HOC/Button';

const Hero = () => {
  return (
    <Container maxW='7xl'>
      <Stack
        alignItems={'center'}
        justify='space-between'
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        <VStack
          maxW={'3xl'}
          alignItems={{ base: 'center', lg: 'start' }}
          p='5rem 0.5rem'
          spacing={{ base: '3rem', md: '5rem' }}
        >
          <VStack
            alignItems={'start'}
            textAlign={{ base: 'center', lg: 'start' }}
            spacing='1rem'
          >
            <Heading
              fontWeight={{ base: '500', md: '600' }}
              fontSize={{ base: '2.5rem', md: '5xl', lg: '6xl' }}
              maxW='6xl'
              lineHeight={'1.2'}
            >
              I am a{' '}
              <Box
                as='span'
                fontFamily={'Playfair Display'}
                fontWeight={'600'}
                fontStyle='italic'
              >
                Developer Advocate
              </Box>{' '}
              and Community Builder.
            </Heading>
            <Text
              w='full'
              textAlign={{ base: 'center', lg: 'start' }}
              fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
            >
              I love creating strategies for Growth hacking.
            </Text>
          </VStack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: '1rem', md: '2rem' }}
            alignItems={'center'}
          >
            <CustomButton variant='dark'>Read Article</CustomButton>
            <CustomButton variant='light'>Sponsor Me</CustomButton>
          </Stack>
        </VStack>
        <Center bg='black' w='fit-content' h={'fit-content'}>
          <Box
            bg='pratim.yellow'
            transform={'translate(0.5rem, -0.5rem)'}
            _hover={{
              transform: 'translate(0rem, -0rem)',
              transition: 'all 0.2s',
            }}
            transition='all 0.2s'
            w='18rem'
            h='18rem'
            border='2px solid black'
            borderBottom='2px dashed black'
          ></Box>
        </Center>
      </Stack>
    </Container>
  );
};

export default Hero;
