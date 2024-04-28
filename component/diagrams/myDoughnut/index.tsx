import { Box, Card } from '@prismane/core';
import { Doughnut } from 'react-chartjs-2';

type Props = {
  teacher: {
    good: number;
    bad: number;
  };
  webinar: {
    good: number;
    bad: number;
  };
  course: {
    good: number;
    bad: number;
  };
};

export default function MyDoughnut({ teacher, course, webinar }: Props) {
  const data = {
    labels: ['Преподаватель Н', 'Преподаватель П', 'Вебинар Н', 'Вебинар П', 'Курс Н', 'Курс П'],
    datasets: [
      {
        data: [teacher.bad, teacher.good, webinar.bad, webinar.good, course.bad, course.good],
        backgroundColor: ['blue', 'orange', 'green', 'purple', 'gray', 'red'],
      },
    ],
  };

  return (
    <Card w={'100%'} bg={() => ['base', 100]}>
      <Doughnut data={data} />
    </Card>
  );
}
