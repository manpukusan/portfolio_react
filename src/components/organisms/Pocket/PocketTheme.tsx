import { Wrap, WrapItem } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { MedicalCard } from '../../molecules/MedicalCard/MedicalCard';
import { terms } from '../../molecules/MedicalCard/Terms';

export const PocketTheme: FC = memo(() => {
  return (
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
  );
});
