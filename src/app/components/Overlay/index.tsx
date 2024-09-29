import React from 'react';
import styled from 'styled-components';
import { OverlayActions, useOverlaySlice } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectOverLay } from './slice/selectors';
import { LocationBoxActions } from '../Header/Features/LocationBox/slice';

interface Props {
  isActive: boolean;
}

export function Overlay() {
  useOverlaySlice();
  const dispatch = useDispatch();

  const isActive = useSelector(selectOverLay);

  const handleHideOverlay = () => {
    dispatch(OverlayActions.hideOverlay());
    dispatch(LocationBoxActions.hideLocationBox());
  };
  return <OverLayWrapper isActive={isActive} onClick={handleHideOverlay} />;
}

const OverLayWrapper = styled.div<Props>`
  position: fixed;
  inset: 62px 0 0 0;
  width: 100vw;
  height: calc(100vh - 62px);
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;

  ${({ isActive }) => (isActive ? `display: block` : `display: none`)}
`;
