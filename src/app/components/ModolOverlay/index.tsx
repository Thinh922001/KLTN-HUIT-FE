import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';

type ModalOverlayProps = {
  show: boolean;
};

const ModalOverlay = styled.div<ModalOverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${({ show }) => (show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 30px 40px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  min-width: 400px;
  text-align: center;
`;

const CloseButton = styled.button`
  background: #f44336;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  transition: background 0.3s;

  &:hover {
    background: #d32f2f;
  }
`;

type ShowModalProps = {
  children: ReactNode;
  show: boolean;
  onClose: () => void;
};

const ShowModal: React.FC<ShowModalProps> = ({ children, show, onClose }) => {
  return (
    <ModalOverlay show={show} onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        {children}
        <CloseButton onClick={onClose}>Đóng</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ShowModal;
