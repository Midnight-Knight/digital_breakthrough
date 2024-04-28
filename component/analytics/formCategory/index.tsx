'use client';
import { AutocompleteField, Button, Card, Flex, Form, Text } from '@prismane/core';
import { useForm } from '@prismane/core/hooks';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Options_api } from '@/consts/api/options_api';
import { useRouter } from 'next/navigation';

export default function FormCategory() {
  const router = useRouter();
  const [teacherArray, setTeacherArray] = useState<{ value: string; element: string }[]>([]);
  const [webinarArray, setWebinarArray] = useState<{ value: string; element: string }[]>([]);
  const [courseArray, setCourseArray] = useState<{ value: string; element: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(Options_api);
        const response = await axios.post(Options_api, null, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const bufferTeachers: string[] = await response.data.teachers;
        const bufferWebinar: string[] = await response.data.webinars;
        const bufferCourse: string[] = await response.data.courses;
        console.log(bufferTeachers.map(elem => ({ value: elem, element: elem })));
        console.log(bufferWebinar);
        console.log(bufferCourse);
        setTeacherArray(bufferTeachers.map(elem => ({ value: elem, element: elem })));
        setWebinarArray(bufferWebinar.map(elem => ({ value: elem, element: elem })));
        setCourseArray(bufferCourse.map(elem => ({ value: elem, element: elem })));
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
    <Form
      w={'100%'}
      onSubmit={(e: any) => {
        handleSubmit(e, (v: any) => {
          router.push(`/analytics/data?teacher=${v.teacher}&webinar=${v.webinar}&course=${v.course}`);
        });
      }}>
      <Card w={'100%'}>
        <Flex w={'100%'} direction={'column'} gap={'1rem'}>
          <AutocompleteField
            w={'100%'}
            placeholder="Выберите конкретного преподователя или оставьте пустым, чтобы выбрать всех"
            label="Преподователь"
            {...register('teacher')}
            options={teacherArray}
            autoComplete={'off'}
          />
          <AutocompleteField
            w={'100%'}
            placeholder="Выберите конкретный вебинар или оставьте пустым, чтобы выбрать все"
            label="Вебинар"
            {...register('webinar')}
            options={webinarArray}
            autoComplete={'off'}
          />
          <AutocompleteField
            w={'100%'}
            placeholder="Выберите конкретный курс или оставьте пустым, чтобы выбрать все"
            label="Курс"
            {...register('course')}
            options={courseArray}
            autoComplete={'off'}
          />
          <Button type="submit">
            <Text>Показать аналитику</Text>
          </Button>
        </Flex>
      </Card>
    </Form>
  );
}
