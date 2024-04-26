import { Flex, Icon, Text } from '@prismane/core';
import { GraduationCap, Plus } from '@phosphor-icons/react';

type Props = {
  title: string;
};

export default function OffWebinar({ title }: Props) {
  return (
    <Flex
      bg={(theme) => ['base', theme.mode === 'dark' ? 700 : 300]}
      br={'0.5rem'}
      p={'1rem'}
      direction={'row'}
      justify={'start'}
      align={'start'}
      gap={'1rem'}>
      <Icon size="lg">
        <GraduationCap color="#ffffff" />
      </Icon>
      <Text fs="md" fw="bold">
        {title}
      </Text>
    </Flex>
  );
}
