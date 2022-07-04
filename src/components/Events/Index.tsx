import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import React from 'react';
import Quicklinks from './Quicklinks';
import { HiOutlineArrowRight } from 'react-icons/hi';
import EventCard from './EventCard';

const events = [
  {
    title: 'Making a career in Silicon Valley with Jon Rahoi',
    des: 'Hosted a Twitter space with Jon Rahoi, Sr. Staff Software Engineer at Credit Karma and Rong Liew, CEO of Showwcase ',
  },
  {
    title: 'Making a career in Silicon Valley with Jon Rahoi.',
    link: 'https://www.polywork.com/pratimbhosale/highlights/a5277988-ea1b-45e7-85e7-5f9f6f8cd4d2',
  },
  {
    title: 'Build In Public - Talk like a developer ',
    des: 'Hosted a session on Build in public and content creation for Draper Startup House ',
    link: 'https://www.polywork.com/pratimbhosale/highlights/21ec3cf3-3a5b-49db-ad5a-c5b651f96740',
  },
  { title: 'Getting started with Developer Advocacy and Web3' },
  { title: 'Kickstart your DevRel journey: Part 2' },

  {
    title: 'What Young India Wants',
    des: 'Twitter space on the occasion of Republic Day.',
    link: 'https://www.polywork.com/pratimbhosale/highlights/f1cc9cb3-3e4f-4809-9589-fe626ba04155',
  },
];

const Events = () => {
  return (
    <Container maxW='120rem' p='0'>
      <Container
        zIndex={'2'}
        transform={{ base: 'translateY(3.8rem)', md: 'translateY(2rem)' }}
        maxW='full'
      >
        <Quicklinks />
      </Container>
      <Container
        py='6rem'
        bg='pratim.yellow'
        border='2px solid black'
        maxW='full'
      >
        <Container maxW={'8xl'}>
          <HStack
            py='3rem'
            mx='auto'
            maxW={'7xl'}
            justifyContent='space-between'
          >
            <Heading>
              Upcoming{' '}
              <Box as='span' fontStyle='italic' fontFamily={'Playfair Display'}>
                Events
              </Box>
            </Heading>
            <Center w='fit-content'>
              <HiOutlineArrowRight size='30' />
            </Center>
          </HStack>
          <Flex
            flexWrap={'wrap'}
            // justify='center'
            //  align='center'
            alignContent={'center'}
            gap='2rem'
            p='2rem'
            maxH={{
              base: '90rem',
              sm: '80rem',
              md: '50rem',
              lg: '40rem',
              xl: '30rem',
            }}
            flexDirection={'column'}
          >
            {events.map((event, index) => (
              <EventCard event={event} key={index} />
            ))}
          </Flex>
        </Container>
      </Container>
    </Container>
  );
};

export default Events;
