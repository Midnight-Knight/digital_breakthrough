'use client';
import { Button, Flex, Link, Text, Header } from '@prismane/core';
import ButtonsLinks from '@/component/links/buttonsLinks';
import { usePathname } from 'next/navigation';

export default function MyHeader() {
  const pathname = usePathname();
  return (
    <Header
      py={20}
      px={'10vw'}
      pos={'fixed'}
      t={0}
      l={0}
      w={'100%'}
      h={84}
      bft={'blur(75px)'}
      bdbw={1}
      bdbs={'solid'}
      bdbc={(theme) => ['base', 500]}>
      <Flex justify={'between'} align={'center'} w={'100%'}>
        <Flex justify={'center'} align={'center'} gap={10}>
          <Text cl={(theme) => ['primary', 700]} fs={'2xl'} fw={'bold'}>
            RealityFirst
          </Text>
        </Flex>
        <Flex justify={'center'} align={'center'} gap={10}>
          <ButtonsLinks primary={pathname === '/'} text={'Главная'} link={'/'} />
          <ButtonsLinks primary={pathname === '/chat'} text={'Чат-бот'} link={'/chat'} />
          <ButtonsLinks primary={pathname === '/admin'} text={'Анализатор'} link={'/admin'} />
        </Flex>
      </Flex>
    </Header>
  );
}
