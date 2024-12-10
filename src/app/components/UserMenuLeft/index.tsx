import IconLogin from 'app/components/IconLogin';
import { CartActions } from 'app/pages/CartPage/slice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getNameLocalStorage } from 'utils/url/local-storage';

const infoItemsData = [
  {
    text: 'Đơn hàng đã mua',
    isActive: true,
    activePosition: '-456px -23px',
    inactivePosition: '-401px -23px',
  },
  {
    text: 'Thông tin và sổ địa chỉ',
    isActive: false,
    activePosition: '-455px -65px',
    inactivePosition: '-400px -65px',
  },
];
const UserMenuLeft = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fullName = getNameLocalStorage();

  const handleLogOut = () => {
    localStorage.removeItem('cart-auth');
    localStorage.removeItem('auth');
    dispatch(CartActions.refreshCart());
    navigate('/login');
  };
  return (
    <Wrapper>
      <Title>
        Anh <Name>{fullName}</Name>
      </Title>
      <InfoList>
        {infoItemsData.map((item, index) => (
          <InfoItem
            key={index}
            isActive={hoveredItem === index}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(0)}
          >
            <IconLogin
              position={
                hoveredItem === index
                  ? item.activePosition
                  : item.inactivePosition
              }
              width="23px"
              height="19px"
            />
            {item.text}
          </InfoItem>
        ))}
        <BtnLogout onClick={handleLogOut}>Đăng Xuất</BtnLogout>
      </InfoList>
    </Wrapper>
  );
};

export default UserMenuLeft;

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  box-sizing: border-box;
  height: max-content;
  max-width: 70%;
  width: fit-content;
  padding: 3px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
`;

const Name = styled.b``;

const InfoList = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 5px;
`;

const InfoItem = styled.li<{ isActive: boolean }>`
  padding: 12px 15px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  background: ${({ isActive }) => (isActive ? '#e4e7ed' : 'transparent')};
  border-radius: 4px;
  transition: background 0.3s;
`;

const BtnLogout = styled.button`
  border-radius: 5px;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px 31px;
  color: #4a90e2;
  border: 1px solid #4a90e2;
  transition: background 0.5s, color 0.5s;

  &:hover {
    background: #4a90e2;
    color: #fff;
  }
`;
