import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import MyHeader from './components/Header';
import styled from 'styled-components/macro';
import { Container } from 'app/components/container';

export function MyHomePage() {
  return (
    <>
      <Helmet>
        <title>My Home Page</title>
        <meta name="description" content="KLTN HUIT  homepage" />
      </Helmet>
      <Header>
        <Container>
          <MyHeader />
        </Container>
      </Header>
    </>
  );
}

const Header = styled.header`
  background-color: #2a83e9;
`;
