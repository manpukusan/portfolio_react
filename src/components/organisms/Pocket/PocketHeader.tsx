import { Heading, Text, VStack } from '@chakra-ui/react';
import { FC, memo } from 'react';

export const PocketHeader: FC = memo(() => {
  return (
    <VStack fontSize={{ base: 'md', md: 'xl', lg: '2xl', xl: '3xl' }}>
      <Heading as="h1" textAlign="center" mt={8}>
        ポケット食堂
      </Heading>
      <Text
        as="p"
        textAlign="center"
        fontSize={{ base: 'sm', md: 'md', lg: 'xl', xl: '2xl' }}
      >
        ポケット食堂では、みなさんのお悩みにぴったり合ったメニューをご提案いたします
      </Text>
    </VStack>
  );
});
