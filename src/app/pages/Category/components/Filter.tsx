import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FilterImg from './assets/filter.png';
import { FilterBy } from './ButtonBrand';
import { SortByLabel } from './SortBy';
import { IBrand } from 'types/Card';
import { useProductCateSlice } from '../slice';
import { useSelector } from 'react-redux';
import { selectBrand } from '../slice/selector';

export const Filter = () => {
  useProductCateSlice();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const FilterData: IBrand[] = useSelector(selectBrand);

  return (
    <Wrapper className={isSticky ? 'sticky' : ''}>
      <Content isSticky={isSticky}>
        <Brand>
          <BtnFilterAll>
            <Img src={FilterImg} />
            Lọc
          </BtnFilterAll>
          {FilterData.length > 0 &&
            FilterData.map(e => (
              <FilterBy key={e.id} id={e.id} text={e.name} />
            ))}
        </Brand>
        <SortBy>
          <SortByLabel />
        </SortBy>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 1);
  transition: position 0.3s ease-in-out;

  &.sticky {
    position: fixed;
    top: 62px;
    left: 0;
    right: 0;
    z-index: 1;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    animation: slideDown 0.5s ease forwards;
  }

  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Content = styled.div<{ isSticky: boolean }>`
  ${({ isSticky }) => {
    if (isSticky) {
      return `  max-width: 1200px; 
               margin: 0 auto; 
              width: 100%; 
                 padding: 10px 0 20px 0`;
    }
  }}
`;

const Brand = styled.div`
  display: flex;
  gap: 10px;
`;

const SortBy = styled.div``;

const BtnFilterAll = styled.button`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  padding: 8px 12px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`;

const Span = styled.div``;
