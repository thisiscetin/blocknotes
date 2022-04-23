import styled from "styled-components/macro";

const Navigation = styled.div`
  width: 280px;
  padding: 0.8rem;
  border-right: 1px dotted #d2d2d2;
`;

const Logo = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 0;
`;

const Line = styled.p`
  font-size: 1.1rem;
  margin: 0.4rem 0;
`;

const CTA = styled.p`
  font-size: 1rem;
  margin: 0.2rem 0;
  text-decoration: underline;
`;

export default function () {
  return (
    <Navigation>
      <Logo>blocknotes</Logo>
      <CTA>add note</CTA>

      <br />
      <Line>note 1</Line>
      <Line>note 2</Line>
      <Line>note 3</Line>
    </Navigation>
  );
}
