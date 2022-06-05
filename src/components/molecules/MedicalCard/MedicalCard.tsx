import { Box, Stack, Text } from '@chakra-ui/react';
import React, { FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  id: string;
  term: string;
  description: string;
};

export const MedicalCard: FC<Props> = memo((props) => {
  const { id, term, description } = props;
  const navigate = useNavigate();

  const onClickCard = useCallback(() => {
    navigate(`/webwork/${id}`);
  }, []);

  return (
    <Box
      as="section"
      w={{ base: '250px', md: '300px' }}
      h={{ base: '250px', md: '300px' }}
      bg="white"
      p={4}
      borderRadius="lg"
      shadow="md"
      _hover={{ cursor: 'pointer', opacity: 0.7 }}
      onClick={onClickCard}
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
          {term}
        </Text>
        <Text as="p" fontSize={{ base: 'sm', md: 'md' }}>
          {description}
        </Text>
      </Stack>
    </Box>
  );
});
