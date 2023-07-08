'use client';

import { SnackbarProvider } from 'notistack';
import React from 'react';

const SnackProvider = ({ children }: { children: React.ReactNode }) => {
  return <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>;
};

export default SnackProvider;
