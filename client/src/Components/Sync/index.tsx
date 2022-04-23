import styled from "styled-components/macro";

const Sync = styled.div`
  width: 280px;
  padding: 0.8rem;
  border-left: 1px dotted #d2d2d2;
  border-bottom: 1px dotted #d2d2d2;
  flex-basis: 20%;
`;

const Header = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 0;
`;

const Line = styled.p`
  font-size: 1.1rem;
  margin: 0.4rem 0;
`;

const LastSync = styled.p`
  font-size: 1rem;
  margin: 0.2rem 0;
`;

export default function () {
  return (
    <Sync>
      <Header>sync</Header>
      <LastSync>last sync: 22-04-16 13:14:00</LastSync>

      <br />
      <Line>asd - asd</Line>
    </Sync>
  );
}
