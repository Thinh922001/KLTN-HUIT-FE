import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from 'app/components/container';
import { Banner } from './components/banner';
import { Category } from './components/category';
import { Suggest } from './components/suggest';
import { BannerWeek } from './components/banner-week';

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
      </Container>
    </>
  );
}
