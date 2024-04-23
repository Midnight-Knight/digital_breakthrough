import { Button, Link } from '@prismane/core';

type Props = {
  primary: boolean;
  text: string;
  link: string;
};

export default function ButtonsLinks({ primary, text, link }: Props) {
  return (
    <Button size={'md'} variant={primary ? 'primary' : 'tertiary'}>
      <Link
        cl={!primary ? () => ['primary', 300] : (theme) => (theme.mode === 'dark' ? ['base', 100] : ['base', 900])}
        href={link}
        underline="none">
        {text}
      </Link>
    </Button>
  );
}
