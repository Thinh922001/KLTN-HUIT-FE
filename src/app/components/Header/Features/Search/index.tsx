import styled from 'styled-components';
import { SearchItem } from './components/search-item';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { useSearchSlice } from './slice';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectSearchItems } from './slice/selector';

export const Search = () => {
  useSearchSlice();

  const isLoading = useSelector(selectIsLoading);

  const items = useSelector(selectSearchItems);
  return (
    <Wrapper>
      {isLoading ? (
        <LoadingWrapper>
          <LoadingIndicator />
        </LoadingWrapper>
      ) : (
        <SearchWrapper>
          <SearchTitle>Sản phẩm gợi ý</SearchTitle>
          <SearchItems>
            {items.length > 0 ? (
              items.map(e => <SearchItem key={e.id} data={e} />)
            ) : (
              <TextNotFound>Không tìm thấy sản phẩm</TextNotFound>
            )}
          </SearchItems>
        </SearchWrapper>
      )}
    </Wrapper>
  );
};

const LoadingWrapper = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 129%;
  left: 0;
  width: 143%;
  background-color: #fff;
  z-index: 10;
  border-radius: 6px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  border: 1px solid #eee;

  &::after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    bottom: 100%;
    left: 10%;
    border-bottom: 10px solid #eee;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-width: 8px;
    border-bottom-color: #f5f5f5;
    margin-left: 2px;
  }
`;

const SearchWrapper = styled.div``;

const SearchTitle = styled.h5`
  background: #f5f5f5;
  font-size: 1.3rem;
  color: #666;
  font-weight: 400;
  padding: 10px;
`;

const SearchItems = styled.div``;

const TextNotFound = styled.h6`
  display: inline-block;
  color: #333;
  font-weight: 500;
  font-size: 1.4rem;
  padding: 10px;
  text-align: center;
  width: 100%;
`;
