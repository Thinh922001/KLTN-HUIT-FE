import IconLogin from 'app/components/icons';
import { Input } from 'app/components/Input/Input';
import { useCartSlice } from 'app/pages/CartPage/slice';
import { selectLengthCart } from 'app/pages/CartPage/slice/selector';
import { ChangeEvent, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import { media } from 'styles/media';
import { Container } from '../container';
import { OverlayActions } from '../Overlay/slice';
import { ReactComponent as MoreIcon } from './assets/more.svg';
import { LocationBox } from './Features/LocationBox';
import {
  LocationBoxActions,
  useLocationBoxSlice,
} from './Features/LocationBox/slice';
import { selectStatusBoxLocation } from './Features/LocationBox/slice/selectors';
import { Search } from './Features/Search';
import { SearchActions, useSearchSlice } from './Features/Search/slice';
import { selectKeyWord } from './Features/Search/slice/selector';
import { Menu } from './Menu';

export default function MyHeader() {
  useCartSlice();
  useLocationBoxSlice();
  useSearchSlice();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const wrapperRef = useRef<HTMLDivElement>(null);

  const searchInput = useSelector(selectKeyWord);

  const isBoxLocationActive = useSelector(selectStatusBoxLocation);

  const cartLength = useSelector(selectLengthCart);

  const handleShowOverLay = () => {
    dispatch(OverlayActions.showOverlay());
  };

  const setSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(SearchActions.setKeyWord(e.target.value));
    dispatch(SearchActions.loadSearch());
  };

  const navigateLogin = () => {
    navigate('/login');
  };

  const handleHideOverLay = () => {
    if (!isBoxLocationActive) dispatch(OverlayActions.hideOverlay());
  };

  const handleShowLocationBox = () => {
    dispatch(OverlayActions.showOverlay());
    dispatch(LocationBoxActions.showLocationBox());
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        dispatch(SearchActions.setKeyWord(''));
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <HeaderWrapper>
      <HeaderDiv>
        <Container>
          <HeaderWarper>
            <MoreIcon className="header__more" />
            <IconLogin
              position="0 -130px"
              width="240px"
              height="40px"
              className="header__brand"
              onClick={() => navigate('/')}
            />

            <Menu
              onMouseEnter={handleShowOverLay}
              onMouseLeave={handleHideOverLay}
            />

            <HeaderSearch ref={wrapperRef}>
              <IconLogin position="-151px -18px" width="17px" height="17px" />
              <Input
                onChange={e => setSearchInput(e)}
                placeholder="Bạn tìm gì..."
                value={searchInput}
              />
              {searchInput && <Search />}
            </HeaderSearch>

            <ButtonGroup>
              <HeaderButton onClick={navigateLogin}>
                <IconLogin position="-82px -221px" width="24px" height="24px" />
                Đăng nhập
              </HeaderButton>
              <HeaderButton
                className="header__card"
                onClick={() => {
                  navigate('/cart');
                }}
              >
                <IconLogin
                  position="-108px -221px"
                  width="24px"
                  height="24px"
                />
                Giỏ Hàng
                {cartLength > 0 ? (
                  <QuantityCart>{cartLength}</QuantityCart>
                ) : null}
              </HeaderButton>
            </ButtonGroup>

            <HeaderLocation onClick={handleShowLocationBox}>
              <IconLogin position="-134px -219px" width="17px" height="23px" />
              Hồ Chí Minh
            </HeaderLocation>
            {isBoxLocationActive && <LocationBox />}
          </HeaderWarper>
        </Container>
      </HeaderDiv>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  padding-bottom: 82px;
`;

const QuantityCart = styled.span`
  position: absolute;
  top: 9px;
  left: 16px;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  color: #fff;
  font-size: 1rem;
  background-color: #dd1c1a;
`;

const HeaderDiv = styled.header`
  background-color: #2a83e9;
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
`;

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

  .header__card {
    ${media.md} {
      display: none;
    }
  }
`;

const HeaderSearch = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  background-color: #fff;
  width: min(100%, 300px); //
  height: 40px;
  border-radius: 32px;
  padding: 8px;
  margin-right: 10px;
  color: black;

  font-size: 1.2rem;
  line-height: 14px;

  ${IconLogin} {
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

  position: relative;

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

  ${IconLogin} {
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

  ${media.lg} {
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
