import styled from 'styled-components';
import Icon from 'app/pages/CartPage/components/icon-card';
import { ChangeEvent, useState } from 'react';
import { FloatingInput } from 'app/components/FloatingInput';

interface Props {
  isActive: boolean;
}

export const CartDisCount = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const [disCountCode, setDiscountCode] = useState<string>('');

  const handleSetDiscountCode = (e: ChangeEvent<HTMLInputElement>) => {
    setDiscountCode(e.target.value);
  };

  return (
    <Wrapper>
      <Content>
        <ButtonDiscount
          isActive={isActive}
          onClick={() => setIsActive(e => !e)}
        >
          <Icon position="0 -158px" width="18px" height="13px" />
          Sử dụng mã giảm giá
        </ButtonDiscount>
        {isActive && (
          <WrapperDiscount>
            <ContentDiscount>
              <WrapperInput>
                {' '}
                <FloatingInput
                  customColor="#333;"
                  customBorder="1px solid #d1d1d1"
                  name="address"
                  customWidth="100%"
                  label="Số điện thoại người nhận"
                  disableFloating={true}
                  onChange={handleSetDiscountCode}
                  disableFocusColor={true}
                />
                <BtnApplyDiscount discount={disCountCode}>
                  Áp dụng
                </BtnApplyDiscount>
              </WrapperInput>
            </ContentDiscount>
          </WrapperDiscount>
        )}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Content = styled.div`
  padding: 20px 20px;
`;

const ButtonDiscount = styled.button<Props>`
  min-width: 210px;
  position: relative;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  height: 40px;

  font-weight: 500;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px;

  &::before {
    position: absolute;
    border-top: 2px solid #333;
    border-right: 2px solid #333;
    content: '';
    height: 8px;
    transform: ${({ isActive }) =>
      isActive ? `rotate(315deg)` : `rotate(135deg)`};
    transition: 0.3s ease-in-out;
    width: 8px;
    top: 39%;
    right: 11px;
  }
`;

const WrapperDiscount = styled.div`
  margin-top: 12px;
  background: #f6f6f6;
  border: 1px solid #e1e1e1;
  position: relative;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-top: 1px solid #e1e1e1;
    border-right: 1px solid #e1e1e1;

    background: #f6f6f6;
    transform: rotate(-45deg);
    display: block;
    position: absolute;
    left: 48px;
    top: -6px;
  }
`;

const ContentDiscount = styled.div`
  padding: 10px 10px;
`;

const BtnApplyDiscount = styled.button<{ discount: string }>`
  border-width: 1px 0 1px 1px;
  border-style: solid;
  border-radius: 0 4px 4px 0;
  padding: 10px 22px 10px 20px;
  color: #fff;
  width: 100px;
  background-color: ${({ discount }) => (discount ? '#2377e8' : `#a4a4a4`)};
  border-color: ${({ discount }) => (discount ? '#2377e8' : `#a4a4a4`)};
  margin-left: -2px;
`;

const WrapperInput = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
`;
