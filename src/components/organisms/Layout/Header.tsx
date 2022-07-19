import React, { memo, FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { HStack, useDisclosure } from '@chakra-ui/react';
import { BaseButtonResponsive } from '../../atoms/Button/BaseButtonResponsive';
import { MenuIconButton } from '../../atoms/Button/MenuIconButton';
import { MenuDrawer } from '../../molecules/Layout/MenuDrawer';

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const onClickHome = useCallback(() => {
    navigate('/');
    onClose();
  }, []);
  const onClickAbout = useCallback(() => {
    navigate('/about');
    onClose();
  }, []);
  const onClickWebWork = useCallback(() => {
    navigate('/webwork');
    onClose();
  }, []);
  const onClickDesktopWork = useCallback(() => {
    navigate('/desktopwork');
    onClose();
  }, []);
  return (
    <div>
      <HStack
        as="nav"
        bg="pink.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
        minHeight="15Vh"
      >
        <MenuIconButton onOpen={onOpen} />
        <BaseButtonResponsive onClick={onClickHome}>Home</BaseButtonResponsive>
        <BaseButtonResponsive onClick={onClickAbout}>
          About
        </BaseButtonResponsive>
        <BaseButtonResponsive onClick={onClickWebWork}>
          WebWork
        </BaseButtonResponsive>
        <BaseButtonResponsive onClick={onClickDesktopWork}>
          DesktopWork
        </BaseButtonResponsive>
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
