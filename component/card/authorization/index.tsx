'use client';
import { Button, Card, Flex, Form, Progress, Text, TextField } from '@prismane/core';
import { useForm } from '@prismane/core/hooks';

export default function Authorization() {
  const { handleSubmit, handleReset, register, getValue } = useForm({
    fields: {
      surname: {
        value: '',
      },
      name: {
        value: '',
      },
      patronymic: {
        value: '',
      },
    },
  });
  //const [id, setId] = useState<number>(0);

  return (
    <Card w={'100%'} h={'65vh'}>
      <Flex w={'100%'} direction={'column'} gap={24}>
        <Text cl={() => ['primary', 400]} fs={'xl'} ta={'left'} fw={'bold'} w={'100%'}>
          Авторизация
        </Text>
        <Form
          w={'100%'}
          onSubmit={(e: any) => {
            handleSubmit(e, (v: any) => console.log(v));
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
              <Flex h={40} direction={'column'} justify={'center'}>
                <Text cl={() => ['base', 200]} fs={'base'} ta={'left'} fw={'normal'} w={'100%'}>
                  Отчество
                </Text>
              </Flex>
            </Flex>
            <Flex w={'100%'} direction={'column'} gap={24}>
              <TextField placeholder="Введите фамилию" {...register('surname')} />
              <TextField placeholder="Введите имя" {...register('name')} />
              <TextField placeholder="Введите отчетство" {...register('patronymic')} />
            </Flex>
          </Flex>
          <Progress
            w={'100%'}
            value={
              (getValue('surname') !== '' ? 33 : 0) + (getValue('name') !== '' ? 33 : 0) + (getValue('patronymic') !== '' ? 33 : 0) + 1
            }
          />
          <Button w={'100%'} type="submit">
            Авторизоваться
          </Button>
          <Button w={'100%'} variant="tertiary" type="reset">
            Сбросить
          </Button>
        </Form>
      </Flex>
    </Card>
  );
}
