'use client';
import { AutocompleteField, Card, Flex, Form } from '@prismane/core';
import { useForm } from '@prismane/core/hooks';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Options_api } from '@/consts/api/options_api';

export default function FormCategory() {
  const [teacherArray, setTeacherArray] = useState<string[]>([]);
  const [webinarArray, setWebinarArray] = useState<string[]>([]);
  const [courseArray, setCourseArray] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(Options_api);
        axios.defaults.headers.common['Cookie'] = 'abuse_interstitial=e732-193-41-142-172.ngrok-free.app';
        const response = await axios.get(Options_api);
        console.log(await response.data);
        setTeacherArray(await response.data.teachers);
        setWebinarArray(await response.data.webinars);
        setCourseArray(await response.data.courses);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const { handleSubmit, register, getValue, setValue } = useForm({
    fields: {
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
  return (
    <Form w={'100%'}>
      <Card w={'100%'}>
        <Flex w={'100%'} direction={'column'} gap={'1rem'}>
          <AutocompleteField
            w={'100%'}
            placeholder="Выберите конкретного преподователя или оставьте пустым, чтобы выбрать всех"
            label="Преподователь"
            {...register('teacher')}
            options={teacherArray}
          />
          <AutocompleteField
            w={'100%'}
            placeholder="Выберите конкретный вебинар или оставьте пустым, чтобы выбрать все"
            label="Вебинар"
            {...register('webinar')}
            options={webinarArray}
          />
          <AutocompleteField
            w={'100%'}
            placeholder="Выберите конкретный курс или оставьте пустым, чтобы выбрать все"
            label="Курс"
            {...register('course')}
            options={courseArray}
          />
        </Flex>
      </Card>
    </Form>
  );
}
