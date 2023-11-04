import { cn } from '@/libs/utils';
import { FC } from 'react';

interface TagProps {
  text: string;
  active?: boolean;
}

const Tag: FC<TagProps> = ({ text, active }) => {
  return (
    <span
      className={cn(
        'py-1 px-2 rounded bg-gray-300',
        active && 'bg-primary text-blue-300'
      )}
    >
      {text}
    </span>
  );
};

export default Tag;

//este tag pertenece al footer 