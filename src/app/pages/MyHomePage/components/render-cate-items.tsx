import { SubMenuType } from 'app/components/Header/data/menu';
import styled from 'styled-components/macro';

export const renderCategoryItems = (items: SubMenuType[]) =>
  items.map((item, index) => (
    <A key={index}>
      <CateItem>
        <CateImg src={item.img} alt={item.desc} />
        <CateDesc>{item.desc}</CateDesc>
      </CateItem>
    </A>
  ));

const CateItem = styled.div`
  min-width: 166px;
  height: 100%;
  padding: 16px 12px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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

const A = styled.a``;
