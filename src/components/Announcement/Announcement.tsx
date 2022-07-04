import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Slide,
  Text,
} from '@chakra-ui/react';
import { MdClear } from 'react-icons/md';

const Announcement = ({ setAnnouncement, announcement }: any) => {
  return (
    <Container zIndex='200' maxW='100%'>
      <Slide direction='top' in={announcement} style={{ zIndex: 10 }}>
        <Flex h={{ base: '7rem', md: '3.5rem' }} w='full' bg='black'>
          <Center
            textAlign='center'
            as='button'
            onClick={() => {
              setAnnouncement(false);
            }}
            color='white'
            h='full'
            mx='auto'
          >
            <Heading fontWeight={'500'} fontSize='lg' p='0.5rem'>
              <b>XYZ Conference </b> on 11/11/22 - Register For the event ✨
            </Heading>
          </Center>
          <Box
            as='button'
            display='flex'
            alignItems={'center'}
            justifyContent='center'
            mx={{ base: '1rem', md: '2rem' }}
          >
            <MdClear
              size={26}
              color='white'
              onClick={() => setAnnouncement(false)}
            />
          </Box>
        </Flex>
      </Slide>
    </Container>
  );
};

export default Announcement;
