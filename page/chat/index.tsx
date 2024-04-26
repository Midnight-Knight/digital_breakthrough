'use client';
import { Button, Card, Center, Flex, Form, Hide, Link, Main, NumberField, Progress, Text, TextareaField, TextField } from '@prismane/core';
import MyAside from '@/component/myAside';
import Typewriter from 'typewriter-effect';
import { notFound, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { AT } from '@/consts/token';

export default function Chat() {
  const searchParams = useSearchParams();
  const [user, setUser] = useState<{ first_name: string; last_name: string; id: number } | null>(null);
  const search = searchParams.get('payload');

  async function Curl(token: string, id: string, uuid: string) {
    const response = await fetch('https://api.vk.com/method/auth.getProfileInfoBySilentToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        v: '5.108',
        token: [token],
        access_token: AT,
        uuid: [uuid],
        event: [''],
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const jsonData = await response.json();
    console.log(jsonData);
    const response2 = await fetch(
      `https://api.vk.com/method/users.get?user_ids=${jsonData.response.user_id}&fields=bdate&access_token=${jsonData.response.access_token}&v=5.199`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    if (!response2.ok) {
      throw new Error('Network response2 was not ok');
    }
    const jsonData2 = await response2.json();
    console.log(jsonData2);
    setUser({ first_name: jsonData2.response[0].first_name, last_name: jsonData2.response[0].last_name, id: jsonData2.response[0].id });
  }

  if (search) {
    const json = JSON.parse(search);
    console.log(json);
    if (json.user) {
      setUser({ first_name: json.user.first_name, last_name: json.user.last_name, id: json.user.id });
    } else {
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
          {user && (
            <>
              <Text>Имя: {user.first_name}</Text>
              <Text>Фамилия: {user.last_name}</Text>
              <Text>ID: {user.id}</Text>
            </>
          )}
        </Flex>
      </Flex>
    </Main>
  );
}
