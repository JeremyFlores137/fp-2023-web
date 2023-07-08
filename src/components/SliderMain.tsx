'use client';
import { FC, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
interface SliderMainProps {
  text: string;
  srcImg: string;
  alt: string;
}

export const SliderMain: FC<SliderMainProps> = ({ text, srcImg, alt }) => {
  /*const controls = useAnimationControls();
  useEffect(() => {

    controls.start({
      opacity: 1,
      transition: { duration: 2, ease: 'easeOut' },
    });
    console.log('changed');
  }, [text]);*/

  return (
    <motion.div
      className={`flex justify-center p-2 md:flex-col`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      key={srcImg}
    >
      <p className='mr-5 font-roboto dark:text-white/90 md:m-0 md:text-sm'>
        {text}
      </p>
      <Image
        src={srcImg}
        width={400}
        height={400}
        alt={alt}
        className='rounded-2xl md:m-auto md:mt-5'
        priority
      />
    </motion.div>
  );
};
