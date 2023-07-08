'use client';

import { AppProvider } from '@/context';
import React from 'react';

const ProjectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <AppProvider>{children}</AppProvider>;
};

export default ProjectProvider;
