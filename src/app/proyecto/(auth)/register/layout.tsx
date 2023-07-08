import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register page',
  description: 'Pagina de registro',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}