import { Box, Stack, Text } from '@chakra-ui/react';
import React, { FC, memo } from 'react';

type Props = {
  title: string;
  effect: string;
  imagePath: string;
};

export const MenuCard: FC<Props> = memo((props) => {
  const { title, effect, imagePath } = props;
  return (
    <Box
      as="section"
      w="400px"
      h="400px"
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
      </Stack>
    </Box>
  );
});
