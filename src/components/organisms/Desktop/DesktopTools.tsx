/* eslint-disable jsx-a11y/anchor-is-valid */
import { AddIcon, DownloadIcon, MinusIcon } from '@chakra-ui/icons';
import { HStack, List, ListIcon, ListItem, Collapse } from '@chakra-ui/react';
import React, { FC, memo } from 'react';

import { BaseButtonGreen } from '../../atoms/Button/BaseButtonGreen';

type Props = {
  onClickImageSort: () => void;
  onClickRoukiTotal: () => void;
  onClickAnalyze: () => void;
  imageSort: boolean;
  roukiTotal: boolean;
  analyze: boolean;
};

export const DesktopTools: FC<Props> = memo((props) => {
  const {
    onClickImageSort,
    onClickRoukiTotal,
    onClickAnalyze,
    imageSort,
    roukiTotal,
    analyze,
  } = props;

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
          <ListIcon as={imageSort ? MinusIcon : AddIcon} color="green.500" />
          画像ソートツール
          <br />
          （納品画像ファイル処理）
        </ListItem>
      </List>
      <Collapse in={imageSort}>
        <List
          w={{ base: '300px', md: '350px', lg: '400px' }}
          fontSize={{ base: 'sm', md: 'md', lg: 'lg', xl: 'xl' }}
        >
          <ListItem>
            クライアントからの要望で、提出画像データを仕様通りリネーム、配置する必要があり、ずっと手動で行っていたが、作業効率化のため作成した自動化ツール。
            <br />
            提出画像ファイル名（PDF）を、所定のルールでリネーム（連番3桁、社員番号、名前カナ）
            <br />
            その後、受診医療機関名のフォルダを作成し、リネーム後の画像データを振り分けるツール。
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
      </Collapse>
      <List>
        <ListItem
          onClick={onClickRoukiTotal}
          _hover={{ cursor: 'pointer' }}
          borderBottom="1px solid #0078D7"
          fontSize={{ base: 'sm', md: 'md', lg: 'lg', xl: 'xl' }}
        >
          <ListIcon as={roukiTotal ? MinusIcon : AddIcon} color="green.500" />
          労基署集計ツール
          <br />
          （労働基準局へ提出する健診結果集計ツール）
        </ListItem>
      </List>
      <Collapse in={roukiTotal}>
        <List
          w={{ base: '300px', md: '350px', lg: '400px' }}
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
      </Collapse>
      <List>
        <ListItem
          onClick={onClickAnalyze}
          _hover={{ cursor: 'pointer' }}
          borderBottom="1px solid #0078D7"
          fontSize={{ base: 'sm', md: 'md', lg: 'lg', xl: 'xl' }}
        >
          <ListIcon as={analyze ? MinusIcon : AddIcon} color="green.500" />
          健診結果分析ツール
        </ListItem>
      </List>
      <Collapse in={analyze} animateOpacity>
        <List
          w={{ base: '300px', md: '350px', lg: '400px' }}
          fontSize={{ base: 'sm', md: 'md', lg: 'lg', xl: 'xl' }}
        >
          <ListItem>健診結果からデータ内の所見率をかし</ListItem>
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
      </Collapse>
    </>
  );
});
