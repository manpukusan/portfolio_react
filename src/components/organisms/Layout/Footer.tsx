import React, { FC, memo, useCallback } from 'react';

import { HStack, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { MenuIconButton } from '../../atoms/Button/MenuIconButton';
import { MenuDrawer } from '../../molecules/Layout/MenuDrawer';
import { BaseButtonFooter } from '../../atoms/Button/BaseButtonFooter';

export const Footer: FC = memo(() => {
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
    <>
      <VStack
        as="nav"
        mt={{ base: 4, md: 8, xl: 12 }}
        bg="gray.400"
        color="gray.50"
        align="center"
        padding={{ base: 3, md: 5 }}
        minHeight="15Vh"
      >
        <HStack>
          <MenuIconButton onOpen={onOpen} />
          <BaseButtonFooter onClick={onClickHome}>Home</BaseButtonFooter>
          <BaseButtonFooter onClick={onClickAbout}>About</BaseButtonFooter>
          <BaseButtonFooter onClick={onClickWebWork}>WebWork</BaseButtonFooter>
          <BaseButtonFooter onClick={onClickDesktopWork}>
            DesktopWork
          </BaseButtonFooter>
        </HStack>
        <Text as="h1" bg="gray.400" color="gray.50">
          PortFolio2022
        </Text>
      </VStack>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickAbout={onClickAbout}
        onClickWebWork={onClickWebWork}
        onClickDesktopWork={onClickDesktopWork}
      />
    </>
  );
});
