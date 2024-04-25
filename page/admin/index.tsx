'use client';
import { Box, Card, Flex, Grid, Main, Text } from '@prismane/core';
import CardButtons from '@/component/buttons/cardButtons';
import { useState } from 'react';

export default function Admin() {
  const [data, setData] = useState<
    {
      name: string;
      id: string | null;
      time: Date;
    }[]
  >([]);

  return (
    <Main w={'100%'} mih={'110vh'} px={'10vw'} pb={'10vw'} pt={160} bg={(theme) => (theme.mode === 'dark' ? ['base', 900] : ['base', 100])}>
      <Flex w={'100%'} direction={'column'} gap={'64px'} justify={'start'} align={'start'}>
        <Text cl={() => ['primary', 400]} fs={'4xl'} ta={'center'} fw={'bold'} w={'100%'}>
          Анализатор обратной связи студентов
        </Text>
        <Card w={'100%'}>
          <Flex direction={'column'} gap={'32px'} justify={'start'} align={'start'}>
            <Text fs={'2xl'} fw={'bold'} cl={(theme) => (theme.mode === 'dark' ? ['base', 100] : ['base', 900])} w={'100%'} ta={'center'}>
              Студенты и их обращения
            </Text>
            <Grid w={'100%'} templateColumns={3} gap={12}>
              <Grid.Item>
                <CardButtons name={'Деев Леонид Русланович'} id={123456789} time={new Date()} />
              </Grid.Item>
              <Grid.Item>
                <CardButtons name={'Деев Леонид Русланович'} id={123456789} time={new Date()} />
              </Grid.Item>
              <Grid.Item>
                <CardButtons name={'Деев Леонид Русланович'} id={123456789} time={new Date()} />
              </Grid.Item>
              <Grid.Item>
                <CardButtons name={'Деев Леонид Русланович'} id={123456789} time={new Date()} />
              </Grid.Item>
              <Grid.Item>
                <CardButtons name={'Деев Леонид Русланович'} id={123456789} time={new Date()} />
              </Grid.Item>
              <Grid.Item>
                <CardButtons name={'Деев Леонид Русланович'} id={'123456789123456789123456789123456789123456789'} time={new Date()} />
              </Grid.Item>
              <Grid.Item>
                <CardButtons name={'Деев Леонид Русланович'} id={123456789} time={new Date()} />
              </Grid.Item>
              <Grid.Item>
                <CardButtons name={'Деев Леонид Русланович'} id={123456789} time={new Date()} />
              </Grid.Item>
              <Grid.Item>
                <CardButtons name={'Деев Леонид Русланович'} id={123456789} time={new Date()} />
              </Grid.Item>
              <Grid.Item>
                <CardButtons name={'Деев Леонид Русланович'} id={123456789} time={new Date()} />
              </Grid.Item>
            </Grid>
          </Flex>
        </Card>
      </Flex>
    </Main>
  );
}
