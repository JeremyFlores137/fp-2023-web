import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pagina Cortana',
  description: 'Dentro de esta página se encuentra nuestro proyecto',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className='mt-[95px]'>{children}</main>;
}
