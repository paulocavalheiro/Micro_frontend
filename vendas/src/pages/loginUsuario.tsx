import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
 
const Page = dynamic(() => import('host/pages/login'), {
  ssr: false,
  loading: () => <p>Carregando dashboard...</p>,
});

export default function LoginUsuario() {
  return (
    <StyledContainer>
      <Page />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  background-color: #d4d4d4;
  padding: 20px;
  height: 100vh;
`;

