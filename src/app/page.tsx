'use client';
import Image from 'next/image';
import cortana from '../assets/img/cortana_main.png';
import camera from '../assets/img/camera.png';
import { TextAnimation, Transition } from '@/components';
import { useState } from 'react';
import { SvgComponentSend } from '@/components/svgComponents';
export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
 
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('api/chat', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      alert(error);
    }
    setIsLoading(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };
  return (
    <main className='mt-[95px] flex flex-col items-center'>
      <Transition />
      <TextAnimation
        text='¡Bienvenido al Proyecto Cortana UNI!'
        className='!text-6x1 !my-5
          !mb-20 !text-center !normal-case dark:text-white/90 3xl:!ml-0 xl:!ml-0 xl:!text-6xl lg:!text-center
          lg:!text-5xl md:!mb-5 md:!text-4xl sm:!text-3xl
          '
      />
      <div className='mx-5 flex max-w-[2000px] justify-center rounded-2xl border border-dotted border-blue-900 p-5 dark:border-white md:flex-col'>
        <p className='mr-5 font-roboto dark:text-white/90 md:mr-0 md:text-sm'>
          El proyecto se centra en el desarrollo de un sistema web para
          controlar un brazo robótico conectado a una cámara. El objetivo
          principal es implementar algoritmos de reconocimiento facial basados
          en redes neuronales convolucionales (CNN) para identificar rostros
          cubiertos y prevenir robos o posibles intentos de robo. El sistema
          permitirá a los usuarios controlar el brazo robótico a través de una
          interfaz web desde cualquier dispositivo con conexión a Internet.
          Desde esta interfaz, podrán controlar los movimientos del brazo
          robótico y visualizar en tiempo real las imágenes capturadas por la
          cámara.
        </p>
        <Image
          src={camera.src}
          width={400}
          height={400}
          alt='camera'
          className='rounded-2xl md:m-auto md:mt-5'
        />
      </div>
      <div className='flex w-full flex-col items-center justify-center py-5 '>
        <Image
          src={cortana.src}
          width={500}
          height={500}
          alt='Foto de Cortana'
          className='mt-28 cursor-pointer rounded-[50%] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 duration-700 ease-in-out hover:shadow-3xl dark:from-black dark:via-black dark:to-black dark:hover:shadow-white-xl sm:w-[80vw]'
        />
        <div className='my-10 mb-28 w-[50vw] rounded-xl bg-slate-200 text-center dark:bg-black/40 3xl:p-8 2xl:p-5 sm:w-[80vw]'>
          <TextAnimation
            text='Hola, mi nombre es Cortana. Estoy aquí para responder a tus preguntas sobre este emocionante proyecto. ¡Dispara tus preguntas!'
            className='!text-center !normal-case text-black/90 dark:text-white/90 3xl:!text-5xl 2xl:!text-3xl lg:!text-2xl md:!text-xl'
          />
        </div>
        <div
          className='flex w-[60vw] flex-col items-center rounded-2xl bg-gradient-to-r from-[#0582ca] via-[#006494]
         to-[#003554] py-10 dark:from-[#000000] dark:via-[#2f4550] dark:to-[#586f7c] md:w-[95vw]'
        >
          <div
            className='relative m-0 h-[13vh] w-2/3 rounded-xl border border-white bg-[#051923] p-0 dark:bg-[#eef0f2] 
          sm:w-[85%]'
          >
            <textarea
              style={{ fontFamily: 'Dancing Script, cursive' }}
              placeholder='Introduzca su mensaje'
              className='relative top-[50%] m-0 translate-y-[-50%] resize-none whitespace-nowrap rounded-xl border-none
            bg-[#051923] p-0 pl-5 text-white placeholder-gray-300 outline-none dark:bg-[#eef0f2] dark:text-black/90 
          dark:placeholder-black  3xl:h-[4rem] 3xl:w-[96%] 3xl:text-[2rem] 2xl:h-[3rem] 2xl:w-[w-90%] 2xl:text-[1.5rem] xl:h-[2rem] xl:w-[88%] xl:text-[1rem] md:w-[85%]
        '
              value={prompt}
              onChange={handleChange}
            />
            <button
              onClick={() => handleSubmit()}
              disabled={isLoading || !prompt}
              className='absolute right-2 top-[50%] translate-y-[-50%] disabled:pointer-events-none disabled:opacity-50'
            >
              <SvgComponentSend
                className='fill-gray-300 duration-500 ease-in-out hover:scale-105
        hover:cursor-pointer hover:fill-white disabled:pointer-events-none dark:fill-black 3xl:text-3xl xs:text-xl'
                isLoading={isLoading || !prompt}
              />
            </button>
          </div>
          <div
            className='relative mt-5 h-[50vh] w-2/3 rounded-xl border border-white bg-[#051923] p-4 text-white 
            dark:bg-[#eef0f2] dark:text-black 3xl:text-2xl md:text-lg sm:w-[85%]
          '
          >
            {isLoading ? (
              'Loading...'
            ) : (
              <>
                Respuesta aquí:
                <TextAnimation
                  text={result}
                  className='mt-2 !text-left !normal-case 3xl:!text-xl lg:!text-lg md:!text-lg sm:!text-sm'
                />
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
