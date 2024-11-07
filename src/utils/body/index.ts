import { Gender } from 'app/pages/CartPage/CartFound/components/type';
import { CartDto, Order } from 'utils/types/order';
import { isAuthenticated } from 'utils/url/local-storage';

export const genBodyOrder = (
  name: string,
  gender: Gender,
  phone: string,
  address: string,
  cartData: CartDto[],
  coupon?: string,
  note?: string,
): Order => ({
  carts: cartData,
  type: isAuthenticated() ? 'AUTH' : 'NO_AUTH',
  address,
  ...(isAuthenticated()
    ? {}
    : {
        auth: {
          fullName: name,
          phone,
          gender,
        },
      }),
  ...(coupon && { coupon }),
  ...(note && { note }),
});
