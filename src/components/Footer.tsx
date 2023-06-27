'use client';
import { FC } from 'react';
import { SvgComponentGit, SvgComponentLin, SvgComponentTwi } from './svgComponents';
import { motion } from 'framer-motion';

interface PageProps {}

export const Footer: FC<PageProps> = () => {
  return (
    <footer className='w-full border-t-2 border-solid bg-[#edf2fb] border-black dark:border-white text-lg font-medium sm:text-base
     dark:bg-black/90'>
      <div className='flex items-center justify-between px-10 py-8 lg:flex-col lg:py-6'>
        <span className='dark:text-white/80'>
          {new Date().getFullYear()} &copy; Copyright - Proyecto Cortana FIEE
        </span>
        <div className='flex items-center justify-between gap-10 lg:py-4'>
          <motion.a
            href='https://github.com/JeremyFlores137/fp-2023-web'
            target={'_blank'}
            whileHover={{ y: -2 }}
            className='w-6'
            whileTap={{ scale: 0.9 }}
          >
            <SvgComponentGit className={`dark:fill-white`} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};
