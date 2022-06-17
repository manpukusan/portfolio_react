import { Button } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const BaseButtonGreen: FC<Props> = (props) => {
  const { children, onClick } = props;
  return (
    <div>
      <Button
        onClick={onClick}
        bg="green.500"
        color="white"
        _hover={{ bg: 'green.400' }}
      >
        {children}
      </Button>
    </div>
  );
};
