import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import pockeduck from '../../images/PockeDuck.png';

export const Home = () => {
  const navigate = useNavigate();
  const onClickDuck = useCallback(() => navigate('/about'), []);
  return (
    <VStack
      spacing={{ base: 4, md: 8, lg: 12 }}
      mt={{ base: 4, md: 8, lg: 12 }}
      fontSize={{ base: 'md', md: 'xl', lg: '2xl', xl: '3xl' }}
    >
      <Heading as="h1" mb={{ base: 4, md: 8, lg: 12 }}>
        MyPortFolio!
      </Heading>
      <HStack>
        <Text>Click Me!</Text>
        <Image
          boxSize={{ base: '130px', md: '150px', lg: '170px', xl: '190px' }}
          src={pockeduck}
          alt="プロフィール画像"
          cursor="pointer"
          onClick={onClickDuck}
        />
      </HStack>
    </VStack>
  );
};
