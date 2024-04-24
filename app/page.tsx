'use client';
import { Card, Center, Flex, Main, Text } from '@prismane/core';

export default function Home() {
  return (
    <Main w={'100%'} mih={'110vh'} px={'10vw'} pb={'10vw'} pt={100} bg={(theme) => (theme.mode === 'dark' ? ['base', 900] : ['base', 100])}>
      <Flex w={'100%'} direction={'column'} gap={'16px'} justify={'start'} align={'center'}>
        <Center w={'100%'} h={'80vh'}>
          <Text cl={() => ['primary', 700]} fs={'5xl'} ta={'center'} w={'50%'} fw={'bold'}>
            Интеллектуальный анализатор обратной связи студентов
          </Text>
        </Center>
        <Flex w={'100%'} direction={'column'} gap={32}>
          <Text cl={() => ['primary', 700]} fs={'3xl'} ta={'left'} w={'50%'} fw={'bold'}>
            Страницы
          </Text>
          <Flex w={'100%'} direction={'row'} gap={64}>
            <Card w={'100%'} h={'10vmax'}>
              <Text>Тест</Text>
            </Card>
            <Card w={'100%'} h={'10vmax'}>
              <Text>Тест</Text>
            </Card>
          </Flex>
        </Flex>
      </Flex>
    </Main>
  );
}
