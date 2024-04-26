'use client';
import { Button, Card, Center, Flex, Form, Hide, Link, Main, NumberField, Progress, Text, TextareaField, TextField } from '@prismane/core';
import MyAside from '@/component/myAside';
import Typewriter from 'typewriter-effect';
import { notFound, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { AT } from '@/consts/token';

// curl "https://api.vk.com/method/auth.exchangeSilentAuthToken" -d "v=5.131&token=silent_token&access_token=service_token&uuid=uuid"

export default function Chat() {
  const searchParams = useSearchParams();
  const [user, setUser] = useState<{ first_name: string; last_name: string; id: number } | null>(null);
  const search = searchParams.get('payload');

  async function Curl(token: string, access_token: string, uuid: string) {
    const response = await fetch('https://api.vk.com/method/auth.exchangeSilentAuthToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        v: '5.131',
        token: token,
        access_token: AT,
        uuid: uuid,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const jsonData = await response.json();
    console.log(jsonData);
    setUser({ first_name: jsonData.user.first_name, last_name: jsonData.user.last_name, id: jsonData.user.id });
  }

  if (search) {
    const json = JSON.parse(search);
    console.log(json);
    if (json.user) {
      setUser({ first_name: json.user.first_name, last_name: json.user.last_name, id: json.user.id });
    } else {
      console.log('curl');
      Curl(json.token, json.type, json.uuid);
    }
  } else {
    notFound();
  }

  useEffect(() => {
    console.log(user);
  }, [user]);

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
