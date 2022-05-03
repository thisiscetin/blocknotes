import { ReactNode } from "react";
import styled from "styled-components/macro";
import Navigation from "./Navigation";
import History from "./History";
import Sync from "../features/sync/SyncPane";

const RightPane = styled.div`
  display: flex;
  flex-direction: column;
`;

const Layout = styled.div`
  display: flex;
  max-height: 100vh;
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
