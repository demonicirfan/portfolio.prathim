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

//import { TwitterTweetEmbed } from 'react-twitter-embed';
import TweetCard2 from './TweetCard2';

const res = [
  {
    id: '1544917404337438722',
    text: '',
  },
  {
    id: '1543633404226179074',
    text: '',
  },
  {
    id: '1543197360859365376',
    text: '',
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
       // console.log(res);
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
        {res.map((tweet, key) => (
          <TweetCard key={key} text={tweet.text} id={tweet.id} />
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
