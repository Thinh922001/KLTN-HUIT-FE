import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

export function PrivateRoute() {
  return (
    <>
      <Helmet>
        <title>Private route</title>
        <meta name="description" content="private route" />
      </Helmet>
      <Wrapper>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati,
        ipsa? Eveniet molestiae nemo neque repellat id quia, dolore quo
        aspernatur perferendis itaque sequi autem natus tempora, totam eius
        perspiciatis debitis.
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: aqua;
`;
