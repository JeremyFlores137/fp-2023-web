'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

interface TransitionProps {}

export const Transition: FC<TransitionProps> = () => {
  return (
    <>
      <motion.div
        className='fixed bottom-0 right-full top-0 z-30 h-screen w-screen bg-[#ba324f]'
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
      <motion.div
        className='fixed bottom-0 right-full top-0 z-20 h-screen w-screen bg-[#175676]'
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
      />
      <motion.div
        className='fixed bottom-0 right-full top-0 z-10 h-screen w-screen bg-[#4ba3c3]'
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
      />
    </>
  );
};
