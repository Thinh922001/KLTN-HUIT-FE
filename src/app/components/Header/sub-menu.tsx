import styled from 'styled-components/macro';
import { SubMenuType } from './data/menu';
import React from 'react';

interface SubMenuProps {
  data: SubMenuType[];
  title: string;
}

export const SubMenu: React.FC<SubMenuProps> = ({ data = [], title = '' }) => {
  return (
    <SubMenuInner>
      <SubMenuTitle>{title}</SubMenuTitle>
      <SubMenuItems>
        {data?.length &&
          data.map((e, index) => {
            return (
              <A href="#!" key={index}>
                <SubMenuItem>
                  <ItemImg src={e.img} alt={e.desc} loading="lazy" />
                  <ItemDesc>{e.desc}</ItemDesc>
                </SubMenuItem>
              </A>
            );
          })}
      </SubMenuItems>
    </SubMenuInner>
  );
};

const SubMenuInner = styled.div`
  width: 100%;
  height: 100%;
  text-align: left;
  padding: 10px;
`;

const SubMenuItems = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 18px;
`;

const SubMenuItem = styled.div`
  width: 70px;
  height: 101px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ItemImg = styled.img`
  width: 43px;
  height: 43px;
  object-fit: contain;
`;

const ItemDesc = styled.p`
  text-align: center;
`;

const A = styled.a``;

const SubMenuTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 20px;
  margin-bottom: 10px;
  white-space: nowrap;
`;
