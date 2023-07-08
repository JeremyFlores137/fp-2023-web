import { NavBar, Footer } from '@/components';
import './globals.css';
import { Roboto } from 'next/font/google';
import AuthProvider from '../components/AuthProvider/AuthProvider';
import ProjectProvider from '@/components/ProjectProvider/ProjectProvider';
import SnackProvider from '@/components/SnackProvider/SnackProvider';

const roboto = Roboto({ subsets: ['latin'], weight: '500' });

export const metadata = {
  title: 'Cortana App',
  description: 'This is the layout of the page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`bg-[#edf2fb] dark:bg-black/90 ${roboto.className}`}>
        <AuthProvider>
          <SnackProvider>
            <ProjectProvider>
              <nav>
                <NavBar />
              </nav>
              {children}
              <Footer />
            </ProjectProvider>
          </SnackProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
