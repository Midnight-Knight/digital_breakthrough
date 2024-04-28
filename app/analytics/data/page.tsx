'use client';
import Data from '@/page/data';
import { Suspense } from 'react';

export default function DataPage() {
  return (
    <Suspense>
      <Data />
    </Suspense>
  );
}
