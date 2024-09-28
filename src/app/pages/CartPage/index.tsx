import { Helmet } from 'react-helmet-async';
import { CardNotFound } from './components/card-not-found';

export function CartPage() {
  return (
    <>
      <Helmet>
        <title>Giỏ hàng</title>
        <meta name="description" content="Giỏ hàng" />
      </Helmet>
      <CardNotFound />
    </>
  );
}
