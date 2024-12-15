import { LocationBoxState } from 'app/components/Header/Features/LocationBox/slice/type';
import { SearchState } from 'app/components/Header/Features/Search/slice/type';
import { OverlayState } from 'app/components/Overlay/slice';
import { CartState } from 'app/pages/CartPage/slice/type';
import { ProductCateState } from 'app/pages/Category/slice/type';
import { CommentBoxState } from 'app/pages/DetaiItem/Features/Review/slice/type';
import { ProductDetailState } from 'app/pages/DetaiItem/slice/type';
import { GithubRepoFormState } from 'app/pages/HomePage/Features/GithubRepoForm/slice/types';
import { FormLoginState } from 'app/pages/Login/slice/type';
import { IHomePageState } from 'app/pages/MyHomePage/slice/type';
import { OrderDetailState } from 'app/pages/OrderDetail/slice/type';

import { OrderHistoryState } from 'app/pages/OrderHistory/slice/type';
import { AuthState } from 'auth/type';
import { ThemeState } from 'styles/theme/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life. 
  So, not available always
*/
export interface RootState {
  theme?: ThemeState;
  githubRepoForm?: GithubRepoFormState;
  overLay?: OverlayState;
  locationBox?: LocationBoxState;
  productCateState?: ProductCateState;
  productDetailState?: ProductDetailState;
  cartState?: CartState;
  searchState?: SearchState;
  loginState?: FormLoginState;
  authState?: AuthState;
  commentBoxState?: CommentBoxState;
  orderHistoryState?: OrderHistoryState;
  homePageState?: IHomePageState;
  orderDetailState?: OrderDetailState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
