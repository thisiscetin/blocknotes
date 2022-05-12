import styled from "styled-components/macro";

import Header from "../../components/Header";
import Button from "../../components/Button";

const Sync = styled.div`
  width: 280px;
  padding: 0.8rem;
  border-left: 1px dotted #d2d2d2;
  border-bottom: 1px dotted #d2d2d2;
  flex-basis: 20%;
`;

const Desc = styled.p`
  font-size: 0.9rem;
  color: #d2d2d2;
`;

export default function () {
  return (
    <Sync>
      <Header>sync</Header>
      <Button>🔗 connect wallet</Button>

      <Desc>
        To access your data on different machines and sync your changes to the
        blockchain you need to connect your wallet.
      </Desc>
    </Sync>
  );
}
