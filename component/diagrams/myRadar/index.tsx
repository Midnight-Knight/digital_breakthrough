import { Box, Card } from '@prismane/core';
import { Radar } from 'react-chartjs-2';

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

export default function MyRadar({ teacher, course, webinar }: Props) {
  const data = {
    labels: ['Преподаватель', 'Вебинар', 'Курс'],
    datasets: [
      {
        label: 'Плохая оценка',
        data: [teacher.bad, webinar.bad, course.bad],
        backgroundColor: 'rgba(255,99,132,0.4)', // Customize myBar color
      },
      {
        label: 'Положительная оценка',
        data: [teacher.good, webinar.good, course.good],
        backgroundColor: 'rgba(75,192,192,0.4)', // Customize myBar color
      },
      // Add more datasets as needed
    ],
  };

  return (
    <Card w={'100%'} bg={() => ['base', 100]}>
      <Radar data={data} />
    </Card>
  );
}
