import { Card, Flex, Grid, Text } from '@prismane/core';
import Webinar from '@/component/buttons/webinar';
import OffWebinar from '@/component/buttons/offWebinar';

export default function ChoiseWebinarStudent() {
  return (
    <Card w={'100%'}>
      <Flex direction={'column'} gap={'32px'} justify={'start'} align={'start'}>
        <Text fs={'2xl'} fw={'bold'} cl={(theme) => (theme.mode === 'dark' ? ['base', 100] : ['base', 900])} w={'100%'} ta={'center'}>
          Пройденные вебинары
        </Text>
        <Grid w={'100%'} templateColumns={4} gap={12}>
          <Grid.Item>
            <Webinar
              title={'Вебинар 1'}
              onPress={() => {
                alert('click');
              }}
            />
          </Grid.Item>
          <Grid.Item>
            <Webinar
              title={'Вебинар 1'}
              onPress={() => {
                alert('click');
              }}
            />
          </Grid.Item>
          <Grid.Item>
            <Webinar
              title={'Вебинар 1'}
              onPress={() => {
                alert('click');
              }}
            />
          </Grid.Item>
          <Grid.Item>
            <Webinar
              title={'Вебинар 1'}
              onPress={() => {
                alert('click');
              }}
            />
          </Grid.Item>
          <Grid.Item>
            <Webinar
              title={'Вебинар 1'}
              onPress={() => {
                alert('click');
              }}
            />
          </Grid.Item>
          <Grid.Item>
            <OffWebinar title={'Вебинар 2'} />
          </Grid.Item>
        </Grid>
      </Flex>
    </Card>
  );
}
