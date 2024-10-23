import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const Page = dynamic(() => import("host/pages/login"), {
  ssr: false,
  loading: () => <p>Carregando login...</p>,
});

export default function Login() {
  return (
    <StyledContainer>
      <Page />
    </StyledContainer>
  );
}

const StyledContainer = styled.div``;
