import styled from 'styled-components';
import React from 'react';
import { ActiveComponent, District, Province, Ward } from '../slice/type';

interface Props {
  data: Province[] | District[] | Ward[];
  handleId: (num: number) => void;
  setActiveComponent?: () => void;
  idActive?: number;
}

interface LocationItem {
  isActive: boolean;
}

export const LocationContent: React.FC<Props> = ({
  data,
  handleId,
  setActiveComponent,
  idActive,
}) => {
  const handleOnclick = (num: number) => {
    handleId(num);
    if (setActiveComponent) {
      setActiveComponent();
    }
  };

  return (
    <Wrapper>
      <LocationWrapper>
        {data.map(e => (
          <LocationItems
            isActive={e.id === idActive}
            key={e.id}
            onClick={() => handleOnclick(e.id)}
          >
            {e.name}
          </LocationItems>
        ))}
      </LocationWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow-y: auto;
  max-height: calc(80vh - 200px);

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
    background: #d0d0d0;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: #e0e0e0 #f9f9f9;
  }
`;

const LocationWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 10px;
  overflow-y: auto;
  gap: 10px;
`;

const LocationItems = styled.div<LocationItem>`
  padding: 10px;
  border-bottom: 1px solid #e9f4fb;
  font-size: 1.4rem;
  transition: background 0.3s;

  ${({ isActive }) => (isActive ? `background: #e9f4fb;` : ``)}
  &:hover {
    background: #e9f4fb;
  }
`;
