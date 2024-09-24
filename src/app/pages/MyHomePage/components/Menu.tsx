import Icon from 'app/components/icons';
import { ReactComponent as MoreIcon } from './assets/more.svg';
import styled from 'styled-components/macro';
import { MenuData, MenuType } from './data/menu';
import { SubMenu } from './sub-menu';

export default function Menu() {
  return (
    <ButtonMenu>
      <Icon position="-286px -33px" width="20px" height="14px" />
      Danh mục
      <Dropdown>
        <DropdownInner>
          <TopMenu>
            <TopMenuMain>
              <MenuItems>
                {MenuData.map((e: MenuType, index) => {
                  return (
                    <MenuItem key={index}>
                      <A>{e.title}</A>
                      <SubMenuWarper>
                        <SubMenu
                          key={index}
                          data={e.subMenus as any}
                          title={e.title}
                        />
                      </SubMenuWarper>
                    </MenuItem>
                  );
                })}
              </MenuItems>
            </TopMenuMain>
          </TopMenu>
        </DropdownInner>
      </Dropdown>
    </ButtonMenu>
  );
}

const Dropdown = styled.div`
  position: absolute;
  left: 17.9%;
  padding-top: 24px;
  top: 68%;
  color: #333;

  width: min(820px, 100%);
`;

const TopMenuMain = styled.div`
  width: 230px;
  height: 100%;
  background-color: #f2f4f7;
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
  display: none;
  //  background-color: orange;
`;

const MenuItem = styled.li`
  height: 40px;
  border-left: 3px solid #eaecf0;
  text-overflow: ellipsis;
  background-color: #eaecf0;
  padding: 0 25px 0 12px;
  border-bottom: 1px solid #d3d7df;
  // position: relative;

  &:hover {
    ${SubMenuWarper} {
      display: block;
    }
  }

  display: flex;
  align-items: center;

  font-size: 1.4rem;
  line-height: 18px;

  &:hover {
    border-left-color: #2a83e9;
    background-color: #fff;
  }

  /* &::before {
    content: '';
    position: absolute;
    transform: rotate(90deg);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #eaecf0;
    width: auto;
    height: auto;
    right: -4px;
  } */
`;

const A = styled.a``;

const TopMenu = styled.div`
  height: 100%;
  position: relative;
`;

const DropdownInner = styled.div`
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  height: min(410px, 100vh - 100px);
  background-color: #fff;

  box-shadow: 0px 20px 60px 10px rgba(237, 237, 246, 0.2);
`;

const ButtonMenu = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 20px 10px;
  margin-right: 10px;
  border-radius: 20px 20px 0 0;

  &:hover {
    background-color: #fff;
    color: black;

    ${Icon} {
      background-position: -78px 0;
    }
  }
`;
