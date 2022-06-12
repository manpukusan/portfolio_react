import { DownloadIcon, StarIcon } from '@chakra-ui/icons';
import { List, ListIcon, ListItem, VStack } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
// import ImageSort from '../../tools/ImageSort.zip';

export const DesktopWork = () => {
  const [imageSort, setImageSort] = useState(false);

  const onClickImageSort = useCallback(() => {
    setImageSort(!imageSort);
  }, [imageSort]);
  return (
    <VStack mt={8}>
      <List spacing={3}>
        <ListItem fontSize={{ base: 'md', md: 'xl', lg: '2xl', xl: '3xl' }}>
          自動化ツール
        </ListItem>
        <ListItem onClick={onClickImageSort} _hover={{ cursor: 'pointer' }}>
          <ListIcon as={StarIcon} color="green.500" />
          画像ソートツール（納品画像ファイル処理）
        </ListItem>
        {imageSort && (
          <ListItem>
            <ListIcon as={DownloadIcon} color="green.500" />
            <a href="./ImageSort.zip" download>
              ダウンロード
            </a>
          </ListItem>
        )}
      </List>
    </VStack>
  );
};
