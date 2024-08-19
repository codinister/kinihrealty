'use client';

import { useRouter } from 'next/navigation';

type READMORE = {
  url: string;
  children: string;
} & Omit<React.ComponentProps<'button'>, 'children'>;

const Readmore = ({ children, url, ...rest }: READMORE) => {
  const router = useRouter();

  const handleClick = () => router.push(url);

  return (
    <button className="readmore" onClick={handleClick} {...rest}>
      {children}
    </button>
  );
};

export default Readmore;
