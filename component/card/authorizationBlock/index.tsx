'use client';
import { Button, Card, Flex, Form, Progress, Text, TextField } from '@prismane/core';
import { useForm } from '@prismane/core/hooks';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export default function AuthorizationBlock() {
  const router = useRouter();
  const { handleSubmit, handleReset, register, getValue } = useForm({
    fields: {
      last_name: {
        value: '',
      },
      first_name: {
        value: '',
      },
    },
  });
  //const [id, setId] = useState<number>(0);

  return (
    <Card w={'40%'}>
      <Flex w={'100%'} direction={'column'} gap={24}>
        <Text cl={() => ['primary', 400]} fs={'xl'} ta={'left'} fw={'bold'} w={'100%'}>
          Авторизация
        </Text>
        <Form
          w={'100%'}
          onSubmit={(e: any) => {
            handleSubmit(e, (v: any) => router.push(`/authorization/chat?first_name=${v.first_name}&last_name=${v.last_name}`));
          }}
          onReset={() => handleReset()}>
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
            </Flex>
            <Flex w={'100%'} direction={'column'} gap={24}>
              <TextField placeholder="Введите фамилию" {...register('last_name')} />
              <TextField placeholder="Введите имя" {...register('first_name')} />
            </Flex>
          </Flex>
          <Progress w={'100%'} value={(getValue('last_name') !== '' ? 50 : 0) + (getValue('first_name') !== '' ? 50 : 0)} />
          <Button size="md" w={'100%'} type="submit">
            Авторизоваться/Зарегистрироваться
          </Button>
          <Button size="md" w={'100%'} variant="tertiary" type="reset">
            Сбросить
          </Button>
        </Form>
      </Flex>
    </Card>
  );
}
