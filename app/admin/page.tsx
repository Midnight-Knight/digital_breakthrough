'use client';
import { Box, Flex, Grid, Main, Text } from '@prismane/core';
import CardButtons from '@/component/buttons/cardButtons';

export default function Home() {
  return (
    <Main w={'100%'} mih={'110vh'} px={'10vw'} pb={'10vw'} pt={160} bg={(theme) => (theme.mode === 'dark' ? ['base', 900] : ['base', 100])}>
      <Flex w={'100%'} direction={'column'} gap={'64px'} justify={'start'} align={'start'}>
        <Text cl={() => ['primary', 700]} fs={'4xl'} ta={'center'} fw={'bold'}>
          Анализатор обратной связи студентов
        </Text>
        <Box w={'100%'} p={16} br={16} bg={(theme) => (theme.mode === 'dark' ? ['base', 700] : ['base', 300])}>
          <Flex direction={'column'} gap={'32px'} justify={'start'} align={'start'}>
            <Text fs={'2xl'} fw={'bold'} cl={(theme) => (theme.mode === 'dark' ? ['base', 100] : ['base', 900])}>
              Студенты
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
        </Box>
      </Flex>
    </Main>
  );
}
