'use client';
import { Button, Card, Center, Flex, Form, Hide, Link, Main, NumberField, Progress, Text, TextareaField, TextField } from '@prismane/core';
import MyAside from '@/component/myAside';
import Typewriter from 'typewriter-effect';
import { notFound, useSearchParams } from 'next/navigation';
import ChoiseWebinarStudent from '@/component/card/choiseWebinarStudent';
import FormChat from '@/component/chat/formChat';

export default function Chat() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const teacher = searchParams.get('teacher');
  const webinar = searchParams.get('webinar');
  const course = searchParams.get('course');
  if (!name || !teacher || !webinar || !course) {
    notFound();
  }

  return (
    <Main p={0} py={0} px={0} w={'100vw'} mih={'100vh'} pl={260} bg={theme => (theme.mode === 'dark' ? ['base', 900] : ['base', 100])}>
      <Flex w={'100%'}>
        <MyAside>
          <Flex w={'100%'} h={'100%'} direction={'column'} justify={'end'} align={'start'} gap={10}>
            <Text fs="xl" fw="bold" cl={() => ['base', 100]}>
              {name}
            </Text>
            <Link w={'100%'} href={'/authorization'} underline="none">
              <Button size="base" w={'100%'} variant="tertiary" type="reset">
                Выйти
              </Button>
            </Link>
          </Flex>
        </MyAside>
        <Flex w={'100%'} p={'5rem'} direction={'column'} gap={'16px'} justify={'start'} align={'center'} h={'100%'}>
          <FormChat name={name} teacher={teacher} course={course} webinar={webinar} />
        </Flex>
      </Flex>
    </Main>
  );
}
