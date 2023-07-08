import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login page',
  description: 'Pagina de login',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}