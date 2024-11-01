import { FloatingInput } from 'app/components/FloatingInput';
import { CenteredLoading } from 'app/components/LoadingCenter';
import Icon from 'app/pages/CartPage/components/icon-card';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { CartActions } from '../../slice';
import {
  selectCoupon,
  selectCouponError,
  selectCouponResult,
  selectLoadingCoupon,
} from '../../slice/selector';
import { ICouponResult } from '../../slice/type';

interface Props {
  isActive: boolean;
}

export const CartDisCount = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const dispatch = useDispatch();

  const disCountCode = useSelector(selectCoupon);

  const isLoading = useSelector(selectLoadingCoupon);

  const discountResult = useSelector(selectCouponResult);

  const error = useSelector(selectCouponError);

  const handleSetDiscountCode = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(CartActions.setCoupon(e.target.value));
  };

  const genTextButton = () => {
    if (discountResult.disCountType) return 'Thành công';
    if (error) return 'Thất bại';
    return 'Áp dụng';
  };

  useEffect(() => {
    dispatch(CartActions.resetCoupon());
  }, [isActive]);

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
                <FloatingInput
                  customColor="#333;"
                  customBorder="1px solid #d1d1d1"
                  name="address"
                  customWidth="100%"
                  label="Nhập mã giảm giá"
                  value={disCountCode}
                  disableFloating={true}
                  onChange={handleSetDiscountCode}
                  disableFocusColor={true}
                />
                <BtnApplyDiscount
                  discount={disCountCode}
                  discountResult={discountResult}
                  error={error}
                  onClick={() => dispatch(CartActions.checkingCoupon())}
                >
                  {isLoading ? (
                    <CenteredLoading minHeight="100%" tiny />
                  ) : (
                    genTextButton()
                  )}
                </BtnApplyDiscount>
                {disCountCode && (
                  <CloseBtn onClick={() => dispatch(CartActions.resetCoupon())}>
                    <CloseIcon
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM15.1466 30.7323L21.8788 24.0001L15.1466 17.2679C14.756 16.8774 14.756 16.2442 15.1466 15.8537L15.8537 15.1466C16.2442 14.756 16.8774 14.756 17.2679 15.1466L24.0001 21.8788L30.7323 15.1466C31.1229 14.756 31.756 14.756 32.1466 15.1466L32.8537 15.8537C33.2442 16.2442 33.2442 16.8774 32.8537 17.2679L26.1214 24.0001L32.8537 30.7323C33.2442 31.1229 33.2442 31.756 32.8537 32.1466L32.1466 32.8537C31.756 33.2442 31.1229 33.2442 30.7323 32.8537L24.0001 26.1214L17.2679 32.8537C16.8774 33.2442 16.2442 33.2442 15.8537 32.8537L15.1466 32.1466C14.756 31.756 14.756 31.1229 15.1466 30.7323Z"
                      />
                    </CloseIcon>
                  </CloseBtn>
                )}
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

const BtnApplyDiscount = styled.button<{
  discount: string;
  discountResult: ICouponResult;
  error: string;
}>`
  border: 1px solid;
  border-width: 1px 0 1px 1px;
  border-radius: 0 4px 4px 0;
  padding: 10px 22px 10px 20px;
  font-size: ${({ discount, discountResult, error }) =>
    discountResult.disCountType || error ? '1.1rem' : '1.4rem'};
  color: #fff;
  width: 100%;
  background-color: ${({ discount, discountResult, error }) => {
    if (discount && discountResult.disCountType) return '#28a745';
    if (discount && error) return '#dc3545';
    if (discount) return '#2377e8';
    return '#a4a4a4';
  }};
  border-color: ${({ discount, discountResult, error }) => {
    if (discount && discountResult.disCountType) return '#28a745';
    if (discount && error) return '#dc3545';
    if (discount) return '#2377e8';
    return '#a4a4a4';
  }};
  cursor: ${({ discount, discountResult, error }) =>
    discount && !discountResult.disCountType && !error ? 'pointer' : 'auto'};
  margin-left: -2px;
`;

const WrapperInput = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  position: relative;
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 107px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 18px;
  color: #999;
  cursor: pointer;
  font-weight: bold;
  z-index: 999;

  &:hover {
    color: #333;
  }
`;

const CloseIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: rgba(22, 24, 35, 0.34);
  margin: 0px 12px;
`;
