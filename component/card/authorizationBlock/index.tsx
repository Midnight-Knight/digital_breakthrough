'use client';
import { Button, Card, Flex, Form, Progress, Text, TextField } from '@prismane/core';
import { useForm } from '@prismane/core/hooks';
import { useRouter } from 'next/navigation';

export default function AuthorizationBlock() {
  const router = useRouter();
  const { handleSubmit, handleReset, register, getValue } = useForm({
    fields: {
      name: {
        value: '',
      },
      teacher: {
        value: '',
      },
      webinar: {
        value: '',
      },
      course: {
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
            handleSubmit(e, (v: any) => {
              if (v.name !== '' && v.teacher !== '' && v.webinar !== '' && v.course !== '') {
                router.push(`/authorization/chat?name=${v.name}&teacher=${v.teacher}&webinar=${v.webinar}&course=${v.course}`);
              }
            });
          }}
          onReset={() => handleReset()}>
          <Flex w={'100%'} direction={'row'} gap={24}>
            <Flex direction={'column'} gap={24}>
              <Flex h={40} direction={'column'} justify={'center'}>
                <Text cl={() => ['base', 200]} fs={'base'} ta={'left'} fw={'normal'} w={'100%'}>
                  ФИО Студента
                </Text>
              </Flex>
              <Flex h={40} direction={'column'} justify={'center'}>
                <Text cl={() => ['base', 200]} fs={'base'} ta={'left'} fw={'normal'} w={'100%'}>
                  ФИО Преподавателя
                </Text>
              </Flex>
              <Flex h={40} direction={'column'} justify={'center'}>
                <Text cl={() => ['base', 200]} fs={'base'} ta={'left'} fw={'normal'} w={'100%'}>
                  Вебинар курса
                </Text>
              </Flex>
              <Flex h={40} direction={'column'} justify={'center'}>
                <Text cl={() => ['base', 200]} fs={'base'} ta={'left'} fw={'normal'} w={'100%'}>
                  Курс/Программа обучения
                </Text>
              </Flex>
            </Flex>
            <Flex w={'100%'} direction={'column'} gap={24}>
              <TextField placeholder="Введите фио студента" {...register('name')} />
              <TextField placeholder="Введите фио преподователя" {...register('teacher')} />
              <TextField placeholder="Введите название вебинара" {...register('webinar')} />
              <TextField placeholder="Введите название курса" {...register('course')} />
            </Flex>
          </Flex>
          <Progress
            w={'100%'}
            value={
              (getValue('name') !== '' ? 25 : 0) +
              (getValue('teacher') !== '' ? 25 : 0) +
              (getValue('webinar') !== '' ? 25 : 0) +
              (getValue('course') !== '' ? 25 : 0)
            }
          />
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
