import { Flex, Icon, Text } from '@prismane/core';
import { GraduationCap } from '@phosphor-icons/react';

type Props = {
  title: string;
  onPress: () => void;
};

export default function Webinar({ title, onPress }: Props) {
  return (
    <Flex
      bg={() => ['primary', 900]}
      onClick={onPress}
      br={'0.5rem'}
      p={'1rem'}
      direction={'row'}
      justify={'start'}
      align={'start'}
      cs={'pointer'}
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
