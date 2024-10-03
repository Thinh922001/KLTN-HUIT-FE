import React, { useState } from 'react';
import styled from 'styled-components';

interface Item {
  name: string;
  desc: string[];
}

interface IData {
  name: string;
  values: Item[];
}

interface DataItem {
  data: IData;
}

export const BoxSpecif: React.FC<DataItem> = ({ data }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <HeaderWrapper>
      <Header onClick={() => setIsActive(e => !e)} isActive={isActive}>
        {data.name || ''}
      </Header>

      {isActive && (
        <SpecContent>
          {data.values.length > 0 &&
            data.values.map((item, index) => (
              <SpecsItems key={index}>
                <Key>{item.name}:</Key>
                <Values>
                  {item.desc.length &&
                    item.desc.map((e, index) => (
                      <ValuesItems key={index}>{e}</ValuesItems>
                    ))}
                </Values>
              </SpecsItems>
            ))}
        </SpecContent>
      )}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  margin-top: 10px;
`;

const Header = styled.button<{ isActive: boolean }>`
  width: 100%;
  padding: 20px 0 20px 20px;
  color: #000;
  background: #f2f4f7;
  line-height: 20px;
  font-weight: 600;
  font-size: 1.5rem;
  border-radius: 8px;
  text-align: left;
  cursor: pointer;

  position: relative;

  &::after {
    position: absolute;
    display: inline-block;
    content: '';
    width: 10px;
    height: 10px;
    right: 19px;
    top: 50%;
    transform: translate(0, -50%);
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    transition: rotate, 0.3s;

    ${({ isActive }) => (isActive ? ` rotate: 45deg;` : `rotate: -45deg;`)}
  }
`;

const SpecContent = styled.div``;

const SpecsItems = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  padding: 10px;
  border-bottom: 1px solid #eaecf0;
  font-size: 1.4rem;
`;

const Key = styled.div`
  display: block;
  overflow: hidden;
  line-height: 20px;
  font-weight: 600;
  color: #344054;
`;

const Values = styled.div`
  overflow: hidden;
  line-height: 20px;
  color: #344054;
  font-weight: 400;
`;

const ValuesItems = styled.p``;
