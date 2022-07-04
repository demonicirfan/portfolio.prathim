import { Center, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const _error = () => {
  return (
    <Container>
      <Center h='78vh' flexDirection='column' pb='10rem'>
        <Center w='fit-content'>
          <Heading
            sx={{
              color: `white`,
              textShadow: `-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000`,
            }}
            fontSize='8xl'
          >
            404 Error
          </Heading>
          <Heading
            fontSize='8xl'
            position='absolute'
            w='fit-content'
            transform='translate(4px, -4px)'
          >
            404 Error
          </Heading>
        </Center>
        <Text fontSize='3xl'>Oops! there was an error</Text>
      </Center>
    </Container>
  );
};

export default _error;
