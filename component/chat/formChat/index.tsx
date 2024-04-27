'use client';
import { Avatar, Button, Card, Flex, Form, Grid, NumberField, Radio, Text, TextareaField } from '@prismane/core';
import { useRouter } from 'next/navigation';
import { useForm } from '@prismane/core/hooks';
import { useEffect, useState } from 'react';
import { PaperPlane } from '@phosphor-icons/react';
import ChatBotMessage from '@/component/chat/chatBotMessage';
import MeMessage from '@/component/chat/meMessage';
import axios from 'axios';
import { Message_api } from '@/consts/api/message_api';

type Props = {
  name: string;
  teacher: string;
  webinar: string;
  course: string;
};

export default function FormChat({ name, teacher, webinar, course }: Props) {
  const { handleSubmit, register, getValue, setValue } = useForm({
    fields: {
      question_1: {
        value: 5,
      },
      question_2_1: {
        value: '',
      },
      question_2_2: {
        value: '',
      },
      question_2_3: {
        value: '',
      },
      question_2_4: {
        value: '',
      },
    },
  });
  const [question, setQuestion] = useState<number>(0);

  const titleQuestion = ['question_1', 'question_2_1', 'question_2_2', 'question_2_3', 'question_2_4'];

  const handleSetQuestion = () => {
    setQuestion(question + 1);
  };

  const questionsText = [
    'На шкале от 1 до 10, насколько вы готовы поделиться вашим мнением о вебинаре?',
    'Что вам больше всего понравилось в теме вебинара и почему?',
    'Были ли моменты в вебинаре, которые вызвали затруднения в понимании материала? Можете описать их?',
    'Какие аспекты вебинара, по вашему мнению, нуждаются в улучшении и какие конкретные изменения вы бы предложили?',
    'Есть ли темы или вопросы, которые вы бы хотели изучить более подробно в следующих занятиях?',
    'Спасибо, за то что вы ответили на вопросы по поводу качества образования, всего вам хорошего и успехов в учёбе!',
    'Спасибо, за то что вы удели нам внимание, всего вам хорошего и успехов в учёбе!',
  ];

  const input = [
    <Card w={'100%'}>
      <Radio.Group
        justify={'center'}
        align={'center'}
        name={'question_1'}
        value={getValue('question_1')}
        onChange={(event: any) => setValue('question_1', Number(event.target.value))}>
        <Radio value={1} label={'1'} />
        <Radio value={2} label={'2'} />
        <Radio value={3} label={'3'} />
        <Radio value={4} label={'4'} />
        <Radio value={5} label={'5'} />
        <Radio value={6} label={'6'} />
        <Radio value={7} label={'7'} />
        <Radio value={8} label={'8'} />
        <Radio value={9} label={'9'} />
        <Radio value={10} label={'10'} />
      </Radio.Group>
    </Card>,
    <TextareaField w={'100%'} placeholder="Введите отзыв" {...register('question_2_1')} />,
    <TextareaField w={'100%'} placeholder="Введите отзыв" {...register('question_2_2')} />,
    <TextareaField w={'100%'} placeholder="Введите отзыв" {...register('question_2_3')} />,
    <TextareaField w={'100%'} placeholder="Введите отзыв" {...register('question_2_4')} />,
  ];

  const hints = [
    [
      { text: 'Я не чувствую себя комфортно выражать своё мнение на данный момент (1 из 10).', answer: 1 },
      { text: 'У меня есть некоторые сомнения, но я могу поделиться некоторыми мыслями (5 из 10).', answer: 5 },
      { text: 'Я готов высказать своё мнение, но, возможно, не со всем согласен (7 из 10).', answer: 7 },
      { text: 'Я с радостью готов поделиться своим мнением о вебинаре (10 из 10)!', answer: 10 },
    ],
    [
      { text: 'Понравилось проведение вебинар', answer: 'Понравилось проведение вебинар' },
      { text: 'Понравилась программа обучения по курсу', answer: 'Понравилась программа обучения по курсу' },
      { text: 'Понравился преподаватель', answer: 'Понравился преподаватель' },
      { text: 'Мне ничего не понравилось', answer: 'Мне ничего не понравилось' },
    ],
    [
      {
        text: 'Да, были. Некоторые технические термины были сложны для понимания.',
        answer: 'Да, были. Некоторые технические термины были сложны для понимания.',
      },
      { text: 'Мне было сложно уловить логику в определенном разделе.', answer: 'Мне было сложно уловить логику в определенном разделе.' },
      {
        text: 'Я испытывал затруднения с концепцией, которая была представлена.',
        answer: 'Я испытывал затруднения с концепцией, которая была представлена.',
      },
      { text: 'Нет, у меня не возникало затруднений.', answer: 'Нет, у меня не возникало затруднений.' },
    ],
    [
      {
        text: 'Я думаю, что вебинар может быть более интерактивным с использованием заданий и групповых обсуждений.',
        answer: 'Я думаю, что вебинар может быть более интерактивным с использованием заданий и групповых обсуждений.',
      },
      {
        text: 'Было бы полезно, если бы материал был представлен более плавно и с примерами из реальной жизни.',
        answer: 'Было бы полезно, если бы материал был представлен более плавно и с примерами из реальной жизни.',
      },
      {
        text: 'Мне кажется, что некоторые разделы можно углубить для более полного понимания.',
        answer: 'Мне кажется, что некоторые разделы можно углубить для более полного понимания.',
      },
      {
        text: 'Я не вижу необходимости в изменениях, мне все понравилось.',
        answer: 'Я не вижу необходимости в изменениях, мне все понравилось.',
      },
    ],
    [
      {
        text: 'Я бы хотел узнать больше о конкретных инструментах или методах, упомянутых в предыдущих занятиях.',
        answer: 'Я бы хотел узнать больше о конкретных инструментах или методах, упомянутых в предыдущих занятиях.',
      },
      {
        text: 'Мне было бы интересно изучить более продвинутые темы в этой области.',
        answer: 'Мне было бы интересно изучить более продвинутые темы в этой области.',
      },
      {
        text: 'Я хотел бы углубиться в конкретные кейсы и их анализ.',
        answer: 'Я хотел бы углубиться в конкретные кейсы и их анализ.',
      },
      {
        text: 'Нет, я удовлетворен уровнем изученного материала.',
        answer: 'Нет, я удовлетворен уровнем изученного материала.',
      },
    ],
  ];

  const request = async () => {
    const response = await axios.post(
      Message_api,
      {
        teacher: teacher,
        webinar: webinar,
        course: course,
        name: name,
        question_1: getValue('question_1'),
        question_2:
          getValue('question_1') < 5
            ? null
            : {
                question_1: getValue('question_2_1'),
                question_2: getValue('question_2_1'),
                question_3: getValue('question_2_1'),
                question_4: getValue('question_2_1'),
              },
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    console.log('Ответ от сервера:', response.data);
  };

  const funcMessage = () => {
    if (question === 0) {
      return <ChatBotMessage text={questionsText[0]} writer={true} />;
    } else if (question === 1 && getValue('question_1') > 4) {
      return (
        <>
          <ChatBotMessage text={questionsText[0]} writer={false} />
          <MeMessage text={getValue('question_1') + ' из 10'} />
          <ChatBotMessage text={questionsText[1]} writer={true} />
        </>
      );
    } else if (question === 2 && getValue('question_1') > 4) {
      return (
        <>
          <ChatBotMessage text={questionsText[0]} writer={false} />
          <MeMessage text={getValue('question_1') + ' из 10'} />
          <ChatBotMessage text={questionsText[1]} writer={false} />
          <MeMessage text={getValue('question_2_1')} />
          <ChatBotMessage text={questionsText[2]} writer={true} />
        </>
      );
    } else if (question === 3 && getValue('question_1') > 4) {
      return (
        <>
          <ChatBotMessage text={questionsText[0]} writer={false} />
          <MeMessage text={getValue('question_1') + ' из 10'} />
          <ChatBotMessage text={questionsText[1]} writer={false} />
          <MeMessage text={getValue('question_2_1')} />
          <ChatBotMessage text={questionsText[2]} writer={false} />
          <MeMessage text={getValue('question_2_2')} />
          <ChatBotMessage text={questionsText[3]} writer={true} />
        </>
      );
    } else if (question === 4 && getValue('question_1') > 4) {
      return (
        <>
          <ChatBotMessage text={questionsText[0]} writer={false} />
          <MeMessage text={getValue('question_1') + ' из 10'} />
          <ChatBotMessage text={questionsText[1]} writer={false} />
          <MeMessage text={getValue('question_2_1')} />
          <ChatBotMessage text={questionsText[2]} writer={false} />
          <MeMessage text={getValue('question_2_2')} />
          <ChatBotMessage text={questionsText[3]} writer={false} />
          <MeMessage text={getValue('question_2_3')} />
          <ChatBotMessage text={questionsText[4]} writer={true} />
        </>
      );
    } else if (question === 5 && getValue('question_1') > 4) {
      return (
        <>
          <ChatBotMessage text={questionsText[0]} writer={false} />
          <MeMessage text={getValue('question_1') + ' из 10'} />
          <ChatBotMessage text={questionsText[1]} writer={false} />
          <MeMessage text={getValue('question_2_1')} />
          <ChatBotMessage text={questionsText[2]} writer={false} />
          <MeMessage text={getValue('question_2_2')} />
          <ChatBotMessage text={questionsText[3]} writer={false} />
          <MeMessage text={getValue('question_2_3')} />
          <ChatBotMessage text={questionsText[4]} writer={false} />
          <MeMessage text={getValue('question_2_4')} />
          <ChatBotMessage text={questionsText[5]} writer={true} />
        </>
      );
    } else {
      return (
        <>
          <ChatBotMessage text={questionsText[0]} writer={false} />
          <MeMessage text={getValue('question_1') + ' из 10'} />
          <ChatBotMessage text={questionsText[6]} writer={true} />
        </>
      );
    }
  };

  useEffect(() => {
    if ((question === 5 && getValue('question_1') > 4) || (question === 1 && getValue('question_1') < 5)) {
      request();
    }
  }, [question]);

  return (
    <Form
      px={'15rem'}
      w={'100%'}
      onSubmit={(e: any) => {
        handleSubmit(e, (v: any) => {
          handleSetQuestion();
        });
      }}>
      <Flex pos={'relative'} w="100%" h="100%">
        <Flex
          w={'100%'}
          direction={'column'}
          justify={'start'}
          align={'start'}
          gap={'2rem'}
          pl={'0.5rem'}
          pr={'1.5rem'}
          pb={question < 5 && (question === 0 || getValue('question_1')) > 4 ? 256 : 0}>
          {funcMessage()}
        </Flex>
        <Flex
          bg={theme => ['base', theme.mode === 'dark' ? 900 : 100]}
          pos={'fixed'}
          b={'0'}
          r={'0'}
          w={'calc(100% - 260px)'}
          direction={'column'}
          justify={'end'}
          align={'center'}
          gap={'1rem'}
          px={'20rem'}
          pb={question < 5 && (question === 0 || getValue('question_1') > 4) ? '2.5rem' : 0}>
          <Grid w={'100%'} templateColumns={2} gap={'0.75rem'}>
            {question < 5 &&
              (question === 0 || getValue('question_1') > 4) &&
              hints[question].map((element, index) => (
                <Grid.Item>
                  <Button
                    w={'100%'}
                    h={'100%'}
                    size="md"
                    onClick={() => setValue(titleQuestion[question], hints[question][index].answer)}
                    type="submit">
                    {element.text}
                  </Button>
                </Grid.Item>
              ))}
          </Grid>
          <Flex w={'100%'} direction={'row'} gap={'1rem'} justify={'start'} align={'center'}>
            {question < 5 && (question === 0 || getValue('question_1') > 4) && (
              <>
                {input[question]}
                <Button h={60} type="submit">
                  <PaperPlane size={24} color={'#ffffff'} />
                </Button>
              </>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Form>
  );
}
