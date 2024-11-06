// pages/index.tsx
import styled from 'styled-components';

// Styled Componentの定義
const Title = styled.h1`
  color: #0070f3;
  font-size: 2.5rem;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export default function Home() {
  return (
    <Container>
      <Title>Welcome to Next.js with Styled Components!</Title>
    </Container>
  );
}
