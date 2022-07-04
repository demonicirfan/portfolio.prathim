import {
  Avatar,
  Box,
  Center,
  Heading,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

interface IProps {
  text: string;
  id: string;
}

const TweetCard2 = ({ text, id }: IProps) => {
  const [hover, setHover] = useState(false);
  const textArray = text.split(' ');
  const mentionsPosition: number[] = [];
  const modifiedArray = textArray.filter((word, index, array) => {
    if (word.startsWith('@')) {
      mentionsPosition.push(index);
    } else if (word.startsWith('https')) {
      mentionsPosition.push(index);
    }
  });

  return (
    <TwitterTweetEmbed
      placeholder={
        <Center p='1rem' maxW={'fit-content'} h={'fit-content'}>
          <Stack w={'30rem'} flexDirection={'column'} gap='1rem'>
            <Stack direction='row' alignItems={'center'} gap='2rem'>
              <SkeletonCircle
                startColor='gray.300'
                endColor='gray.100'
                size='16'
              />
              <SkeletonText
                mt='4'
                w='8em'
                noOfLines={2}
                spacing='4'
                startColor='gray.300'
                endColor='gray.100'
              ></SkeletonText>
            </Stack>
            <SkeletonText
              mt='4'
              w={{ base: '52vw', md: '16rem', lg: '18rem' }}
              noOfLines={6}
              spacing='4'
              startColor='gray.300'
              endColor='gray.100'
            ></SkeletonText>
            <SkeletonText
              mt='4'
              w={{ base: '52vw', md: '16rem', lg: '18rem' }}
              noOfLines={4}
              spacing='4'
              startColor='gray.300'
              endColor='gray.100'
            ></SkeletonText>
            <Skeleton
              startColor='gray.300'
              endColor='gray.100'
              w='10rem'
              h='3rem'
            ></Skeleton>
          </Stack>
        </Center>
      }
      options={{
        cards: 'hidden',
        hideCard: true,
        hideThread: true,
        maxWidth: 800,
        width: 100,
      }}
      tweetId={id}
    />
  );
};

export default TweetCard2;
