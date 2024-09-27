import styled from 'styled-components';
import { data } from './data/search';

export const CommonSearch = () => {
  return (
    <Wrapper>
      <Title>Mọi người cũng tìm kiếm</Title>
      <ItemWrapper>
        {data.length &&
          data.map((e, index) => (
            <Item key={index} href="#!">
              {e}
            </Item>
          ))}
      </ItemWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 15px;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 8px;
`;

const Title = styled.h3`
  font-size: 2.4rem;
  font-weight: bold;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: #1d2939;
  gap: 10px;
  margin-top: 20px;
`;

const Item = styled.a`
  transition: color 0.3s;
  display: inline-block;
  width: fit-content;
  background: #f2f4f7;
  border-radius: 16px;
  padding: 2px 8px;
  font-size: 1.4rem;
  font-weight: 500;
  &:hover {
    color: #288ad6;
  }
`;
