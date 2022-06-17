/* eslint-disable jsx-a11y/anchor-is-valid */
import { DownloadIcon, StarIcon } from '@chakra-ui/icons';
import { HStack, List, ListIcon, ListItem } from '@chakra-ui/react';
import React, { FC, memo } from 'react';

import { BaseButtonGreen } from '../../atoms/Button/BaseButtonGreen';

type Props = {
  onClickImageSort: () => void;
  onClickRoukiTotal: () => void;
  imageSort: boolean;
  roukiTotal: boolean;
};

export const DesktopTools: FC<Props> = memo((props) => {
  const { onClickImageSort, onClickRoukiTotal, imageSort, roukiTotal } = props;

  const onClickDownload = (fileName: string) => {
    console.log('onClickDownload');
    const link = document.createElement('a');
    link.href = `/tools/${fileName}`;
    link.innerText = 'aダウンロード';
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <>
      <List>
        <ListItem
          onClick={onClickImageSort}
          _hover={{ cursor: 'pointer' }}
          borderBottom="1px solid #0078D7"
          fontSize={{ base: 'sm', md: 'md', lg: 'lg', xl: 'xl' }}
        >
          <ListIcon as={StarIcon} color="green.500" />
          画像ソートツール
          <br />
          （納品画像ファイル処理）
        </ListItem>
      </List>
      {imageSort && (
        <List
          w={{ base: '300px', md: '500px', lg: '600px' }}
          fontSize={{ base: 'sm', md: 'md', lg: 'lg', xl: 'xl' }}
        >
          <ListItem>
            PDF画像データを、所定のルールでリネーム（連番3桁、社員番号、名前カナ）し、その後、受診医療機関名のフォルダを作成し、リネーム後の画像データを振り分けるツール
          </ListItem>
          <ListItem>
            <br />
            <HStack>
              <ListIcon as={DownloadIcon} color="green.500" />
              <BaseButtonGreen onClick={() => onClickDownload('ImageSort.zip')}>
                ImageSort
              </BaseButtonGreen>
            </HStack>
          </ListItem>
        </List>
      )}
      <List>
        <ListItem
          onClick={onClickRoukiTotal}
          _hover={{ cursor: 'pointer' }}
          borderBottom="1px solid #0078D7"
          fontSize={{ base: 'sm', md: 'md', lg: 'lg', xl: 'xl' }}
        >
          <ListIcon as={StarIcon} color="green.500" />
          労基署集計ツール
          <br />
          （労働基準局へ提出する健診結果集計ツール）
        </ListItem>
      </List>
      {roukiTotal && (
        <List
          w={{ base: '300px', md: '500px', lg: '600px' }}
          fontSize={{ base: 'sm', md: 'md', lg: 'lg', xl: 'xl' }}
        >
          <ListItem>
            労働基準監督署提出用の健診結果報告書に載せるデータを作成するツール。
            入力済みの健診データから基準値を元に「所見なし」、「所見あり」、「医師の指示」に振り分け、その集計をする
          </ListItem>
          <ListItem>
            <br />
            <HStack>
              <ListIcon as={DownloadIcon} color="green.500" />
              <BaseButtonGreen
                onClick={() => onClickDownload('RoukiTotal.zip')}
              >
                RoukiTotal
              </BaseButtonGreen>
            </HStack>
          </ListItem>
        </List>
      )}
    </>
  );
});
