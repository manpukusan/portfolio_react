import { Button } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const MenuButton: FC<Props> = (props) => {
  const { children, onClick } = props;
  return (
    <div>
      <Button
        onClick={onClick}
        bg="pink.500"
        color="white"
        _hover={{ bg: 'pink.400' }}
        display={{ base: 'none', sm: 'block' }}
      >
        {children}
      </Button>
    </div>
  );
};
