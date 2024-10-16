import { LocationBoxState } from 'app/components/Header/Features/LocationBox/slice/type';
import { SearchState } from 'app/components/Header/Features/Search/slice/type';
import { OverlayState } from 'app/components/Overlay/slice';
import { CartState } from 'app/pages/CartPage/slice/type';
import { ProductCateState } from 'app/pages/Category/slice/type';
import { ProductDetailState } from 'app/pages/DetaiItem/slice/type';
import { GithubRepoFormState } from 'app/pages/HomePage/Features/GithubRepoForm/slice/types';
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
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
