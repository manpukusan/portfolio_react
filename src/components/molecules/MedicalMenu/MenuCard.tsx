import { Box, Center, Image, Stack, Text } from '@chakra-ui/react';
import React, { FC, memo } from 'react';

import { useImagePath } from '../../../hooks/useImagePath';

type Props = {
  title: string;
  effect: string;
  imageName: string;
};

export const MenuCard: FC<Props> = memo((props) => {
  const { title, effect, imageName } = props;
  const { imagePath } = useImagePath(imageName);

  return (
    <Center>
      <Box
        as="section"
        w={{ base: '400px', md: '500px' }}
        h={{ base: '500px', md: '500px' }}
        bg="white"
        p={4}
        borderRadius="lg"
        shadow="md"
      >
        <Stack>
          <Text
            as="h2"
            fontWeight="bold"
            color="gray.600"
            borderBottom="2px"
            borderColor="pink.500"
            textAlign="center"
          >
            {title}
          </Text>
          <Text as="p" fontSize={{ base: 'sm', md: 'md' }}>
            {effect}
          </Text>
          <Image src={imagePath} alt={title} />
        </Stack>
      </Box>
    </Center>
  );
});
