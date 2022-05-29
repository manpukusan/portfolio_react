import React, { FC, memo, ReactNode } from 'react';

import { Header } from '../organisms/Layout/Header';
import { Footer } from '../organisms/Layout/Footer';

type Props = {
  children: ReactNode;
};

export const HeaderLayout: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
});
