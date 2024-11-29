import { Container } from 'app/components/container';
import { Helmet } from 'react-helmet-async';
import { Banner } from './components/banner';
import { BannerOffer } from './components/banner-offer';
import { BannerWeek } from './components/banner-week';
import { Category } from './components/category';
import { CommonSearch } from './components/common-search';
import { HomeNews } from './components/home-news';
import { Suggest } from './components/suggest';

export function MyHomePage() {
  return (
    <>
      <Helmet>
        <title>Trang Chủ</title>
        <meta name="description" content="KLTN HUIT  homepage" />
      </Helmet>
      <Container>
        <Banner />
        <Category />
        <Suggest />
        <BannerWeek />
        <BannerOffer />
        <HomeNews />
        <CommonSearch />
      </Container>
    </>
  );
}
