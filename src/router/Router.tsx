import { Route, Routes } from 'react-router-dom';
import { Stack } from '@chakra-ui/react';
import { Page404 } from '../components/pages/Page404';
import { Home } from '../components/pages/Home';
import { About } from '../components/pages/About';
import { WebWork } from '../components/pages/WebWork';
import { DesktopWork } from '../components/pages/DesktopWork';
import { HeaderLayout } from '../components/templates/HeaderLayout';

export const Router = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <HeaderLayout>
            <Stack minHeight="100vh">
              <Home />
            </Stack>
          </HeaderLayout>
        }
      />
      <Route
        path="about"
        element={
          <HeaderLayout>
            <Stack minHeight="100vh">
              <About />
            </Stack>
          </HeaderLayout>
        }
      />
      <Route
        path="webwork"
        element={
          <HeaderLayout>
            <Stack minHeight="100vh">
              <WebWork />
            </Stack>
          </HeaderLayout>
        }
      />
      <Route
        path="desktopwork"
        element={
          <HeaderLayout>
            <Stack minHeight="100vh">
              <DesktopWork />
            </Stack>
          </HeaderLayout>
        }
      />
      <Route
        path="*"
        element={
          <HeaderLayout>
            <Stack minHeight="100vh">
              <Page404 />
            </Stack>
          </HeaderLayout>
        }
      />
    </Routes>
  );
};
