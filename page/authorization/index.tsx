'use client';
import { Button, Center, Flex, Link, Main, Text } from '@prismane/core';
import MyAside from '@/component/myAside';
import Typewriter from 'typewriter-effect';
import * as VKID from '@vkid/sdk';
import { appVk } from '@/consts/vk';
import { useEffect, useState } from 'react';

export default function Authorization() {
  const [floatingOneTap, setfloatingOneTap] = useState<VKID.FloatingOneTap | null>(null);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    VKID.Config.set({
      app: appVk,
      redirectUrl: 'https://digital-breakthrough.vercel.app/authorization/chat',
      state: 'dj29fnsadjsd82...',
    });
    setfloatingOneTap(new VKID.FloatingOneTap());
    setContainer(document.getElementById('VkIdSdkOneTap'));
  }, []);

  useEffect(() => {
    if (container && floatingOneTap) {
      floatingOneTap.render({ appName: 'digital-breakthrough', scheme: VKID.Scheme.LIGHT, lang: VKID.Languages.RUS });
    }
  }, [container]);

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
                  loop: false,
                }}
                onInit={(typewriter) => {
                  typewriter.typeString('Авторизация').start();
                }}
              />
            </Text>
          </Center>
          <Flex w={'100%'} justify={'center'} align={'center'} h={'35%'}>
            <div id="VkIdSdkFloatingOneTap"></div>
          </Flex>
        </Flex>
      </Flex>
    </Main>
  );
}
