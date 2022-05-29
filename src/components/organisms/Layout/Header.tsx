import React, { memo, FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Flex, useDisclosure } from '@chakra-ui/react';
import { MenuButton } from '../../atoms/MenuButton';
import { MenuIconButton } from '../../atoms/MenuIconButton';
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
      <Flex
        as="nav"
        bg="pink.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <MenuButton onClick={onClickHome}>Home</MenuButton>
        <MenuButton onClick={onClickAbout}>About</MenuButton>
        <MenuButton onClick={onClickWebWork}>WebWork</MenuButton>
        <MenuButton onClick={onClickDesktopWork}>DesktopWork</MenuButton>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
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
