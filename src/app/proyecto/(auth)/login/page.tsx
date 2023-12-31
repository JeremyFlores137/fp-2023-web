'use client';
import Link from 'next/link';
import React from 'react';
import { FC } from 'react';
import Image from 'next/image';
import cortana from '@/assets/img/cortana_home.png';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { useSnackbar } from 'notistack';

interface AuthPageProps {}

const AuthPage: FC<AuthPageProps> = () => {
  const { enqueueSnackbar } = useSnackbar();
  const session = useSession();
  const router = useRouter();
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    //rememberMe: false,
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }
  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const { email, password } = formData;
    if (email && password) {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        enqueueSnackbar(res?.error, {
          variant: 'error',
          autoHideDuration: 3000,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        });
      }
    }
  };

  if (session.status === 'loading') {
    return (
      <div
        role='status'
        className={`flex h-[100vh] w-[100%] items-center justify-center`}
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
  if (session.status === 'authenticated') {
    setTimeout(() => {
      router?.push('/proyecto');
    }, 0);
    return null;
  }
  return (
    <section className='flex h-[100vh] w-full items-center justify-center'>
      <div className='mx-auto flex flex-col items-center justify-center px-6 py-8 lg:py-0 md:h-screen'>
        <Link
          href='/'
          className='mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white'
        >
          <Image
            className='mr-2 h-8 w-8 rounded-lg'
            src={cortana.src}
            alt='logo'
            height={300}
            width={300}
            priority
          />
          Cortana
        </Link>
        <div className='w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 xl:p-0 md:mt-0 sm:max-w-md'>
          <div className='space-y-4 p-6 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl'>
              Iniciar Sesión en Cortana
            </h1>
            <form
              className='space-y-4 md:space-y-6'
              action='#'
              onSubmit={onSubmit}
            >
              <div>
                <label
                  htmlFor='email'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                >
                  Ingrese el correo
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm'
                  placeholder='name@company.com'
                  onChange={handleChange}
                  value={formData.email}
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                >
                  Contraseña
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='••••••••'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm'
                  value={formData.password}
                  onChange={handleChange}
                  required={true}
                />
              </div>
              {/*<div className='flex items-center justify-between'>
                <div className='flex items-start'>
                  <div className='flex h-5 items-center'>
                    <input
                      id='rememberMe'
                      aria-describedby='remember'
                      type='checkbox'
                      name='rememberMe'
                      className='focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600'
                      onChange={handleChange}
                      checked={formData.rememberMe}
                      required={false}
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label
                      htmlFor='remember'
                      className='text-gray-500 dark:text-gray-300'
                    >
                      Recuérdame
                    </label>
                  </div>
                </div>
                <Link
                  href='#'
                  className='ml-3 text-right text-sm font-medium text-primary-600 hover:underline dark:text-primary-500'
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>*/}
              <button
                type='submit'
                className='w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:text-white dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                Iniciar Sesión
              </button>
              <button
                onClick={() => {
                  signIn('github');
                }}
                className='w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:text-white dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                Inicia Sesión con Github
              </button>
              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                ¿No tienes cuenta creada?{' '}
                <Link
                  href='/proyecto/register'
                  className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                >
                  Registrarse
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
