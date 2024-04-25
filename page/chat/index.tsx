'use client';
import { Button, Card, Center, Flex, Form, Hide, Link, Main, NumberField, Progress, Text, TextareaField, TextField } from '@prismane/core';
import MyAside from '@/component/myAside';
import Typewriter from 'typewriter-effect';

export default function Chat() {
  return (
    <Main p={0} py={0} px={0} w={'100vw'} h={'100vh'} bg={(theme) => (theme.mode === 'dark' ? ['base', 900] : ['base', 100])}>
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
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Чат-бот для сбора данных от студентов')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('Начните диалог, нажав на кнопку ниже')
                    .pauseFor(10000)
                    .start();
                }}
              />
            </Text>
          </Center>
        </Flex>
      </Flex>
    </Main>
  );
}
