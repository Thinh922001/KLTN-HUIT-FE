import React from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

export const useAddToCartToast = () => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const toastId = toast(
      <ToastContent>
        <ToastText>Đã thêm vào giỏ hàng </ToastText>
        <Button
          onClick={() => {
            toast.dismiss(toastId);
            navigate('/cart');
          }}
        >
          Xem giỏ hàng
        </Button>
      </ToastContent>,
      {
        position: 'bottom-right',
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        toastId: 'unique-toast',
      },
    );
  };

  return handleAddToCart;
};

export const OutOfStockToast = () => {
  toast(
    <ToastContent>
      <ToastText marginRight={10}>Sản phẩm hết hàng</ToastText>
    </ToastContent>,
    {
      position: 'bottom-right',
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      style: { backgroundColor: '#f8d7da', color: '#721c24' },
    },
  );
};

export const CmtSuccess = () => {
  toast(
    <ToastContent>
      <ToastText marginRight={10}>Sản phẩm hết hàng</ToastText>
    </ToastContent>,
    {
      position: 'bottom-right',
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      style: { backgroundColor: '#f8d7da', color: '#721c24' },
    },
  );
};

const ToastContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ToastText = styled.span<{ marginRight?: number }>`
  &::before {
    content: '';
    width: 26px;
    height: 26px;
    background: transparent
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAFTUExURUdwTOz98u398+/69Or67+r69Oz98+v78+z+8+398u//7+3+9O399Oz+8u399O3+8u3+8+z88+f37+//9+/39+f/7+z98u398+z89O//8+399O///+z989//7+398uz88uz89O/98+v98+398+v98uz98ur89O/89Oz99Or88uz989H63wOYVRykZh2kZrfuzrftzdL64Nj75OT87eP87dT64d/86d776d376NP64NP74EO2gIPVq4TVq8T01tf65NX74uj88On98dn75eX87uv98hCeXcT018Tz1jawd3fPojexeCmqb+L87OH86uD869n65eD76tz76N/76tf749b74+H769X649r75er98ur88h2lZrjuzjaweKrnxUO3gGrJmWnImWrJmtX74eP77db64tT64tb646roxTexd6roxrftzoTWq0O3gZ7ivZ3hvZ3hvKF0uEcAAAAqdFJOUwDfbzAwMO9Av48Q39/fj9/PvyAgICDv718/nxCQEN9gn2/Pz4+fYF+fYLEo/qIAAALYSURBVEjHlZbXQyIxEIcDKoK9nHq2s1/5kqWrKKiAvetZzt6u9/v/n+5hdyFZqr83Jvsxk8lMMkKUqmnibVcnQGewY6JJ1KHmjgEMtQ3V4pqDlFHXm2cjAG0vKiDDI84XV4nU0WxMytjXlVTiyjF2tJRjelvt1bWVmNR1lKjsrMHe/6dZWaLZcwACJQl5DUBuRZbV5xwALz1+ADiJyQpaOAbA8NU7ADAvq2geIKDta7i1JuNQbcUcjtTBOFRHITiAE1lTxwDNDtQK5GK1oYUcELSZMYAPsg7Fi666gHNzdWsnbSm1cbsUNe0J11UDgFEHW48bylF42awN19UQkNRXopZSu79upPyWud+VUkatcGFtDQg5aVg1mfAfz29jVwE7ukvdkaX2Nj1MpJjAdaBR+D3RPapwZcZOhV+EgPfaR0pFqjAyBYyLIKA1REb9rsbIC2BSdJonu62WqjHyC+ATADE9DT+klNIKR4vMdlorJQABoP2TUg4bjhb8ODZbVaCIpcKF2MpDRng3LuUyd9rhOuF1mpWXdhMRsdwcZNRucf0U8Ikus4p21K23IdJ6QuNAtxgyD3d5Q/01GfO4U0CopIwePO2wZamnkjJqAC61TCxbak+jtvb0NEhpF6wIAHHNHLFUuNCw/zw1cQH4hBAhYE2alEov3Un5M7OtPHWUAGaEEM0AWWPvD263q40nvU9kFjs6IYLefpcykvl+rdT1/c6mad8HJu33D8+uKupUezqCQL6Oy3Ix76Sh4OqwNnQA0ONe5iGAuVrMHM79ZaulvQ5qDsA3Wnyg+gI1qTmA/h5jsgHgsGI2Fg8oHFFRYwDkzyo8F/lyD7UQTQEA9rOlSNaeJPobSweJvnZ7yEiumoHF12y7r6fcyNISciaa9WQqfrYo5eLH1VRy3TGGRitMR66zUnUPVpnD3k09GxFCiMYZj7v+6cF6hstG/3T3K4BXU+P+MikT/wHeIHSkkfRw5wAAAABJRU5ErkJggg==)
      no-repeat center top;
    background-size: 100% auto;
    display: inline-block;
    vertical-align: middle;
    margin-right: ${({ marginRight }) =>
      marginRight ? `${marginRight}px` : '2px'};
  }
`;

const Button = styled.button`
  height: 36px;
  width: 100%;
  line-height: 36px;
  text-align: center;
  border-radius: 8px;
  color: #2871d5;
  background-color: #e3f1fe;
  font-size: 14px;
  font-weight: 600;
`;

const Span = styled.span``;
