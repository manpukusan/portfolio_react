import React, { memo, FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { HStack, useDisclosure } from '@chakra-ui/react';
import { BaseButton } from '../../atoms/Button/BaseButton';
import { MenuIconButton } from '../../atoms/Button/MenuIconButton';
import { MenuDrawer } from '../../molecules/Layout/MenuDrawer';

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const onClickHome = useCallback(() => navigate('/'), []);
  const onClickAbout = useCallback(() => navigate('/about'), []);
  const onClickWebWork = useCallback(() => navigate('/webwork'), []);
  const onClickDesktopWork = useCallback(() => navigate('/desktopwork'), []);

  return (
    <div>
      <HStack
        as="nav"
        bg="pink.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <MenuIconButton onOpen={onOpen} />
        <BaseButton onClick={onClickHome}>Home</BaseButton>
        <BaseButton onClick={onClickAbout}>About</BaseButton>
        <BaseButton onClick={onClickWebWork}>WebWork</BaseButton>
        <BaseButton onClick={onClickDesktopWork}>DesktopWork</BaseButton>
      </HStack>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickAbout={onClickAbout}
        onClickWebWork={onClickWebWork}
        onClickDesktopWork={onClickDesktopWork}
      />
    </div>
  );
});
