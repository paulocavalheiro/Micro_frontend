import Layout from "../../components/PrivateLayout/Layout";
import dynamic from "next/dynamic";

export default function TelaVendas() {
  const Page = dynamic(
    () => import("bime_vendas/pages/dashboards/listaVendas"),
    {
      ssr: false,
      loading: () => <p>Carregando layout...</p>,
    }
  );

  return (
    <Layout>
      <Page />
    </Layout>
  );
}
