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

const TweetCard = ({ text, id }: IProps) => {
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
    <Center bg='black' maxW='fit-content'>
      <VStack
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        transform={hover ? 'translate(8px, -8px)' : ''}
        transition='all 0.3s'
        bg='white'
        minH='28rem'
        h='100%'
        w={{ base: '70vw', sm: '25rem', md: '20rem', lg: '22rem' }}
        maxW={{ base: '30rem', lg: '22rem' }}
        spacing='1rem'
        align={'start'}
        p='1rem'
        border={'2px solid black'}
      >
        <HStack>
          <Avatar size='lg'></Avatar>
          <VStack
            align={'start'}
            justify={'space-around'}
            justifyItems='center'
            spacing='-1'
          >
            <Heading
              fontSize={{ base: 'lg', md: 'xl' }}
              fontWeight='500'
              lineHeight={'1.2'}
            >
              Pratim🥑
            </Heading>
            <Text color='gray.500'>@bhosalepratim</Text>
          </VStack>
        </HStack>
        <Text>
          {textArray?.map(
            (a, key): JSX.Element =>
              mentionsPosition.includes(key) ? (
                <Box as='span' color='blue.300'>
                  {a}{' '}
                </Box>
              ) : (
                <span>{a}</span>
              )
          )}
        </Text>
        {/* <TwitterTweetEmbed
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
        /> */}
      </VStack>
    </Center>
  );
};

export default TweetCard;
