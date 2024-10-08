import { useState } from 'react';
import styled from 'styled-components';
import { BoxSpecif } from './BoxSpecif';
import { SpecData } from './data';

export const Specifications = () => {
  const [componentActive, setComponentActive] = useState<string>('SPEC');

  const handleSetComponentActive = (name: string) => {
    setComponentActive(name);
  };

  return (
    <Wrapper>
      <Content>
        <BtnWrapper>
          <BtnSpec
            isActive={componentActive === 'SPEC'}
            onClick={() => handleSetComponentActive('SPEC')}
          >
            Thông số kỹ thuật
          </BtnSpec>
          <BtnSpec
            onClick={() => handleSetComponentActive('RATE')}
            isActive={componentActive === 'RATE'}
          >
            Bài viết đánh giá
          </BtnSpec>
        </BtnWrapper>

        <SpecsWrapper>
          {SpecData.length &&
            SpecData.map((e, index) => <BoxSpecif data={e} key={index} />)}
        </SpecsWrapper>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 12px;
`;

const Content = styled.div`
  width: 100%;
  padding: 15px;
`;

const BtnSpec = styled.button<{ isActive?: boolean }>`
  display: inline-block;

  padding: 10px 30px;
  margin: 0 15px 0 0;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.6rem;
  font-weight: 600;

  ${({ isActive }) =>
    isActive
      ? `
    border: 1px solid #bbddfd;
    background-color: #f1f8fe;
    color: #2a83e9;
   `
      : ` 
      border: 1px solid #e5e5e5;
      color: #3a3a3a;`}
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpecsWrapper = styled.div``;