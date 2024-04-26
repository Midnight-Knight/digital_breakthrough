import { Flex, Icon, Text } from '@prismane/core';
import { Plus } from '@phosphor-icons/react';

type Props = {
  onPress: () => void;
};

export default function CreateWebinar({ onPress }: Props) {
  return (
    <Flex
      bg={(theme) => ['base', theme.mode === 'dark' ? 700 : 300]}
      onClick={onPress}
      br={'0.5rem'}
      p={'1rem'}
      direction={'row'}
      justify={'start'}
      align={'start'}
      cs={'pointer'}
      gap={'1rem'}>
      <Icon size="lg">
        <Plus color="#ffffff" />
      </Icon>
      <Text fs="md" fw="bold">
        Создать новый вебинар
      </Text>
    </Flex>
  );
}
