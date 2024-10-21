import { toast } from 'react-toastify';
import styled from 'styled-components';

// Function to show the error toast
export const showErrorToast = message => {
  toast(
    <ToastContent>
      <IconWrapper>⚠️</IconWrapper>
      <ToastText>{message ? message : 'Có lỗi xảy ra'}</ToastText>
    </ToastContent>,
    {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
      style: {
        backgroundColor: '#e05573',
        color: '#fff',
        padding: '16px',
        borderRadius: '8px',
      },
    },
  );
};

// Styled-components for the toast
const ToastContent = styled.div`
  display: flex;
  align-items: center;
`;

const ToastText = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
`;

const IconWrapper = styled.div`
  font-size: 24px;
  margin-right: 10px;
`;

export default showErrorToast;
