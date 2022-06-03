import { Center, Wrap, WrapItem } from '@chakra-ui/react';
import { FC, memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MenuCard } from '../../molecules/MedicalMenu/MenuCard';
import { anemia } from '../../molecules/MedicalMenu/Anemia ';
import { cold } from '../../molecules/MedicalMenu/Cold';
import { headache } from '../../molecules/MedicalMenu/Headache';
import { eyestrain } from '../../molecules/MedicalMenu/Eyestrain';

type Menus = {
  id: number;
  title: string;
  effect: string;
  imagePath: string;
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
    <Center>
      <Wrap
        fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
        p={{ base: 4, md: 10 }}
      >
        {menus.map((menu) => (
          <WrapItem key={menu.id} mx="auto">
            <MenuCard
              title={menu.title}
              effect={menu.effect}
              imagePath={menu.imagePath}
            />
          </WrapItem>
        ))}
      </Wrap>
    </Center>
  );
});
