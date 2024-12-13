import IconLogin from 'app/components/IconLogin';
import { CartActions } from 'app/pages/CartPage/slice';
import {
  OrderHistoryActions,
  useOrderHistorySlice,
} from 'app/pages/OrderHistory/slice';
import {
  selectAnount,
  selectBalance,
  selectBalanceLoading,
  selectPayUrl,
  selectTopUpLoading,
} from 'app/pages/OrderHistory/slice/selector';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getNameLocalStorage } from 'utils/url/local-storage';
import { CenteredLoading } from '../LoadingCenter';
import ShowModal from '../ModolOverlay';

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
  useOrderHistorySlice();
  const [hoveredItem, setHoveredItem] = useState<number | null>(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fullName = getNameLocalStorage();
  const balance = useSelector(selectBalance);
  const isalanceLoading = useSelector(selectBalanceLoading);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const amount = useSelector(selectAnount);
  const isTopUpLoading = useSelector(selectTopUpLoading);
  const payUrl = useSelector(selectPayUrl);

  const handleLogOut = () => {
    localStorage.removeItem('cart-auth');
    localStorage.removeItem('auth');
    dispatch(CartActions.refreshCart());
    navigate('/login');
  };

  useEffect(() => {
    if (payUrl) {
      window.location.href = payUrl;
    }
  }, [payUrl]);

  const handleTopUp = () => {
    if (amount) {
      dispatch(OrderHistoryActions.loadingTopUp());
    } else {
      alert('Vui lòng chọn số tiền muốn nạp.');
    }
  };

  useEffect(() => {
    dispatch(OrderHistoryActions.loadingUserBalance());
  }, []);

  return (
    <Wrapper>
      <Title>
        Anh <Name>{fullName}</Name>
      </Title>
      <Balance>
        Số dư ví
        {isalanceLoading && !balance ? (
          <CenteredLoading tiny minHeight="10px" />
        ) : (
          <Name>{balance.toLocaleString()} VND</Name>
        )}
      </Balance>
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
        <BtnTopUp onClick={() => setIsModalVisible(true)}>Nạp tiền</BtnTopUp>
        <BtnLogout onClick={handleLogOut}>Đăng Xuất</BtnLogout>
        <ShowModal
          show={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        >
          <h2 style={{ marginBottom: '10px' }}>Nạp tiền bằng MoMo</h2>
          <p>Chọn số tiền bạn muốn nạp:</p>
          <select
            style={{
              fontSize: '18px',
              padding: '10px',
              width: '100%',
              margin: '20px 0',
            }}
            value={amount}
            onChange={e =>
              dispatch(OrderHistoryActions.setAmount(Number(e.target.value)))
            }
          >
            <option value="" disabled>
              Chọn số tiền
            </option>
            {[1000000, 5000000, 10000000, 20000000, 50000000, 100000000].map(
              amount => (
                <option key={amount} value={amount}>
                  {amount.toLocaleString()} VND
                </option>
              ),
            )}
          </select>
          {isTopUpLoading ? <CenteredLoading minHeight="20px" /> : null}
          <TopUpButton onClick={handleTopUp}>Nạp tiền</TopUpButton>
        </ShowModal>
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

const TopUpButton = styled.button`
  padding: 10px 20px;
  background: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  margin-right: 20px;
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

const Balance = styled(Title)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Name = styled.b`
  color: #333;
`;

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
  cursor: pointer;
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

const BtnTopUp = styled(BtnLogout)`
  color: #adbe2f;
  border: 1px solid #9ab814;

  &:hover {
    background: #adc910;
    color: #fff;
  }
`;
