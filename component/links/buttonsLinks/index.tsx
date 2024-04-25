import { Button, Link } from '@prismane/core';

type Props = {
  primary: boolean;
  text: string;
  link: string;
};

export default function ButtonsLinks({ primary, text, link }: Props) {
  return (
    <Link href={link} underline="none">
      <Button w={'100%'} size={'md'} variant={primary ? 'primary' : 'tertiary'}>
        {text}
      </Button>
    </Link>
  );
}
