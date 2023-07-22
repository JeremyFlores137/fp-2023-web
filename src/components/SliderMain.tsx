'use client';
import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
interface SliderMainProps {
  text: string;
  srcImg: string;
  alt: string;
  title: string;
}

export const SliderMain: FC<SliderMainProps> = ({
  text,
  srcImg,
  alt,
  title,
}) => {
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
      <div className='mr-5 font-roboto dark:text-white/90 md:m-0'>
        <h1 className="text-3xl font-bold mb-2 md:text-xl">{title}</h1>
        <p className='md:text-sm text-xl'>{text}</p>
      </div>
      <Image
        src={srcImg}
        width={250}
        height={250}
        alt={alt}
        className='rounded-2xl md:m-auto md:mt-5'
        priority
      />
    </motion.div>
  );
};
