'use client';
import { Flex, Text } from '@prismane/core';
import ButtonsLinks from '@/component/links/buttonsLinks';
import { usePathname } from 'next/navigation';
import { substring } from '@prismane/core/validators';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function MyAside({ children }: Props) {
  const pathname = usePathname();
  return (
    <Flex w={260} p={'1rem'} pt={'1.5rem'} bg={() => ['primary', 900]} direction={'column'} justify={'start'} gap={'1.5rem'}>
      <Text cl={(theme) => ['base', theme.mode === 'dark' ? 100 : 900]} fs={'2xl'} fw={'bold'}>
        RealityFirst
      </Text>
      <Flex direction="column" w={'100%'} gap={10}>
        <ButtonsLinks primary={pathname === '/'} text={'Главная'} link={'/'} />
        <ButtonsLinks primary={pathname.includes('/authorization')} text={'Чат-бот'} link={'/authorization'} />
        <ButtonsLinks primary={pathname === '/admin'} text={'Анализатор'} link={'/admin'} />
      </Flex>
      <Flex direction="column" w={'100%'} gap={10}>
        {children}
      </Flex>
    </Flex>
  );
}
