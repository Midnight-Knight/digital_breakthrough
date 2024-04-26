'use client';
import { Button, Card, Center, Flex, Form, Hide, Link, Main, NumberField, Progress, Text, TextareaField, TextField } from '@prismane/core';
import MyAside from '@/component/myAside';
import Typewriter from 'typewriter-effect';
import { notFound, useSearchParams } from 'next/navigation';
import ChoiseWebinarStudent from '@/component/card/choiseWebinarStudent';

export default function Chat() {
  const searchParams = useSearchParams();
  const first_name = searchParams.get('first_name');
  const last_name = searchParams.get('last_name');
  if (!first_name || !last_name) {
    notFound();
  }

  return (
    <Main p={0} py={0} px={0} w={'100vw'} mih={'100vh'} pl={260} bg={(theme) => (theme.mode === 'dark' ? ['base', 900] : ['base', 100])}>
      <Flex w={'100%'}>
        <MyAside>
          <Flex w={'100%'} h={'100%'} direction={'column'} justify={'end'} align={'start'} gap={10}>
            <Text fs="xl" fw="bold" cl={() => ['base', 100]}>
              {last_name + ' ' + first_name}
            </Text>
            <Button size="base" w={'100%'} variant="tertiary" type="reset">
              Выйти
            </Button>
          </Flex>
        </MyAside>
        <Flex w={'100%'} p={'5rem'} direction={'column'} gap={'16px'} justify={'start'} align={'center'} h={'100%'}>
          <Center w={'100%'} py={'5rem'}>
            <Text cl={() => ['primary', 400]} fs={'4xl'} ta={'center'} w={'75%'} fw={'bold'}>
              <Typewriter
                options={{
                  delay: 75,
                }}
                onInit={(typewriter) => {
                  typewriter.typeString('Чат-бот для сбора данных от студентов').start();
                }}
              />
            </Text>
          </Center>
          <ChoiseWebinarStudent />
        </Flex>
      </Flex>
    </Main>
  );
}
