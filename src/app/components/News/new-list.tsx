import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { data } from 'app/pages/MyHomePage/components/data/new';
import { LoadingIndicator } from '../LoadingIndicator';
import { SeeMore } from '../SeeMore';

interface Props {
  id: number;
}

export const NewList: React.FC<Props> = ({ id }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  const newData = data.find(e => e.id === id);

  const isHaveData = newData && newData.news.length;

  return isLoading ? (
    <CenteredWrapper>
      <LoadingIndicator />
    </CenteredWrapper>
  ) : (
    <NewListWrapper>
      <NewListInner>
        {isHaveData &&
          newData.news.map((e, index) => (
            <Item key={index} style={{ animationDelay: `${index * 0.2}s` }}>
              <A href="#!">
                <WrapperImg>
                  <ItemImg src={e.img} loading="lazy" />
                  <ItemDesc>{e.desc}</ItemDesc>
                </WrapperImg>
              </A>
            </Item>
          ))}
      </NewListInner>
      {isHaveData && <SeeMore text="Xem thêm bài tin" />}
    </NewListWrapper>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);  
  }
  to {
    opacity: 1;
    transform: translateY(0);  
  }
`;

const NewListWrapper = styled.div``;

const NewListInner = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  min-height: 200px;
`;

const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;

const Item = styled.article`
  min-width: 283px;
  height: auto;
  opacity: 0;
  animation: ${fadeIn} 0.7s ease-in-out forwards;
`;

const ItemDesc = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(16, 24, 40, 1);
  line-height: 29px;
  padding-top: 10px;
  font-weight: 500;
  font-size: 1.4rem;
  transition: color 0.3s;
`;

const A = styled.a`
  &:hover {
    ${ItemDesc} {
      color: #2f80ed;
    }
  }
`;

const ItemImg = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
`;

const WrapperImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
