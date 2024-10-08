import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from 'app/components/container';
import { Banner } from './components/banner';
import { Category } from './components/category';
import { Suggest } from './components/suggest';
import { BannerWeek } from './components/banner-week';
import { BannerOffer } from './components/banner-offer';
import { HomeNews } from './components/home-news';
import { CommonSearch } from './components/common-search';

export function MyHomePage() {
  return (
    <>
      <Helmet>
        <title>My Home Page</title>
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
