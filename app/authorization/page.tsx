'use client';
import { useRouter } from 'next/navigation';

export default function AuthorizationPage() {
  const router = useRouter();
  return router.push('/authorization/chat');
}
