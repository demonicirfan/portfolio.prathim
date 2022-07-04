import { Box, Center, Text } from '@chakra-ui/react';

const Logo = () => {
  return (
    <Center
      fontSize={{ base: '1.65rem', md: '1.8rem', lg: '2rem' }}
      fontWeight={{ base: '600', md: '700' }}
    >
      <Text textShadow='xl'>
        Pratim{' '}
        <Box as='span' fontFamily={'Playfair Display'} fontStyle='italic'>
          Bhosale
        </Box>
      </Text>
    </Center>
  );
};

export default Logo;
