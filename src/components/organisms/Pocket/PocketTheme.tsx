import { Center, Wrap, WrapItem } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { MedicalCard } from '../../molecules/MedicalCard/MedicalCard';
import { terms } from '../../molecules/MedicalCard/Terms';

export const PocketTheme: FC = memo(() => {
  return (
    <Center>
      <Wrap
        fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
        p={{ base: 4, md: 10 }}
      >
        {terms.map((term) => (
          <WrapItem key={term.id}>
            <MedicalCard
              id={term.id}
              term={term.term}
              description={term.description}
            />
          </WrapItem>
        ))}
      </Wrap>
    </Center>
  );
});
