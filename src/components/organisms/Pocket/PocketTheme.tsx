import { Heading, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { MedicalCard } from '../../molecules/MedicalCard/MedicalCard';
import { terms } from '../../molecules/MedicalCard/Terms';

export const PocketTheme: FC = memo(() => {
  return (
    <VStack>
      <Heading
        as="h2"
        fontSize={{ base: 'xl', md: '2xl', lg: '3xl', xl: '4xl' }}
        color="pink.500"
      >
        症状一覧
      </Heading>
      <Text
        fontSize={{ base: 'md', md: 'lg', lg: 'xl', xl: '2xl' }}
        color="pink.400"
        fontWeight="bold"
      >
        クリックすると症状別レシピを見られます
      </Text>
      <Wrap
        fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
        spacing={{ base: 4, md: 10 }}
        justify="center"
      >
        {terms.map((term) => (
          <WrapItem key={term.id} mx="auto">
            <MedicalCard
              id={term.id}
              term={term.term}
              description={term.description}
            />
          </WrapItem>
        ))}
      </Wrap>
    </VStack>
  );
});
