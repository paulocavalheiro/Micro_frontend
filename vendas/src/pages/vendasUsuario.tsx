import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
 
const Page = dynamic(() => import('financas/pages/dashboard'), {
  ssr: false,
  loading: () => <p>Carregando dashboard...</p>,
});

export default function MyPage() {
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

