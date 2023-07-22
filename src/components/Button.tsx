import { FC, MouseEventHandler } from 'react';

interface ButtonProps {
  title: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<ButtonProps> = ({ title, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className='m-5 w-[150px] rounded-lg bg-gradient-to-r
  from-[#0b132b] via-[#1c2541] to-[#3a506b] p-5 text-white hover:from-black hover:via-black hover:to-black dark:text-white md:w-[105px]
      md:text-lg sm:m-1 sm:text-sm
  '
    >
      {title}
    </button>
  );
};
