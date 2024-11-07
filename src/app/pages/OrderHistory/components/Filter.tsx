import { useState } from 'react';
import styled from 'styled-components';
import { BtnFilter } from './ButtonFilter';

export const Filter = () => {
  const FilterData = [
    'Tất cả',
    'Chờ xử lý',
    'Đã xác nhận',
    'Đang chuyển hàng',
    'Đang giao hàng',
    'Đã hủy',
    'Thành công',
  ];

  const [activeButton, setActiveButton] = useState<string>(FilterData[0]);

  return (
    <Wrapper>
      {FilterData.map((e, index) => (
        <BtnFilter
          key={index}
          name={e}
          isActive={activeButton === e}
          onClick={() => setActiveButton(e)}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
`;
