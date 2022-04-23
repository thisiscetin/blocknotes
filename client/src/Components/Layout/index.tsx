import { ReactNode } from "react";
import styled from "styled-components/macro";
import RightPane from "../RightPane";
import Navigation from "../Navigation";
import History from "../History";
import Sync from "../Sync";

const Layout = styled.div`
  display: flex;
`;

export default function ({ children }: { children: ReactNode }) {
  return (
    <Layout>
      <Navigation />

      {children}

      <RightPane>
        <Sync />
        <History />
      </RightPane>
    </Layout>
  );
}
