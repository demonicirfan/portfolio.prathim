import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import TweetCard from './TweetCard';

import { TwitterTweetEmbed } from 'react-twitter-embed';
import TweetCard2 from './TweetCard2';

const res = [
  {
    id: '1535237118280142848',
    text: 'Are you not able to find ideas for your personal project? Here is a list of some amazing open-source side projects.\n\n↓',
  },
  {
    id: '1535128515854536704',
    text: 'Start your freelancing journey on @fiverr 👇🏻 https://t.co/emy7O5B7vb',
  },
  {
    id: '1535105935730913281',
    text: 'Personal branding is the strategy of creating your skills more valuable.',
  },
  {
    id: '1542552655540604928',
    text: 'Show your current physique ✨ https://t.co/lOGx9jYGFY',
  },
];

const Tweets = () => {
  const [tweets, setTweets] = useState();

  useEffect(() => {
    const params = {
      screen_name: 'pratim_bhosale',
      count: 10,
      exclude_replies: true,
      exclude_retweets: true,
      // user.field: 'created_at ,name, profile_image_url, url ,username'
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization:
        'AAAAAAAAAAAAAAAAAAAAAEZfdQEAAAAAdSKA1PbEGiEMtFF6JDjLdXsZi6s%3D5I9WCYuXLUNstJDqFP2TLpB5GfF86JKLzlUueiykQhEMHURQIp',
    };

    axios
      .get('https://api.twitter.com/2/users/1042653228234682368/tweets', {
        headers,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    //return () => {};
  }, [tweets]);

  return (
    <Container py='6rem' maxW='full'>
      <Container maxW={'8xl'}>
        <HStack py='3rem' mx='auto' maxW={'7xl'} justifyContent='space-between'>
          <Heading>
            Recent{' '}
            <Box as='span' fontStyle='italic' fontFamily={'Playfair Display'}>
              Tweets
            </Box>
          </Heading>
          <Center w='fit-content'>
            <HiOutlineArrowRight size='30' />
          </Center>
        </HStack>
      </Container>
      <Flex
        py='3rem'
        mx='auto'
        //w='fit-content'
        justifyContent={'center'}
        align-Items='center'
        gap='2rem'
        wrap={'wrap'}
        direction={{ base: 'row', md: 'row' }}
        w='80vw'
        overflow='hidden'
      >
        {res.map((tweet) => (
          <TweetCard text={tweet.text} id={tweet.id} />
        ))}
      </Flex>
      {/*<Flex
        py='3rem'
        mx='auto'
        //w='fit-content'
        //justifyContent={'center'}
        align-Items='center'
        // gap='2rem'
        wrap={'wrap'}
        direction={{ base: 'row', md: 'row' }}
        w='60vw'
        overflow='hidden'
      >
        {res.map((tweet) => (
          <Box w='15rem'>
            <TweetCard2 text={tweet.text} id={tweet.id} />
          </Box>
        ))}
      </Flex>*/}
    </Container>
  );
};

export default Tweets;
