'use client';
import { Box, Button, Card, Center, Flex, Grid, Link, Main, Text } from '@prismane/core';
import CardButtons from '@/component/buttons/cardButtons';
import { useState } from 'react';
import MyAside from '@/component/myAside';
import Typewriter from 'typewriter-effect';
import AnalyticsPage from '@/app/analytics/page';

export default function Analytics() {
  const [data, setData] = useState<
    {
      name: string;
      id: string | null;
      time: Date;
    }[]
  >([]);

  return (
    <Main p={0} py={0} px={0} w={'100vw'} h={'100vh'} bg={(theme) => (theme.mode === 'dark' ? ['base', 900] : ['base', 100])}>
      <Flex w={'100%'}>
        <MyAside>
          <></>
        </MyAside>
        <Flex w={'100%'} p={'5rem'} direction={'column'} gap={'16px'} justify={'start'} align={'center'} h={'100%'}>
          <Center w={'100%'} h={'65%'}>
            <Text cl={() => ['primary', 400]} fs={'4xl'} ta={'center'} w={'75%'} fw={'bold'}>
              <Typewriter
                options={{
                  delay: 75,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Анализатор обратной связи студентов')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('Выберите определённую категорию в меню слева или спуститесь вниз')
                    .pauseFor(10000)
                    .start();
                }}
              />
            </Text>
          </Center>
        </Flex>
      </Flex>
    </Main>
  );
}

//<Card w={'100%'}>
//             <Flex direction={'column'} gap={'32px'} justify={'start'} align={'start'}>
//               <Text fs={'2xl'} fw={'bold'} cl={(theme) => (theme.mode === 'dark' ? ['base', 100] : ['base', 900])} w={'100%'} ta={'center'}>
//                 Студенты и их обращения
//               </Text>
//               <Grid w={'100%'} templateColumns={3} gap={12}>
//                 <Grid.Item>
//                   <CardButtons name={'Деев Леонид Русланович'} id={123456789} time={new Date()} />
//                 </Grid.Item>
//                 <Grid.Item>
//                   <CardButtons name={'Деев Леонид Русланович'} id={123456789} time={new Date()} />
//                 </Grid.Item>
//                 <Grid.Item>
//                   <CardButtons name={'Деев Леонид Русланович'} id={123456789} time={new Date()} />
//                 </Grid.Item>
//                 <Grid.Item>
//                   <CardButtons name={'Деев Леонид Русланович'} id={123456789} time={new Date()} />
//                 </Grid.Item>
//                 <Grid.Item>
//                   <CardButtons name={'Деев Леонид Русланович'} id={123456789} time={new Date()} />
//                 </Grid.Item>
//                 <Grid.Item>
//                   <CardButtons name={'Деев Леонид Русланович'} id={'123456789123456789123456789123456789123456789'} time={new Date()} />
//                 </Grid.Item>
//                 <Grid.Item>
//                   <CardButtons name={'Деев Леонид Русланович'} id={123456789} time={new Date()} />
//                 </Grid.Item>
//                 <Grid.Item>
//                   <CardButtons name={'Деев Леонид Русланович'} id={123456789} time={new Date()} />
//                 </Grid.Item>
//                 <Grid.Item>
//                   <CardButtons name={'Деев Леонид Русланович'} id={123456789} time={new Date()} />
//                 </Grid.Item>
//                 <Grid.Item>
//                   <CardButtons name={'Деев Леонид Русланович'} id={123456789} time={new Date()} />
//                 </Grid.Item>
//               </Grid>
//             </Flex>
//           </Card>
