import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';

const EventCard = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <Center bg='black' maxW={'fit-content'} h={'fit - content'}>
      <Box
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        zIndex={'2'}
        transition='all 0.3s'
        transform={hover ? 'translate(6px, -6px)' : ''}
        outline='2px solid black'
        display='flex'
        as='a'
        href={props.event?.link}
        bg='white'
        p='1.8rem'
        w={{ base: '70vw', sm: '70vw', md: '36vw', lg: '25vw' }}
        maxW={{ base: '30rem', lg: '22rem' }}
        minH={{
          base: props.event?.des && '8rem',
          md: props.event?.des && '14rem',
        }}
      >
        <VStack spacing={'0.6rem'} alignItems={'start'}>
          <Heading
            isTruncated
            noOfLines={'2'}
            fontSize={{ base: 'md', md: 'xl' }}
          >
            {props.event.title}
          </Heading>
          <Text isTruncated noOfLines={'3'} fontSize={{ base: 'sm', md: 'md' }}>
            {props.event?.des}
          </Text>
        </VStack>
        <Center alignItems={'flex-end'} h='full' w='fit-content'>
          <Flex
            alignItems={'flex-end'}
            justifyContent='end'
            w='1.5rem'
            transition='all 0.5s'
            overflow='hidden'
          >
            <Center
              gap='0.8rem'
              flexDirection='row'
              transition='all 0.5s'
              transform={hover && 'translateX(2rem)'}
            >
              <Center transition='all 0.5s' transform={!hover && 'scale(0.2)'}>
                <HiOutlineArrowRight size='20' />
              </Center>
              <Center transition='all 0.5s' transform={hover && 'scale(0.2)'}>
                <HiOutlineArrowRight size='20' />
              </Center>
            </Center>
          </Flex>{' '}
        </Center>
      </Box>
    </Center>
  );
};

export default EventCard;
