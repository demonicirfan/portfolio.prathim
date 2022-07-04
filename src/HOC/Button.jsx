import { Box, Center, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';

const CustomButton = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <Box
      outline={'2px solid black'}
      background={props.variant === 'dark' ? 'white' : 'black'}
      w='fit-content'
      h='fit-content'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Box
        transform={hover && 'translate(6px, -6px)'}
        transition='all 0.3s'
        display='flex'
        alignItems={'center'}
        justifyContent='space-between'
        gap='1rem'
        bg={props.variant === 'dark' ? 'black' : 'white'}
        outline={
          props.variant === 'dark' ? '2px solid black' : '2px solid black'
        }
        p='0.8rem 2rem'
        color={props.variant === 'dark' ? 'white' : 'black'}
        fontSize={{ base: 'sm', md: 'md' }}
      >
        <Flex
          alignItems={'flex-end'}
          justifyContent='end'
          w='1.5rem'
          transform={'rotate(-45deg)'}
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
        {props.children}
      </Box>
    </Box>
  );
};

export default CustomButton;
