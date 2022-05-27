import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  VStack,
} from '@chakra-ui/react';
import React, { FC } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickHome: () => void;
  onClickAbout: () => void;
  onClickWebWork: () => void;
  onClickDesktopWork: () => void;
};

export const MenuDrawer: FC<Props> = (props) => {
  const {
    isOpen,
    onClose,
    onClickHome,
    onClickAbout,
    onClickWebWork,
    onClickDesktopWork,
  } = props;

  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody as="nav" p={0} bg="gray.100">
            <Button w="100%" onClick={onClickHome}>
              Home
            </Button>
            <Button w="100%" onClick={onClickAbout}>
              About
            </Button>
            <Button w="100%" onClick={onClickWebWork}>
              WebWork
            </Button>
            <Button w="100%" onClick={onClickDesktopWork}>
              DesktopWork
            </Button>
            <VStack>
              <Button w="100%" onClick={onClose}>
                Close
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
