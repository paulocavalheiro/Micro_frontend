import Layout from "../components/PrivateLayout/Layout";

type PrivateLayoutProps = {
  data?: JSX.Element;
};

const PrivateLayout = ({ data }: PrivateLayoutProps) => {
  return (
    <Layout>
      {/* Renderizando o valor passado como prop */}
      <>{data}</>
    </Layout>
  );
};

export default PrivateLayout;
