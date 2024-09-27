import styled from 'styled-components';
import { useState } from 'react';
import { NewCate } from './new-cate';
import { NewList } from './new-list';
import { data } from 'app/pages/MyHomePage/components/data/new';
import { LoadingIndicator } from '../LoadingIndicator';

export const News = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const [activeId, setActiveId] = useState<number>(data[0].id || 0);

  const handleOnClick = (index: number) => {
    setActiveIndex(index);
    setActiveId(data[index].id);
  };

  return (
    <NewInner>
      <NewCate
        handleOnClick={handleOnClick}
        activeIndex={activeIndex}
        data={data}
      />
      <NewList id={activeId} />
    </NewInner>
  );
};

const NewInner = styled.div``;
