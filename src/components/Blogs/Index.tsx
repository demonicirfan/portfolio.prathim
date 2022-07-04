import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Skeleton,
  SkeletonText,
  Stack,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import BlogCard from './BlogCard';

const data = [
  {
    title: 'Lorem ipsum',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper',
    img: 'https://picsum.photos/200/300',
    link: 'https://google.com',
  },
  {
    title: 'Lorem ipsum',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper',
    img: 'https://picsum.photos/200/300',
    link: 'https://google.com',
  },
  {
    title: 'Lorem ipsum',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper',
    img: 'https://picsum.photos/200/300',
    link: 'https://google.com',
  },
];

const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const query = `
    {
      user(username: "pratim") {
        publication {
          posts{
            slug
            title
            brief
            coverImage
          }
        }
      }
    }
  `;
    axios({
      url: 'https://api.hashnode.com/',
      method: 'post',
      data: {
        query: query,
      },
    })
      .then((res) => {
        setBlogData(res.data.data.user.publication.posts);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container maxW='8xl' pb='6rem'>
      <HStack py='3rem' mx='auto' maxW={'7xl'} justifyContent='space-between'>
        <Heading>
          Recent{' '}
          <Box as='span' fontStyle='italic' fontFamily={'Playfair Display'}>
            Blogs
          </Box>
        </Heading>
        <Center w='fit-content'>
          <HiOutlineArrowRight size='30' />
        </Center>
      </HStack>
      <Flex
        maxW='6xl'
        mx='auto'
        p={{ base: '0rem', md: '4rem' }}
        gap='3rem'
        flexWrap='wrap'
        alignItems={'center'}
        alignContent='center'
        justifyContent={'space-between'}
      >
        {blogData.length > 0 ? (
          blogData?.map((card, id) => (
            <BlogCard dir={id === 2 ? true : false} card={card} />
          ))
        ) : (
          <>
            <Center bg='black' h='fit-content' w='fit-content'>
              <Stack
                _hover={{ transform: 'translate(8px, -8px)' }}
                transition='all 0.3s'
                w='fit-content'
                outline='2px solid black'
                gap='1rem'
                bg='white'
                p='1rem'
              >
                <Skeleton
                  startColor='gray.300'
                  endColor='gray.100'
                  w={{ base: '60vw', md: '27rem' }}
                  h='18rem'
                />

                <SkeletonText
                  mt='4'
                  noOfLines={6}
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
            <Center bg='black' h='fit-content' w='fit-content'>
              <Stack
                _hover={{ transform: 'translate(8px, -8px)' }}
                transition='all 0.3s'
                w='fit-content'
                outline='2px solid black'
                gap='1rem'
                bg='white'
                p='1rem'
              >
                <Skeleton
                  startColor='gray.300'
                  endColor='gray.100'
                  w={{ base: '60vw', md: '27rem' }}
                  h='18rem'
                />

                <SkeletonText
                  mt='4'
                  noOfLines={6}
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
          </>
        )}
      </Flex>
    </Container>
  );
};

export default Blog;
