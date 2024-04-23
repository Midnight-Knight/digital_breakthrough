'use client';
import { Box, Card, Center, Flex, Header, Main, Text } from '@prismane/core';

export default function Home() {
  return (
    <Main w={'100%'} mih={'110vh'} px={'10vw'} pb={'10vw'} pt={100} bg={(theme) => (theme.mode === 'dark' ? ['base', 900] : ['base', 100])}>
      <Flex w={'100%'} direction={'column'} gap={'16px'} justify={'start'} align={'center'}>
        <Center w={'100%'} h={'80vh'}>
          <Text cl={(theme) => ['primary', 700]} fs={'5xl'} ta={'center'} w={'50%'} fw={'bold'}>
            Чат
          </Text>
        </Center>
      </Flex>
    </Main>
  );
}
