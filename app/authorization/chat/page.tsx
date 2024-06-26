'use client';
import Chat from '@/page/chat';
import { Suspense } from 'react';

export default function ChatPage() {
  return (
    <Suspense>
      <Chat />
    </Suspense>
  );
}
