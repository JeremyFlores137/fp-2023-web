'use client';
import { TextAnimation, Transition } from '@/components';
import { Button } from '@/components';
import { FC } from 'react';

interface ProjectPageProps {}

const ProjectPage: FC<ProjectPageProps> = () => {
  function handleClick(num: number) {
    alert('se hizo click al boton ' + num);
  }

  return (
    <section className='flex flex-col items-center justify-center'>
      <Transition />
      <TextAnimation
        text='Proyecto'
        className='!text-6x1 !my-5
          !mb-20 !text-center !normal-case dark:text-white/90 3xl:!ml-0 xl:!ml-0 xl:!text-6xl lg:!text-center
          lg:!text-5xl md:!mb-5 md:!text-4xl sm:!text-3xl
          '
      />
      <div className='w-full'>
        <iframe
          src='https://www.youtube.com/embed/sOnqjkJTMaA'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
          className='m-auto h-[80vh] w-[70vw] sm:h-[300px] sm:w-[95vw] lg:h-[500px] xl:w-[90vw]'
        ></iframe>
      </div>
      <div className='my-5 flex w-full flex-col items-center justify-center'>
        <div className='border border-solid border-black'>
          <Button title='Botón 1' handleClick={() => handleClick(1)} />
          <Button title='Botón 2' handleClick={() => handleClick(2)} />
          <Button title='Botón 3' handleClick={() => handleClick(3)} />
        </div>
        <div className='border border-solid border-black'>
          <Button title='Botón 4' handleClick={() => handleClick(4)} />
          <Button title='Botón 5' handleClick={() => handleClick(5)} />
        </div>
        <div className='border border-solid border-black'>
          <Button title='Botón 6' handleClick={() => handleClick(6)} />
          <Button title='Botón 7' handleClick={() => handleClick(7)} />
        </div>
        <div className='border border-solid border-black'>
          <Button title='Botón 8' handleClick={() => handleClick(8)} />
          <Button title='Botón 9' handleClick={() => handleClick(9)} />
        </div>
        <div className='border border-solid border-black'>
          <Button title='Botón 10' handleClick={() => handleClick(10)} />
          <Button title='Botón 11' handleClick={() => handleClick(11)} />
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
