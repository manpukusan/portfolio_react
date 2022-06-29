import {
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  VStack,
} from '@chakra-ui/react';
import { memo } from 'react';
import pockeduck from '../../../images/PockeDuck.png';

export const ProfileHeader = memo(() => {
  return (
    <HStack mx="auto" my={8} pb={8} borderBottom="1px">
      <Image
        boxSize={{ base: '130px', md: '150px' }}
        src={pockeduck}
        alt="プロフィール画像"
        mr={{ base: 4, md: 8 }}
      />
      <VStack spacing={4}>
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            value="齊藤"
            isReadOnly
            fontSize={{ base: 'md', md: 'xl', lg: '2xl', xl: '3xl' }}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="kana">Kana</FormLabel>
          <Input
            id="kana"
            value="Saito"
            isReadOnly
            fontSize={{ base: 'sm', md: 'md', lg: 'lg', xl: 'xl' }}
          />
        </FormControl>
      </VStack>
    </HStack>
  );
});
