import IconLogin from 'app/components/IconLogin';
import styled from 'styled-components';

export const MenuTop = () => {
  return (
    <MenuTopWrapper>
      <TitleTop>Đơn hàng đã mua</TitleTop>
      <MenuTopTime>
        <PeriodTime>Từ 05/11/2023 - 05/11/2024</PeriodTime>
        <Time>
          <IconLogin position="-114px -22px" width="14px" height="14px" /> Thay
          đổi
        </Time>
      </MenuTopTime>
    </MenuTopWrapper>
  );
};

const MenuTopWrapper = styled.div`
  display: flex;
  height: 40px;
  gap: 20px;
  align-items: stretch;
`;

const TitleTop = styled.h2`
  font-size: 2rem;
  line-height: 24px;
  color: #333;
`;

const MenuTopTime = styled.div`
  font-size: 14px;
  line-height: 26px;
  display: flex;
  align-items: stretch;
  gap: 20px;
`;

const PeriodTime = styled.p`
  color: #000;
`;

const Time = styled.a`
  color: #023f88;
`;
