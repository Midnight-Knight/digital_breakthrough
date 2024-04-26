'use client';
import { Button, Center, Flex, Link, Main, Text } from '@prismane/core';
import MyAside from '@/component/myAside';
import Typewriter from 'typewriter-effect';
import AuthorizationBlock from '@/component/card/authorizationBlock';

export default function Authorization() {
  return (
    <Main p={0} py={0} px={0} w={'100vw'} mih={'100vh'} pl={260} bg={(theme) => (theme.mode === 'dark' ? ['base', 900] : ['base', 100])}>
      <Flex w={'100%'}>
        <MyAside>
          <></>
        </MyAside>
        <Flex w={'100%'} p={'5rem'} direction={'column'} gap={'16px'} justify={'start'} align={'center'}>
          <Center w={'100%'} py={'5rem'}>
            <Text cl={() => ['primary', 400]} fs={'4xl'} ta={'center'} w={'75%'} fw={'bold'}>
              <Typewriter
                options={{
                  delay: 75,
                  loop: false,
                }}
                onInit={(typewriter) => {
                  typewriter.typeString('Авторизация').start();
                }}
              />
            </Text>
          </Center>
          <Flex w={'100%'} justify={'center'} align={'center'}>
            <AuthorizationBlock />
          </Flex>
        </Flex>
      </Flex>
    </Main>
  );
}
