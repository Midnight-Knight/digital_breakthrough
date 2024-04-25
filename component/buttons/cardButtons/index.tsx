import { Avatar, Button, Card, Flex, Text } from '@prismane/core';
import Style from './cardButtons.module.scss';

type Props = {
  name: string;
  id: string | number;
  time: Date;
};

export default function CardButtons({ name, id, time }: Props) {
  const date = String(time.getMinutes());

  return (
    <Card
      onClick={() => {
        alert('click');
      }}
      cs={'pointer'}
      w={'100%'}
      h={'100%'}>
      <Flex direction={'row'} justify={'start'} align={'start'} gap={24}>
        <Avatar />
        <Flex direction={'column'} justify={'start'} align={'start'} gap={12} w={'100%'}>
          <Text cl={(theme) => (theme.mode === 'dark' ? ['base', 100] : ['base', 900])} fs={'lg'} fw={'bold'} w={'100%'} ta={'left'}>
            {name}
          </Text>
          <Text
            className={Style.CardButtons}
            cl={(theme) => (theme.mode === 'dark' ? ['base', 400] : ['base', 600])}
            fs={'lg'}
            fw={'normal'}
            w={'100%'}
            h={'auto'}
            ta={'left'}>
            ID: {id}
          </Text>
          <Text cl={() => ['primary', 500]} fs={'sm'} fw={'normal'} w={'100%'} h={'auto'} ta={'left'}>
            Дата и время обращения: {date}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
}
