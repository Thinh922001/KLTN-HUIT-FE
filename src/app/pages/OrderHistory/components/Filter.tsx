import { useState } from 'react';
import styled from 'styled-components';
import { BtnFilter } from './ButtonFilter';
import { OrderStatus } from 'auth/type';
import { useDispatch } from 'react-redux';
import { OrderHistoryActions } from '../slice';

export const Filter = () => {
  const filerDataG = [
    {
      name: 'Tất cả',
      filter: '',
    },
    {
      name: 'Chờ xử lý',
      filter: OrderStatus.Pending,
    },
    {
      name: 'Đang xử lý',
      filter: OrderStatus.Processing,
    },
    {
      name: 'Trả hàng',
      filter: OrderStatus.Returned,
    },
    {
      name: 'Thành công',
      filter: OrderStatus.Completed,
    },
  ];
  const [activeButton, setActiveButton] = useState<string>(filerDataG[0].name);

  const dispatch = useDispatch();

  const handleFilter = (name: string) => {
    dispatch(OrderHistoryActions.setFilter(name));
    dispatch(OrderHistoryActions.loadOrder());
  };

  return (
    <Wrapper>
      {filerDataG.map((e, index) => (
        <BtnFilter
          key={index}
          name={e.name}
          isActive={activeButton === e.name}
          onClick={() => {
            setActiveButton(e.name);
            handleFilter(e.filter);
          }}
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
