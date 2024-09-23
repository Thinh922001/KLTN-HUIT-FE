import Icon from 'app/components/icons';
import { Input } from 'app/components/Input/Input';
import styled from 'styled-components/macro';
import { media } from 'styles/media';
import { ReactComponent as MoreIcon } from './assets/more.svg';

export default function MyHeader() {
  return (
    <HeaderWarper>
      <MoreIcon className="header__more" />
      <Icon
        position="0 -130px"
        width="240px"
        height="40px"
        className="header__brand"
      />

      <HeaderSearch>
        <Icon position="-151px -18px" width="17px" height="17px" />
        <Input placeholder="Bạn tìm gì..." />
      </HeaderSearch>

      <ButtonGroup>
        <HeaderButton>
          <Icon position="-82px -221px" width="24px" height="24px" />
          Đăng nhập
        </HeaderButton>
        <HeaderButton>
          <Icon position="-108px -221px" width="24px" height="24px" />
          Giỏ Hàng
        </HeaderButton>
      </ButtonGroup>

      <HeaderLocation>
        <Icon position="-134px -219px" width="17px" height="23px" />
        Hồ Chí Minh
      </HeaderLocation>
    </HeaderWarper>
  );
}

const HeaderWarper = styled.div`
  display: flex;
  padding: 10px 0;
  position: relative;

  color: #fff;

  .header__more {
    display: none;

    ${media.sm} {
      display: block;
      position: absolute;
      left: 0;
      cursor: pointer;
    }
  }

  ${media.sm} {
    align-items: center;
    justify-content: center;
  }
`;

const HeaderSearch = styled.div`
  display: flex;
  align-items: center;

  background-color: #fff;
  width: min(100%, 415px); //
  height: 40px;
  border-radius: 32px;
  padding: 8px;
  margin-right: 10px;
  color: black;

  font-size: 1.2rem;
  line-height: 14px;

  ${Icon} {
    margin-right: 10px;
  }

  ${media.xl} {
    display: none;
  }
`;

const HeaderButton = styled.button`
  background-color: transparent;
  border-radius: 32px;
  padding: 0 10px;

  display: flex;
  align-items: center;

  font-size: 1.4rem;
  line-height: 42px;

  transition: background-color 0.3s;

  & + & {
    margin-left: 10px;
  }

  &:hover {
    background-color: #2871d5;
  }
`;

const HeaderLocation = styled.div`
  position: relative;

  width: 240px;

  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 32px;
  background-color: #5194e8;
  gap: 5px;
  transition: background-color 0.5s;
  margin-left: 10px;
  cursor: pointer;

  ${Icon} {
    margin-left: 10px;
  }

  &::before {
    position: absolute;
    content: '';

    border-top: 1px solid #333;
    border-left: 1px solid #333;
    height: 5px;
    width: 5px;
    border-right: 0;
    transform: rotate(135deg);
    right: 10px;
  }

  &:hover {
    background-color: #2871d5;
  }

  ${media.md} {
    display: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.xl} {
    margin: 0 auto;
  }

  ${media.sm} {
    display: none;
  }
`;
