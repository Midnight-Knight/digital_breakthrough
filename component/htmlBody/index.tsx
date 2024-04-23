'use client';
import { Button, Flex, Link, PrismaneProvider, Text } from '@prismane/core';
import { ReactNode, useEffect } from 'react';
import { createTheme } from '@prismane/core/themes';
import base from '@/consts/base';
import MyHeader from '../myHeader';

export default function HtmlBody({ children }: { children: ReactNode }) {
  const theme = createTheme(base);

  useEffect(() => {
    theme.mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }, []);

  return (
    <PrismaneProvider theme={theme}>
      <MyHeader />
      {children}
    </PrismaneProvider>
  );
}
