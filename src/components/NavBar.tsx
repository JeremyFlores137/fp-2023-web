'use client';
import { FC, useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Card,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import home from '../assets/img/cortana_home.png';
import Link from 'next/link';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeSwitcher } from '../components/hook';
import { signOut, useSession } from 'next-auth/react';

interface NavBarProps {}

export const NavBar: FC<NavBarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useThemeSwitcher();
  const session = useSession();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <AppBar className='dark:bg-black'>
      <Toolbar variant='dense'>
        <Link href='/'>
          <Card>
            <Image
              src={home.src}
              width={80}
              height={80}
              alt='Foto de Cortana'
            />
            <Typography
              variant='h6'
              color='inherit'
              component='div'
              fontSize={12}
              fontFamily={'Roboto Serif'}
              textAlign={'center'}
            >
              Home
            </Typography>
          </Card>
        </Link>

        <Box flex={1} />

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Link
            href='/proyecto'
            className={`duration-75 dark:hover:text-stone-400`}
          >
            <Button color='inherit'>Proyecto</Button>
          </Link>
        </Box>

        <Box flex={1} />

        <IconButton
          className='hover:text-white dark:text-white dark:hover:text-stone-400'
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        >
          {mode === 'dark' ? <WbSunnyIcon /> : <DarkModeIcon />}
        </IconButton>

        {session.status === 'authenticated' && (
          <button
            className='text-black/60 hover:text-white dark:text-white dark:hover:text-stone-400 lg:hidden'
            onClick={() => signOut()}
          >
            Salir
          </button>
        )}

        <button
          className='ml-[0.62em] hidden flex-col items-center justify-center lg:flex'
          onClick={handleClick}
        >
          <span
            className={`h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out dark:bg-white ${
              isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'
            }`}
          ></span>
          <span
            className={`my-0.5 h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out dark:bg-white ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out dark:bg-white ${
              isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'
            }`}
          ></span>
        </button>

        {isOpen ? (
          <div
            className={`fixed left-1/2 top-1/2 z-30 flex min-w-[70vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-lg bg-black/75 py-32
        backdrop-blur-md dark:bg-white/40`}
          >
            <Link href='/' style={{ display: 'flex', alignItems: 'center' }}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderRadius: '5px',
                  marginBottom: '1em',
                }}
                onClick={handleClick}
              >
                <Image
                  src={home.src}
                  width={80}
                  height={80}
                  alt='Foto de Cortana'
                />
                <Typography
                  variant='caption'
                  color='inherit'
                  sx={{
                    fontFamily: 'Roboto Serif, serif',
                    fontWeight: 'bold',
                  }}
                >
                  Home
                </Typography>
              </Card>
            </Link>

            <Box className='flex flex-col items-center justify-center gap-2 dark:text-black'>
              <Link
                href='/proyecto'
                onClick={handleClick}
                className='rounded-lg from-slate-200 to-stone-900
                 ease-in-out hover:scale-105 hover:bg-gradient-to-tr dark:text-black'
              >
                <Button color='inherit' className='font-roboto text-lg'>
                  Proyecto
                </Button>
              </Link>
              {session.status === 'authenticated' && (
                <button
                  className='rounded-lg from-slate-200 to-stone-900
              p-2 font-roboto text-lg ease-in-out hover:scale-105 hover:bg-gradient-to-tr dark:text-black'
                  onClick={() => signOut()}
                >
                  SALIR
                </button>
              )}
            </Box>
          </div>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};
