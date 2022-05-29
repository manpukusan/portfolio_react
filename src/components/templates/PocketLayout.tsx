import React, { FC, memo, ReactNode } from 'react';

import { PocketHeader } from '../organisms/Pocket/PocketHeader';

type Props = {
  children: ReactNode;
};

export const PocketLayout: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <PocketHeader />
      {children}
    </>
  );
});
