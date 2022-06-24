/* eslint-disable jsx-a11y/anchor-is-valid */
import { Heading, List, VStack } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';

import { DesktopTools } from '../organisms/Desktop/DesktopTools';

export const DesktopWork = () => {
  const [imageSort, setImageSort] = useState(false);
  const [roukiTotal, setRoukiTotal] = useState(false);
  const [analyze, setAnalyze] = useState(false);

  const onClickImageSort = useCallback(() => {
    setImageSort(!imageSort);
  }, [imageSort]);

  const onClickRoukiTotal = useCallback(() => {
    setRoukiTotal(!roukiTotal);
  }, [roukiTotal]);

  const onClickAnalyze = useCallback(() => {
    setAnalyze(!analyze);
  }, [analyze]);

  return (
    <VStack mt={8} mx="auto">
      <List spacing={{ base: 8, md: 12, lg: 16, xl: 20 }}>
        <Heading fontSize={{ base: 'lg', md: 'xl', lg: '2xl', xl: '3xl' }}>
          Pythonで自動化ツール
        </Heading>
        <DesktopTools
          onClickImageSort={onClickImageSort}
          onClickRoukiTotal={onClickRoukiTotal}
          onClickAnalyze={onClickAnalyze}
          imageSort={imageSort}
          roukiTotal={roukiTotal}
          analyze={analyze}
        />
      </List>
    </VStack>
  );
};
