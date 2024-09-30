import React from 'react';
import styled from 'styled-components';

interface Props {
  isActive: boolean;
}

export const ExpandContent: React.FC<Props> = ({ isActive }) => {
  return (
    <Wrapper isActive={isActive}>
      <Scenario>Chính sách Online giá rẻ quá</Scenario>
      <Ul>
        <NoteScenario>Giao hàng nhanh chóng (tuỳ khu vực)</NoteScenario>
        <NoteScenario>
          Mỗi số điện thoại chỉ mua 3 sản phẩm trong 1 tháng
        </NoteScenario>
      </Ul>
    </Wrapper>
  );
};

const Wrapper = styled.div<Props>`
  width: 100%;
  padding: 0 10px 10px 10px;
  background-color: #f9f9f9;
  border-radius: 4px;
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  margin-top: 10px;
`;

const Scenario = styled.span`
  font-size: 1.2rem;
  color: #333;
`;

const Ul = styled.ul``;

const NoteScenario = styled.li`
  line-height: 25px;
  margin-left: 8px;
  list-style: disc;
  font-size: 1.2rem;
  margin-left: 20px;

  &::marker {
    color: #999;
    font-size: 15px;
  }
`;
