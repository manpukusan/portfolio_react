import { Heading, HStack, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { FC, memo, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { MenuCard } from '../../molecules/MedicalMenu/MenuCard';
import { anemia } from '../../molecules/MedicalMenu/Anemia ';
import { cold } from '../../molecules/MedicalMenu/Cold';
import { headache } from '../../molecules/MedicalMenu/Headache';
import { eyestrain } from '../../molecules/MedicalMenu/Eyestrain';
import { BaseButton } from '../../atoms/Button/BaseButton';

type Menus = {
  title: string;
  effect: string;
  imageName: string;
};

export const PocketMenu: FC = memo(() => {
  const params = useParams();
  const [menus, setMenus] = useState<Array<Menus>>([]);
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  switch (params.pocketId) {
    case 'anemia':
      useEffect(() => {
        setMenus(anemia);
        setTitle('貧血');
      }, []);
      break;
    case 'cold':
      useEffect(() => {
        setMenus(cold);
        setTitle('冷え性');
      }, []);
      break;
    case 'headache':
      useEffect(() => {
        setMenus(headache);
        setTitle('頭痛');
      }, []);
      break;
    case 'eyestrain':
      useEffect(() => {
        setMenus(eyestrain);
        setTitle('疲れ目');
      }, []);
      break;
    default:
  }

  const onClickBack = () => navigate('/webwork');
  return (
    <VStack>
      <HStack spacing={{ base: 8, md: 12, lg: 16, xl: 20 }}>
        <Heading
          as="h2"
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl', xl: '4xl' }}
          color="pink.500"
        >
          {`${title}レシピ`}
        </Heading>

        <BaseButton onClick={onClickBack}>
          <ArrowBackIcon mr={2} />
          症状一覧
        </BaseButton>
      </HStack>
      <Wrap
        fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
        spacing={{ base: 4, md: 10 }}
        justify="center"
      >
        {menus.map((menu) => (
          <WrapItem key={menu.imageName} mx="auto">
            <MenuCard
              title={menu.title}
              effect={menu.effect}
              imageName={menu.imageName}
            />
          </WrapItem>
        ))}
      </Wrap>
      <BaseButton onClick={onClickBack}>
        <ArrowBackIcon mr={2} />
        症状一覧
      </BaseButton>
    </VStack>
  );
});
