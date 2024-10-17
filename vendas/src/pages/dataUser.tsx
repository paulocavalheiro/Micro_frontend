import dynamic from 'next/dynamic';
 
const Page = dynamic(() => import('financas/pages/dashboard'), {
  ssr: false,
  loading: () => <p>Carregando dashboard...</p>,
});

export default Page