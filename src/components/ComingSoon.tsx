import { Center, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const ComingSoon = () => {
  return (
    <Container>
      <Center
        overflow='hidden'
        textAlign='center'
        h='78vh'
        flexDirection='column'
        pb='10rem'
        w={'fit-content'}
      >
        <Center w='fit-content'>
          <Heading
            w={{ base: '22rem', md: '40rem' }}
            sx={{
              color: `white`,
              textShadow: `-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000`,
            }}
            fontSize={{ base: '5xl', md: '8xl' }}
          >
            Coming Soon
          </Heading>
          <Heading
            fontSize={{ base: '5xl', md: '8xl' }}
            position='absolute'
            transform={{
              base: 'translate(2px, -2px)',
              md: 'translate(4px, -4px)',
            }}
          >
            Coming Soon
          </Heading>
        </Center>
        <Text fontSize={{ base: 'xl', md: '3xl' }}>
          The website is under construction
        </Text>
      </Center>
    </Container>
  );
};

export default ComingSoon;
