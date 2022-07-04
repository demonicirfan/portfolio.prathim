import {
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useMediaQuery,
  VStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';
import { useState } from 'react';
import CustomButton from '../../HOC/Button';

interface IProps {
  dir: Boolean;
  card: {
    title: string;
    coverImage: string;
    brief: string;
    link: string;
  };
}

const BlogCard = ({ card, dir }: IProps) => {
  const [hover, setHover] = useState(false);
  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');
  return (
    <Center mx='auto' bg='black' maxW={'fit-content'} h={'fit-content'}>
      <Stack
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        transition='all 0.3s'
        transform={hover ? 'translate(8px, -8px)' : ''}
        outline='2px solid black'
        w={dir && isLargerThan1200 ? '100%' : { base: '2-rem', md: '30rem' }}
        flexDirection={dir && isLargerThan1200 ? 'row' : 'column'}
        gap='0'
        bg='pratim.yellow'
      >
        <Image
          w={'100%'}
          h='18rem'
          objectFit={'cover'}
          src={card.coverImage}
          alt='cover'
        />
        <VStack
          marginTop={'0'}
          p='2rem'
          h={dir ? '17rem' : '20rem'}
          spacing='1.5rem'
          alignItems={'start'}
          bg='pratim.yellow'
        >
          <Heading fontSize={{ base: 'xl', md: '2xl' }} noOfLines={2}>
            {card.title}
          </Heading>
          <Text noOfLines={4}>{card.brief}</Text>
          <Button variant='unstyled'>
            <CustomButton variant='light'>Read More</CustomButton>
          </Button>
        </VStack>
      </Stack>
    </Center>
  );
};

export default BlogCard;
