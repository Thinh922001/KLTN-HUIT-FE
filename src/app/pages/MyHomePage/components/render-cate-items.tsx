import { SubMenuType } from 'app/components/Header/data/menu';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components/macro';
import { ICate } from '../slice/type';

export const renderCategoryItems = (items: ICate[]) =>
  items.map((item, index) => (
    <A key={item.id} to={`/danh-muc/${item.id}`}>
      <CateItem index={index}>
        <CateImg src={item.img} alt={item.name} loading="lazy" />
        <CateDesc>{item.name}</CateDesc>
      </CateItem>
    </A>
  ));

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CateItem = styled.div<{ index: number }>`
  min-width: 166px;
  height: 100%;
  padding: 16px 12px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: ${fadeIn} 0.5s ease-in-out;
  animation-delay: ${({ index }) => index * 0.1}s;
  animation-fill-mode: both;

  &:hover {
    background-color: #eaecf0;
  }
`;

const CateImg = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
`;

const CateDesc = styled.span`
  margin-top: 2px;
  text-align: center;
`;

const A = styled(Link)``;
