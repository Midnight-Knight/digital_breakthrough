'use client';
import {
  Button,
  Card,
  Center,
  Checkbox,
  Flex,
  Form,
  Grid,
  Hide,
  Link,
  Main,
  NumberField,
  Progress,
  Text,
  TextareaField,
  TextField,
} from '@prismane/core';
import MyAside from '@/component/myAside';
import { notFound, useSearchParams } from 'next/navigation';
import { Chart, registerables } from 'chart.js/auto';
import { useEffect, useState } from 'react';
import { Options_api } from '@/consts/api/options_api';
import axios from 'axios';
import { Model_api } from '@/consts/api/model_api';
import MyTable from '@/component/myTable';
import MyBar from '@/component/diagrams/myBar';
import MyDoughnut from '@/component/diagrams/myDoughnut';
import MyPie from '@/component/diagrams/myPie';
import MyPolarArea from '@/component/diagrams/myPolarArea';
import MyRadar from '@/component/diagrams/myRadar';

Chart.register(...registerables);

export default function Data() {
  const searchParams = useSearchParams();
  const teacher = searchParams.get('teacher');
  const webinar = searchParams.get('webinar');
  const course = searchParams.get('course');
  const [modelResponses, setModelResponses] = useState<{ isPositive: boolean; object: number; isRelevant: boolean; answers: string[] }[]>(
    [],
  );
  const [positive, setPositive] = useState<number>(0);
  const [noPositive, setNoPositive] = useState<number>(0);
  const [relevant, setRelevant] = useState<number>(0);
  const [noRelevant, setNoRelevant] = useState<number>(0);
  const [objectTeacher, setObjectTeacher] = useState<number>(0);
  const [objectTeacherPositive, setObjectTeacherPositive] = useState<number>(0);
  const [objectTeacherNoPositive, setObjectTeacherNoPositive] = useState<number>(0);
  const [objectWebinar, setObjectWebinar] = useState<number>(0);
  const [objectWebinarPositive, setObjectWebinarPositive] = useState<number>(0);
  const [objectWebinarNoPositive, setObjectWebinarNoPositive] = useState<number>(0);
  const [objectCourse, setObjectCourse] = useState<number>(0);
  const [objectCoursePositive, setObjectCoursePositive] = useState<number>(0);
  const [objectCourseNoPositive, setObjectCourseNoPositive] = useState<number>(0);

  const [checkTeacher, setCheckTeacher] = useState<boolean>(true);
  const [checkWebinar, setCheckWebinar] = useState<boolean>(true);
  const [checkCourse, setCheckCourse] = useState<boolean>(true);
  const [checkPositive, setCheckPositive] = useState<boolean>(true);
  const [checkNoPositive, setCheckNoPositive] = useState<boolean>(true);
  const [checkRelevant, setCheckRelevant] = useState<boolean>(true);
  const [checkNoRelevant, setCheckNoRelevant] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(Model_api);
        const response = await axios.post(Model_api, null, {
          params: {
            teacherName: teacher,
            courseTitle: webinar,
            webinarTitle: course,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('data');
        console.log(response.data);
        setModelResponses(response.data.modelResponses);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setRelevant(modelResponses.filter(item => item.isRelevant).length);
    setNoRelevant(modelResponses.filter(item => !item.isRelevant).length);
    setPositive(modelResponses.filter(item => item.isPositive).length);
    setNoPositive(modelResponses.filter(item => !item.isPositive).length);
    setObjectTeacher(modelResponses.filter(item => item.object === 2).length);
    setObjectTeacherPositive(modelResponses.filter(item => item.object === 2 && item.isPositive).length);
    setObjectTeacherNoPositive(modelResponses.filter(item => item.object === 2 && !item.isPositive).length);
    setObjectWebinar(modelResponses.filter(item => item.object === 0).length);
    setObjectWebinarPositive(modelResponses.filter(item => item.object === 0 && item.isPositive).length);
    setObjectWebinarNoPositive(modelResponses.filter(item => item.object === 0 && !item.isPositive).length);
    setObjectCourse(modelResponses.filter(item => item.object === 1).length);
    setObjectCoursePositive(modelResponses.filter(item => item.object === 1 && item.isPositive).length);
    setObjectCourseNoPositive(modelResponses.filter(item => item.object === 1 && !item.isPositive).length);
  }, [modelResponses]);

  return (
    <Main p={0} py={0} px={0} w={'100vw'} mih={'100vh'} pl={260} bg={theme => (theme.mode === 'dark' ? ['base', 900] : ['base', 100])}>
      <Flex w={'100%'}>
        <MyAside>
          <Flex w={'100%'} h={'100%'} direction={'column'} justify={'end'} align={'start'} gap={10}>
            <Text fs="xl" fw="bold" cl={() => ['base', 100]}>
              Групировка по:
            </Text>
            {teacher && (
              <>
                <Text fw="bold" cl={() => ['base', 100]}>
                  Преподователь:
                </Text>
                <Text cl={() => ['base', 100]}>{teacher}</Text>
              </>
            )}
            {webinar && (
              <>
                <Text fw="bold" cl={() => ['base', 100]}>
                  Вебинар:
                </Text>
                <Text cl={() => ['base', 100]}>{webinar}</Text>
              </>
            )}
            {course && (
              <>
                <Text fw="bold" cl={() => ['base', 100]}>
                  Курс:
                </Text>
                <Text cl={() => ['base', 100]}>{course}</Text>
              </>
            )}
            <Link w={'100%'} href={'/analytics'} underline="none">
              <Button size="base" w={'100%'} variant="tertiary" type="reset">
                Назад
              </Button>
            </Link>
          </Flex>
        </MyAside>
        <Flex w={'100%'} p={'5rem'} direction={'column'} gap={'3rem'} justify={'start'} align={'center'} h={'100%'}>
          <Card w={'100%'}>
            <Flex direction={'column'} gap={'1rem'}>
              <Text pb={'1rem'} fs="xl" fw="bold">
                Общая информация
              </Text>
              <Grid w={'100%'} templateColumns={3} gap={'1rem'} bdb={1} bdbs={'solid'} bdbc={() => ['base', 500]}>
                <Grid.Item>
                  <Text pb={'1rem'} fs={'xl'} cl={() => ['base', 500]}>
                    Всего отзывов
                  </Text>
                </Grid.Item>
                <Grid.Item>
                  <Text pb={'1rem'} fs={'xl'} cl={() => ['base', 500]}>
                    Всего положительных отзывов
                  </Text>
                </Grid.Item>
                <Grid.Item>
                  <Text pb={'1rem'} fs={'xl'} cl={() => ['base', 500]}>
                    Всего негативных отзывов
                  </Text>
                </Grid.Item>
              </Grid>
              <Grid w={'100%'} templateColumns={3} gap={'1rem'}>
                <Grid.Item>
                  <Text fs={'xl'}>{modelResponses.length}</Text>
                </Grid.Item>
                <Grid.Item>
                  <Text fs={'xl'}>{positive}</Text>
                </Grid.Item>
                <Grid.Item>
                  <Text fs={'xl'}>{noPositive}</Text>
                </Grid.Item>
              </Grid>
            </Flex>
          </Card>
          <Card w={'100%'}>
            <Flex direction={'column'} gap={'1rem'}>
              <Text pb={'1rem'} fs="xl" fw="bold">
                Релевантность отзывов
              </Text>
              <Grid w={'100%'} templateColumns={2} gap={'1rem'} bdb={1} bdbs={'solid'} bdbc={() => ['base', 500]}>
                <Grid.Item>
                  <Text pb={'1rem'} fs={'xl'} cl={() => ['base', 500]}>
                    Релевантный отзывов (смысловой)
                  </Text>
                </Grid.Item>
                <Grid.Item>
                  <Text pb={'1rem'} fs={'xl'} cl={() => ['base', 500]}>
                    Нерелевантный отзывов (не смысловой)
                  </Text>
                </Grid.Item>
              </Grid>
              <Grid w={'100%'} templateColumns={2} gap={'1rem'}>
                <Grid.Item>
                  <Text fs={'xl'}>{relevant}</Text>
                </Grid.Item>
                <Grid.Item>
                  <Text fs={'xl'}>{noRelevant}</Text>
                </Grid.Item>
              </Grid>
            </Flex>
          </Card>
          <Card w={'100%'}>
            <Flex direction={'column'} gap={'1rem'}>
              <Text pb={'1rem'} fs="xl" fw="bold">
                Отзывы про преподователей
              </Text>
              <Grid w={'100%'} templateColumns={3} gap={'1rem'} bdb={1} bdbs={'solid'} bdbc={() => ['base', 500]}>
                <Grid.Item>
                  <Text pb={'1rem'} fs={'xl'} cl={() => ['base', 500]}>
                    Всего отзывов
                  </Text>
                </Grid.Item>
                <Grid.Item>
                  <Text pb={'1rem'} fs={'xl'} cl={() => ['base', 500]}>
                    Всего положительных отзывов
                  </Text>
                </Grid.Item>
                <Grid.Item>
                  <Text pb={'1rem'} fs={'xl'} cl={() => ['base', 500]}>
                    Всего негативных отзывов
                  </Text>
                </Grid.Item>
              </Grid>
              <Grid w={'100%'} templateColumns={3} gap={'1rem'}>
                <Grid.Item>
                  <Text fs={'xl'}>{objectTeacher}</Text>
                </Grid.Item>
                <Grid.Item>
                  <Text fs={'xl'}>{objectTeacherPositive}</Text>
                </Grid.Item>
                <Grid.Item>
                  <Text fs={'xl'}>{objectTeacherNoPositive}</Text>
                </Grid.Item>
              </Grid>
            </Flex>
          </Card>
          <Card w={'100%'}>
            <Flex direction={'column'} gap={'1rem'}>
              <Text pb={'1rem'} fs="xl" fw="bold">
                Отзывы про вебинары
              </Text>
              <Grid w={'100%'} templateColumns={3} gap={'1rem'} bdb={1} bdbs={'solid'} bdbc={() => ['base', 500]}>
                <Grid.Item>
                  <Text pb={'1rem'} fs={'xl'} cl={() => ['base', 500]}>
                    Всего отзывов
                  </Text>
                </Grid.Item>
                <Grid.Item>
                  <Text pb={'1rem'} fs={'xl'} cl={() => ['base', 500]}>
                    Всего положительных отзывов
                  </Text>
                </Grid.Item>
                <Grid.Item>
                  <Text pb={'1rem'} fs={'xl'} cl={() => ['base', 500]}>
                    Всего негативных отзывов
                  </Text>
                </Grid.Item>
              </Grid>
              <Grid w={'100%'} templateColumns={3} gap={'1rem'}>
                <Grid.Item>
                  <Text fs={'xl'}>{objectWebinar}</Text>
                </Grid.Item>
                <Grid.Item>
                  <Text fs={'xl'}>{objectWebinarPositive}</Text>
                </Grid.Item>
                <Grid.Item>
                  <Text fs={'xl'}>{objectWebinarNoPositive}</Text>
                </Grid.Item>
              </Grid>
            </Flex>
          </Card>
          <Card w={'100%'}>
            <Flex direction={'column'} gap={'1rem'}>
              <Text pb={'1rem'} fs="xl" fw="bold">
                Отзывы про курсы
              </Text>
              <Grid w={'100%'} templateColumns={3} gap={'1rem'} bdb={1} bdbs={'solid'} bdbc={() => ['base', 500]}>
                <Grid.Item>
                  <Text pb={'1rem'} fs={'xl'} cl={() => ['base', 500]}>
                    Всего отзывов
                  </Text>
                </Grid.Item>
                <Grid.Item>
                  <Text pb={'1rem'} fs={'xl'} cl={() => ['base', 500]}>
                    Всего положительных отзывов
                  </Text>
                </Grid.Item>
                <Grid.Item>
                  <Text pb={'1rem'} fs={'xl'} cl={() => ['base', 500]}>
                    Всего негативных отзывов
                  </Text>
                </Grid.Item>
              </Grid>
              <Grid w={'100%'} templateColumns={3} gap={'1rem'}>
                <Grid.Item>
                  <Text fs={'xl'}>{objectCourse}</Text>
                </Grid.Item>
                <Grid.Item>
                  <Text fs={'xl'}>{objectCoursePositive}</Text>
                </Grid.Item>
                <Grid.Item>
                  <Text fs={'xl'}>{objectCourseNoPositive}</Text>
                </Grid.Item>
              </Grid>
            </Flex>
          </Card>
          <Grid w={'100%'} templateColumns={2} gap={'3rem'}>
            <Grid.Item>
              <MyBar
                teacher={{ bad: objectTeacherNoPositive, good: objectTeacherPositive }}
                webinar={{ bad: objectWebinarNoPositive, good: objectWebinarPositive }}
                course={{ bad: objectCourseNoPositive, good: objectCoursePositive }}
              />
            </Grid.Item>
            <Grid.Item>
              <MyRadar
                teacher={{ bad: objectTeacherNoPositive, good: objectTeacherPositive }}
                webinar={{ bad: objectWebinarNoPositive, good: objectWebinarPositive }}
                course={{ bad: objectCourseNoPositive, good: objectCoursePositive }}
              />
            </Grid.Item>
            <Grid.Item>
              <MyDoughnut
                teacher={{ bad: objectTeacherNoPositive, good: objectTeacherPositive }}
                webinar={{ bad: objectWebinarNoPositive, good: objectWebinarPositive }}
                course={{ bad: objectCourseNoPositive, good: objectCoursePositive }}
              />
            </Grid.Item>
            <Grid.Item>
              <MyPie
                teacher={{ bad: objectTeacherNoPositive, good: objectTeacherPositive }}
                webinar={{ bad: objectWebinarNoPositive, good: objectWebinarPositive }}
                course={{ bad: objectCourseNoPositive, good: objectCoursePositive }}
              />
            </Grid.Item>
            <Grid.Item>
              <MyPolarArea
                teacher={{ bad: objectTeacherNoPositive, good: objectTeacherPositive }}
                webinar={{ bad: objectWebinarNoPositive, good: objectWebinarPositive }}
                course={{ bad: objectCourseNoPositive, good: objectCoursePositive }}
              />
            </Grid.Item>
          </Grid>

          <Card w={'100%'}>
            <Flex w={'100%'} direction={'column'} gap={'2rem'}>
              <Flex direction={'row'} justify={'between'} align={'center'} w={'100%'}>
                <Text fs="xl" fw="bold">
                  Отзывы
                </Text>
                <MyTable
                  data={modelResponses.map(item => ({
                    Тип: item.object === 0 ? 'Вебинар' : item.object === 1 ? 'Курс' : 'Преподаватель',
                    Отзыв: item.isPositive ? 'Положительный' : ' Негативный',
                    Релевантность: item.isRelevant ? 'Релевантный' : 'Нерелевантный',
                    'Вопрос 2': item.answers[0],
                    'Вопрос 3': item.answers[1],
                    'Вопрос 4': item.answers[2],
                    'Вопрос 5': item.answers[3],
                  }))}
                />
              </Flex>
              <Flex direction={'row'} justify={'between'} align={'center'} w={'100%'}>
                <Checkbox size="base" name="teacher" label="Преподаватель" />
                <Checkbox size="base" name="webinar" label="Вебинар" />
                <Checkbox size="base" name="course" label="Курс" />
                <Checkbox size="base" name="positive" label="Положительный" />
                <Checkbox size="base" name="noPositive" label="Негативный" />
                <Checkbox size="base" name="relevant" label="Релевантный" />
                <Checkbox size="base" name="noRelevant" label="Нерелевантный" />
              </Flex>
              <Flex w={'100%'} direction={'column'} gap={'0'}>
                {modelResponses.map((item, i) => (
                  <Flex
                    py={'0.5rem'}
                    bdt={1}
                    bdb={1}
                    bdts={'solid'}
                    bdbs={'solid'}
                    bdtc={() => ['base', 500]}
                    bdbc={() => ['base', 500]}
                    key={i}
                    direction={'column'}
                    justify={'center'}
                    w={'100%'}
                    gap={'0.5rem'}>
                    <Text>Про что отзыв: {item.object === 0 ? 'Про вебинар' : item.object === 1 ? 'Про курс' : 'Про преподавателя'}</Text>
                    <Text>Какой отзыв: {item.isPositive ? 'Положительный' : 'Негативный'}</Text>
                    <Text>Релевантность отзыва (смысловость): {item.isRelevant ? 'Релевантный' : 'Нерелевантный'}</Text>
                    {item.answers.map((item2, i2) => (
                      <Text key={'answer' + i2}>
                        Вопрос {i2 + 2}: {item2}
                      </Text>
                    ))}
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </Card>
        </Flex>
      </Flex>
    </Main>
  );
}
