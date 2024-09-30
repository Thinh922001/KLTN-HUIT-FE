import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Icon from '../../components/icon-card';
import { useDispatch, useSelector } from 'react-redux';
import { selectProvince } from 'app/components/Header/Features/LocationBox/slice/selectors';
import { LocationBoxActions } from 'app/components/Header/Features/LocationBox/slice';

interface Props {
  isActive: boolean;
}

export const BtnChosenLocation = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const dispatch = useDispatch();
  const provinces = useSelector(selectProvince);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleIsActive = () => {
    setIsActive(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsActive(false);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (!provinces.length) dispatch(LocationBoxActions.loadProvince());
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [provinces]);

  const filteredProvinces = provinces.filter(province =>
    province.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Wrapper ref={wrapperRef}>
      <Btn isActive={isActive} onClick={handleIsActive}>
        Hồ Chí Minh
        {isActive && (
          <FormLocation>
            <LocationContent>
              <BoxSearch>
                <Input
                  placeholder="Nhập tỉnh thành để tìm nhanh"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <Icon width="16px" height="16px" position="-77px -121px" />
              </BoxSearch>

              <ItemWrapper>
                {filteredProvinces.length > 0 ? (
                  filteredProvinces.map(e => <Item key={e.id}>{e.name}</Item>)
                ) : (
                  <Item>Không có kết quả tìm kiếm</Item>
                )}
              </ItemWrapper>
            </LocationContent>
          </FormLocation>
        )}
      </Btn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Btn = styled.button<Props>`
  display: block;
  padding: 10px;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  width: 100%;
  background: #fff;
  text-align: left;
  color: #288ad6;
  cursor: pointer;

  &::after {
    content: '';
    border-top: 6px solid #288ad6;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    position: absolute;
    right: 10px;
    top: 15px;
    transition: transform 0.3s;

    ${({ isActive }) => isActive && `transform: rotate(180deg);`}
  }
`;

const FormLocation = styled.div`
  position: absolute;
  top: 46px;
  left: 0;
  right: 0;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  background: #fff;
  z-index: 3;
  width: 350px;
`;

const LocationContent = styled.div`
  padding: 10px 10px;
`;

const BoxSearch = styled.div`
  display: flex;
  align-items: center;
  height: 40%;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Input = styled.input`
  color: #000;
  font-size: 1.4rem;
  font-weight: 300;
  width: 100%;
  margin-right: 5px;
`;

const ItemWrapper = styled.div`
  max-height: 250px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  overflow-y: auto;
  margin-top: 10px;
`;

const Item = styled.span`
  padding: 6px;
  font-size: 1.3rem;
  font-weight: 500;
  transition: background-color, color, 0.3s;

  &:hover {
    background-color: rgb(40, 138, 214);
    color: #fff;
  }
`;
