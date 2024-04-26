'use client';
import { Box, Button, Card, Center, Flex, Grid, Link, Main, Text } from '@prismane/core';
import CardButtons from '@/component/buttons/cardButtons';
import { useState } from 'react';
import MyAside from '@/component/myAside';
import Typewriter from 'typewriter-effect';
import AnalyticsPage from '@/app/analytics/page';
import ChoiseWebinar from '@/component/card/choiseWebinar';

export default function Analytics() {
  const [data, setData] = useState<
    {
      name: string;
      id: string | null;
      time: Date;
    }[]
  >([]);

  return (
    <Main p={0} py={0} px={0} w={'100vw'} mih={'100vh'} pl={260} bg={(theme) => (theme.mode === 'dark' ? ['base', 900] : ['base', 100])}>
      <Flex w={'100%'}>
        <MyAside>
          <></>
        </MyAside>
        <Flex w={'100%'} p={'5rem'} direction={'column'} gap={'16px'} justify={'start'} align={'center'} h={'100%'}>
          <Center w={'100%'} py={'5rem'}>
            <Text cl={() => ['primary', 400]} fs={'4xl'} ta={'center'} w={'75%'} fw={'bold'}>
              <Typewriter
                options={{
                  delay: 75,
                }}
                onInit={(typewriter) => {
                  typewriter.typeString('Анализатор обратной связи студентов').start();
                }}
              />
            </Text>
          </Center>
          <ChoiseWebinar />
        </Flex>
      </Flex>
    </Main>
  );
}
