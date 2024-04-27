import { Avatar, Flex, Text } from '@prismane/core';
import Typewriter from 'typewriter-effect';

type Props = {
  text: string;
  writer: boolean;
};

export default function ChatBotMessage({ text, writer }: Props) {
  return (
    <Flex w={'100%'} direction={'row'} justify={'start'} align={'start'} gap={'0.5rem'}>
      <Avatar size="xs" color={'emerald'}>
        CB
      </Avatar>
      <Flex w={'100%'} direction={'column'} justify={'start'} align={'start'} gap={'0.5rem'}>
        <Text w={'100%'} fw={'bold'}>
          Chat-bot
        </Text>
        {writer ? (
          <Text w={'100%'}>
            <Typewriter
              options={{
                delay: 25,
                loop: false,
              }}
              onInit={(typewriter) => {
                typewriter.typeString(text).start();
              }}
            />
          </Text>
        ) : (
          <Text w={'100%'}>{text}</Text>
        )}
      </Flex>
    </Flex>
  );
}
