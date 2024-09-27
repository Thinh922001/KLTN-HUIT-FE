import { News } from 'app/components/News';
import styled from 'styled-components';

export const HomeNews = () => {
  return (
    <HomeNewsWrapper>
      <Title>Bài tin</Title>
      <News />
    </HomeNewsWrapper>
  );
};

const HomeNewsWrapper = styled.section`
  width: 100%;
  padding: 20px 15px;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 8px;
`;

const Title = styled.h3`
  color: #1d2939;
  font-size: 2.4rem;
  line-height: 32px;
  font-weight: 700;
  margin: 0 0 20px;
  padding: 0;
`;
