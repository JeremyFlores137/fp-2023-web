'use client';
import { TextAnimation, Transition } from '@/components';
import { Button } from '@/components';
import { FC } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import robotin from '@/assets/img/robotin_proyecto.png';
import Image from 'next/image';
interface ProjectPageProps {}

const ProjectPage: FC<ProjectPageProps> = () => {
  const session = useSession();
  const router = useRouter();

  function handleClick(num: number) {
    alert('se hizo click al boton ' + num);
  }
  if (session.status === 'loading') {
    return (
      <div
        role='status'
        className='flex h-[100vh] w-[100%] items-center justify-center'
      >
        <svg
          aria-hidden='true'
          className='mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600'
          viewBox='0 0 100 101'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
            fill='currentColor'
          />
          <path
            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
            fill='currentFill'
          />
        </svg>
        <span className='sr-only'>Loading...</span>
      </div>
    );
  }

  if (session.status === 'unauthenticated') {
    setTimeout(() => {
      router?.push('/proyecto/login');
    }, 0);
    return null;
  }
  if (session.status === 'authenticated') {
    return (
      <section className='relative flex flex-col items-center justify-center'>
        <Transition />
        <TextAnimation
          text='Proyecto'
          className='!text-6x1 !my-5
          !mb-20 !text-center !normal-case dark:text-white/90 3xl:!ml-0 xl:!ml-0 xl:!text-6xl lg:!text-center
          lg:!text-5xl md:!mb-5 md:!text-4xl sm:!text-3xl
          '
        />
        <div
          className='absolute right-2 top-8 flex items-center justify-center gap-1 rounded-lg border border-dashed border-blue-800
        p-2 dark:border-yellow-500 dark:text-white md:static md:mb-5
        '
        >
          <p>Bienvenido </p>
          <span
            className='rounded-lg bg-teal-300 px-2 py-1 text-blue-600 dark:bg-purple-200 dark:text-blue-950
          '
          >
            {session.data.user?.name}
          </span>
        </div>
        <div className='w-full'>
          <iframe
            src='https://www.youtube.com/embed/sOnqjkJTMaA'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            className='m-auto h-[80vh] w-[70vw] xl:w-[90vw] lg:h-[500px] sm:h-[300px] sm:w-[100vw]'
          ></iframe>
        </div>
        <div className='mt-5 flex w-full items-start justify-between md:flex-col'>
          <div className='w-full md:m-auto md:w-[90%]'>
            <Image
              src={robotin.src}
              alt='foto de robotín'
              width={700}
              height={700}
            />
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
        </div>
      </section>
    );
  }
};

export default ProjectPage;
