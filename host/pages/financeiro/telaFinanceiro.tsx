import Layout from "../../components/PrivateLayout/Layout";
import dynamic from "next/dynamic";

export default function TelaFinanceiro({ routePath }: any) {
  const Page = dynamic(
    () => import("bime_financeiro/pages/dashboards/listaFinanceiro"),
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
