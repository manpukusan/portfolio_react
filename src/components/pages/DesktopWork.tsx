/* eslint-disable jsx-a11y/anchor-is-valid */
import { Heading, List, VStack } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';

import { DesktopTools } from '../organisms/Desktop/DesktopTools';

export const DesktopWork = () => {
  const [imageSort, setImageSort] = useState(false);
  const [roukiTotal, setRoukiTotal] = useState(false);

  const onClickImageSort = useCallback(() => {
    setImageSort(!imageSort);
  }, [imageSort]);

  const onClickRoukiTotal = useCallback(() => {
    setRoukiTotal(!roukiTotal);
  }, [roukiTotal]);

  return (
    <VStack mt={8} mx="auto">
      <List spacing={{ base: 8, md: 12 }}>
        <Heading fontSize={{ base: 'lg', md: 'xl', lg: '2xl', xl: '3xl' }}>
          Pythonで自動化ツール
        </Heading>
        <DesktopTools
          onClickImageSort={onClickImageSort}
          onClickRoukiTotal={onClickRoukiTotal}
          imageSort={imageSort}
          roukiTotal={roukiTotal}
        />
      </List>
    </VStack>
  );
};
