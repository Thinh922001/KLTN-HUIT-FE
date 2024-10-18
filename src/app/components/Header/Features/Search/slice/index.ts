import { PayloadAction } from '@reduxjs/toolkit';
import { ISearchItem, SearchState } from './type';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { SearchFromSaga } from './saga';

export const initialState: SearchState = {
  keyWord: '',
  isLoading: false,
  searchItems: [],
};

const slice = createSlice({
  name: 'searchState',
  initialState,
  reducers: {
    setKeyWord(state, actions: PayloadAction<string>) {
      state.keyWord = actions.payload;
    },
    loadSearch(state) {
      state.isLoading = true;
      state.searchItems = [];
    },
    searchLoaded(state, actions: PayloadAction<ISearchItem[]>) {
      state.isLoading = false;
      state.searchItems = actions.payload;
    },
  },
});

export const { actions: SearchActions, reducer } = slice;

export const useSearchSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: SearchFromSaga });
  return { actions: slice.actions };
};
