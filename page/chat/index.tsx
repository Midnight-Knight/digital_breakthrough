'use client';
import { Card, Flex, Main, NumberField, Text, TextField } from '@prismane/core';
import { useState } from 'react';

export default function Chat() {
  const [surname, setSurname] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [patronymic, setPatronymic] = useState<string>('');
  const [id, setId] = useState<number>(0);

  return (
    <Main w={'100%'} mih={'110vh'} px={'10vw'} pb={'10vw'} pt={160} bg={(theme) => (theme.mode === 'dark' ? ['base', 900] : ['base', 100])}>
      <Flex w={'100%'} direction={'column'} gap={'32px'} justify={'start'} align={'start'}>
        <Text cl={() => ['primary', 400]} fs={'4xl'} ta={'center'} fw={'bold'} w={'100%'}>
          Чат-бот для сбора данных от студентов
        </Text>
        <Flex w={'100%'} gap={'32px'} justify={'start'} align={'start'}>
          <Card w={'100%'}>
            <Flex w={'100%'} direction={'column'} gap={24}>
              <Text cl={() => ['primary', 400]} fs={'xl'} ta={'left'} fw={'bold'} w={'100%'}>
                Авторизация
              </Text>
              <Flex w={'100%'} direction={'row'} gap={24}>
                <Flex direction={'column'} gap={24}>
                  <Flex h={40} direction={'column'} justify={'center'}>
                    <Text cl={() => ['base', 200]} fs={'base'} ta={'left'} fw={'normal'} w={'100%'}>
                      Фамилия
                    </Text>
                  </Flex>
                  <Flex h={40} direction={'column'} justify={'center'}>
                    <Text cl={() => ['base', 200]} fs={'base'} ta={'left'} fw={'normal'} w={'100%'}>
                      Имя
                    </Text>
                  </Flex>
                  <Flex h={40} direction={'column'} justify={'center'}>
                    <Text cl={() => ['base', 200]} fs={'base'} ta={'left'} fw={'normal'} w={'100%'}>
                      Отчество
                    </Text>
                  </Flex>
                  <Flex h={40} direction={'column'} justify={'center'}>
                    <Text cl={() => ['base', 200]} fs={'base'} ta={'left'} fw={'normal'} w={'100%'}>
                      ID
                    </Text>
                  </Flex>
                </Flex>
                <Flex w={'100%'} direction={'column'} gap={24}>
                  <TextField
                    value={surname}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)}
                    placeholder="Введите фамилию"
                  />
                  <TextField
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    placeholder="Введите имя"
                  />
                  <TextField
                    value={patronymic}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPatronymic(e.target.value)}
                    placeholder="Введите отчетство"
                  />
                  <NumberField value={id} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setId(Number(e.target.value))} />
                </Flex>
              </Flex>
            </Flex>
          </Card>
          <Card w={'100%'}></Card>
        </Flex>
      </Flex>
    </Main>
  );
}
