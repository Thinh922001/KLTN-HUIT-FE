import React, { useState, useEffect } from 'react';
import Icon from 'app/components/icons';
import styled from 'styled-components/macro';
import { MenuData, MenuType } from './data/menu';
import { SubMenu } from './sub-menu';
import { media } from 'styles/media';
interface Props {
  isActive?: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const Menu: React.FC<Pick<Props, 'onMouseEnter' | 'onMouseLeave'>> = ({
  onMouseEnter,
  onMouseLeave,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <ButtonMenu onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Icon position="-286px -33px" width="20px" height="14px" />
      Danh mục
      <Dropdown>
        <DropdownInner>
          <TopMenu>
            <TopMenuMain>
              <MenuItems>
                {MenuData.map((e: MenuType, index) => {
                  return (
                    <MenuItemWithHover
                      key={index}
                      menu={e}
                      isActive={index === activeIndex}
                      onHover={() => setActiveIndex(index)}
                    />
                  );
                })}
              </MenuItems>
            </TopMenuMain>
          </TopMenu>
        </DropdownInner>
      </Dropdown>
    </ButtonMenu>
  );
};

const MenuItemWithHover: React.FC<{
  menu: MenuType;
  isActive: boolean;
  onHover: () => void;
}> = ({ menu, isActive, onHover }) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsHovered(true);
    } else {
      setIsHovered(false);
    }
  }, [isActive]);

  return (
    <MenuItem
      onMouseEnter={() => {
        onHover();
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <A>{menu.title}</A>
      {(isHovered || isActive) && (
        <SubMenuWarper>
          <SubMenu data={menu.subMenus as any} title={menu.title} />
        </SubMenuWarper>
      )}
    </MenuItem>
  );
};

const Dropdown = styled.div`
  display: none;
  position: absolute;
  left: 17.9%;
  padding-top: 14px;
  top: 68%;
  color: #333;

  width: min(820px, 100%);

  z-index: 99999;
`;

const TopMenuMain = styled.div`
  width: 230px;
  height: 100%;
  background-color: #f2f4f7;
  border-radius: 12px;
`;

const MenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 0 5px;
`;

const SubMenuWarper = styled.div`
  position: absolute;
  inset: 0 0 0 230px;
  overflow-y: auto;
  background-color: white;
  display: block;
  border-radius: 12px;
  padding-right: 30px;

  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #f9f9f9;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-radius: 10px;
    border: 2px solid #f9f9f9;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #d0d0d0; /* Slightly darker gray when hovered */
  }

  /* For Firefox */
  * {
    scrollbar-width: thin; /* Makes the scrollbar thinner */
    scrollbar-color: #e0e0e0 #f9f9f9; /* thumb color | track color */
  }
`;

const MenuItem = styled.li<Pick<Props, 'isActive'>>`
  height: 40px;
  border-left: 3px solid #eaecf0;
  text-overflow: ellipsis;
  background-color: #eaecf0;
  padding: 0 25px 0 12px;
  border-bottom: 1px solid #d3d7df;
  display: flex;
  align-items: center;

  font-size: 1.4rem;
  line-height: 18px;

  &:hover {
    border-left-color: #2a83e9;
    background-color: #fff;
  }

  ${props =>
    props.isActive &&
    `
    border-left-color: #2a83e9;
    background-color: #fff;
  `}
`;

const A = styled.a`
  text-decoration: none;
  color: inherit;
`;

const TopMenu = styled.div`
  height: 100%;
  position: relative;
  border-radius: 12px;
`;

const DropdownInner = styled.div`
  border-radius: 12px;
  height: min(410px, 100vh - 100px);
  background-color: #fff;

  box-shadow: 0px 20px 60px 10px rgba(237, 237, 246, 0.2);
`;

const ButtonMenu = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px;
  margin-right: 10px;
  border-radius: 20px 20px 0 0;

  &:hover {
    background-color: #fff;
    color: black;

    ${Dropdown} {
      display: block;
    }

    ${Icon} {
      background-position: -78px 0;
    }
  }

  ${media.sm} {
    display: none;
  }
`;
