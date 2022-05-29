import { Route, Routes } from 'react-router-dom';
import { Stack } from '@chakra-ui/react';
import { PocketLayout } from '../components/templates/PocketLayout';
import { PocketMenu } from '../components/organisms/Pocket/PocketMenu';

export const PocketRoutes = () => {
  return (
    <Routes>
      <Route
        path="webwork/pocket/:useParams"
        element={
          <PocketLayout>
            <Stack minHeight="100vh">
              <PocketMenu />
            </Stack>
          </PocketLayout>
        }
      />
    </Routes>
  );
};
