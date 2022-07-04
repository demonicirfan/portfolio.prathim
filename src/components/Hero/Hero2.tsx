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
  import React from 'react';
  import CustomButton from '../../HOC/Button';
  
  const Hero2 = () => {
    return (
      <Container maxW='full'>
        <VStack p='5rem 0.5rem' spacing={{ base: '3rem', md: '5rem' }}>
          <VStack spacing='1rem'>
            <Heading
              fontWeight={{ base: '500', md: '600' }}
              fontSize={{ base: '2.5rem', md: '5xl', lg: '6xl' }}
              maxW='6xl'
              textAlign='center'
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
            <Text fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
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
      </Container>
    );
  };
  
  export default Hero2;
  