import { Helmet } from 'react-helmet-async';
import { CardNotFound } from './components/card-not-found';
import { CartFound } from './CartFound';
import { useCartSlice } from './slice';
import { useSelector } from 'react-redux';
import { selectLengthCart } from './slice/selector';

export function CartPage() {
  useCartSlice();

  const cartLength = useSelector(selectLengthCart);
  return (
    <>
      <Helmet>
        <title>Giỏ hàng</title>
        <meta name="description" content="Giỏ hàng" />
      </Helmet>

      {cartLength > 0 ? <CartFound /> : <CardNotFound />}
    </>
  );
}
