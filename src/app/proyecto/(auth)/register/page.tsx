'use client';
import Link from 'next/link';
import React from 'react';
import { FC } from 'react';
import Image from 'next/image';
import cortana from '@/assets/img/cortana_home.png';
import { useRouter } from 'next/navigation';
import { useSnackbar } from 'notistack';

interface AuthPageProps {}

const AuthPage: FC<AuthPageProps> = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [error, setError] = React.useState(null);

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
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
    const { email, password, name } = formData;
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const data = await res.json();
      enqueueSnackbar(data?.message, {
        variant: 'success',
        autoHideDuration: 3000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      });
      res.status === 201 &&
        router.push('/proyecto/login?success=Account has been created');
    } catch (err: any) {
      setError(err);
      console.log(err);
    }
  };
  return (
    <section className='flex h-[100vh] w-full items-center justify-center'>
      <div
        className='mx-auto flex w-[380px] flex-col items-center justify-center px-6 py-8 lg:py-0 md:h-screen
      sm:w-[380px]
      '
      >
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
          />
          Cortana
        </Link>
        <div className='w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 xl:p-0 md:mt-0 sm:max-w-md'>
          <div className='space-y-4 p-6 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl'>
              Regístrese en Cortana
            </h1>
            <form
              className='space-y-4 md:space-y-6'
              action='#'
              onSubmit={onSubmit}
            >
              <div>
                <label
                  htmlFor='name'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                >
                  Ingrese su nombre
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm'
                  placeholder='Juan'
                  onChange={handleChange}
                  value={formData.name}
                  required={true}
                />
              </div>
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
              <button
                type='submit'
                className='w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:text-white dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                Crear Cuenta
              </button>
              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                ¿Tienes una cuenta creada?{' '}
                <Link
                  href='/proyecto/login'
                  className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                >
                  Iniciar Sesión
                </Link>
              </p>
              {error && 'Something went wrong!'}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
