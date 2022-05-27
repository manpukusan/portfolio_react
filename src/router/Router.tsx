import { Route, Routes } from 'react-router-dom';
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
            <Home />
          </HeaderLayout>
        }
      />
      <Route
        path="about"
        element={
          <HeaderLayout>
            <About />
          </HeaderLayout>
        }
      />
      <Route
        path="webwork"
        element={
          <HeaderLayout>
            <WebWork />
          </HeaderLayout>
        }
      />
      <Route
        path="desktopwork"
        element={
          <HeaderLayout>
            <DesktopWork />
          </HeaderLayout>
        }
      />
      <Route
        path="*"
        element={
          <HeaderLayout>
            <Page404 />
          </HeaderLayout>
        }
      />
    </Routes>
  );
};
