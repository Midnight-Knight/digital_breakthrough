'use client';
import { Flex, Main, Text } from '@prismane/core';

export default function Home() {
  return (
    <Main w={'100%'} mih={'110vh'} px={'10vw'} pb={'10vw'} pt={160} bg={(theme) => (theme.mode === 'dark' ? ['base', 900] : ['base', 100])}>
      <Flex w={'100%'} direction={'column'} gap={'32px'} justify={'start'} align={'start'}>
        <Text cl={() => ['primary', 700]} fs={'4xl'} ta={'center'} fw={'bold'}>
          Чат-бот для сбора данных от студентов
        </Text>
      </Flex>
    </Main>
  );
}
