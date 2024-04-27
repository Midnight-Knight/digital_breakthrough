import { Avatar, Flex, Text } from '@prismane/core';
import Typewriter from 'typewriter-effect';

type Props = {
  text: string;
};

export default function MeMessage({ text }: Props) {
  return (
    <Flex w={'100%'} direction={'row'} justify={'start'} align={'start'} gap={'0.5rem'}>
      <Avatar size="xs" />
      <Flex w={'100%'} direction={'column'} justify={'start'} align={'start'} gap={'0.5rem'}>
        <Text w={'100%'} fw={'bold'}>
          Вы
        </Text>
        <Text w={'100%'}>{text}</Text>
      </Flex>
    </Flex>
  );
}
