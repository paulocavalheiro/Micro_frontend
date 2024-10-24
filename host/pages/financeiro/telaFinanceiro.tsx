import Layout from "../../components/PrivateLayout/Layout";
import dynamic from "next/dynamic";

export default function TelaFinanceiro() {
  const Page = dynamic(() => import("bime_financeiro/pages/listaFinanceiro"), {
    ssr: false,
    loading: () => <p>Carregando layout...</p>,
  });

  return (
    <Layout>
      <Page />
    </Layout>
  );
}
