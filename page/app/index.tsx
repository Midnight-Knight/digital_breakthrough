'use client';
import { Button, Card, Center, Flex, Link, Main, Text } from '@prismane/core';
import MyAside from '@/component/myAside';
import Typewriter from 'typewriter-effect';

export default function App() {
  return (
    <Main p={0} py={0} px={0} w={'100vw'} mih={'100vh'} pl={260} bg={(theme) => (theme.mode === 'dark' ? ['base', 900] : ['base', 100])}>
      <Flex w={'100%'}>
        <MyAside>
          <></>
        </MyAside>
        <Flex w={'100%'} p={'5rem'} direction={'column'} gap={'16px'} justify={'start'} align={'center'} h={'100%'}>
          <Center w={'100%'} h={'65%'}>
            <Text cl={() => ['primary', 400]} fs={'4xl'} ta={'center'} w={'75%'} fw={'bold'}>
              <Typewriter
                options={{
                  delay: 75,
                  loop: false,
                }}
                onInit={(typewriter) => {
                  typewriter.typeString('Интеллектуальный анализатор обратной связи студентов').start();
                }}
              />
            </Text>
          </Center>
          <Flex w={'100%'} direction={'column'} gap={'2.5rem'} h={'35%'}>
            <Text cl={() => ['primary', 400]} fs={'2xl'} ta={'left'} w={'50%'} fw={'bold'}>
              Страницы
            </Text>
            <Flex w={'100%'} direction={'row'} gap={'5rem'} h={'100%'}>
              <Link w={'100%'} h={'100%'} href={'/authorization'} underline="none">
                <Button size="lg" br={'0.5rem'} w={'100%'} h={'100%'} variant="tertiary">
                  Чат-бот для сбора данных от студентов
                </Button>
              </Link>
              <Link w={'100%'} h={'100%'} href={'/analytics'} underline="none">
                <Button size="lg" br={'0.5rem'} w={'100%'} h={'100%'} variant="tertiary">
                  Анализатор обратной связи студентов
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Main>
  );
}
