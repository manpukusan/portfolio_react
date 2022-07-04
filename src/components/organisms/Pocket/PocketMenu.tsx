import { Wrap, WrapItem } from '@chakra-ui/react';
import { FC, memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MenuCard } from '../../molecules/MedicalMenu/MenuCard';
import { anemia } from '../../molecules/MedicalMenu/Anemia ';
import { cold } from '../../molecules/MedicalMenu/Cold';
import { headache } from '../../molecules/MedicalMenu/Headache';
import { eyestrain } from '../../molecules/MedicalMenu/Eyestrain';

type Menus = {
  title: string;
  effect: string;
  imageName: string;
};

export const PocketMenu: FC = memo(() => {
  const params = useParams();
  const [menus, setMenus] = useState<Array<Menus>>([]);

  switch (params.pocketId) {
    case 'anemia':
      useEffect(() => setMenus(anemia), []);
      break;
    case 'cold':
      useEffect(() => setMenus(cold), []);
      break;
    case 'headache':
      useEffect(() => setMenus(headache), []);
      break;
    case 'eyestrain':
      useEffect(() => setMenus(eyestrain), []);
      break;
    default:
  }

  return (
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
  );
});
