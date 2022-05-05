import styled from "styled-components/macro";
import { useAppSelector } from "../app/hooks";
import { version } from "../features/notes/notesSlice";

import Header from "./Header";

const History = styled.div`
  width: 280px;
  padding: 0.8rem;
  border-left: 1px dotted #d2d2d2;
  border-bottom: 1px dotted #d2d2d2;
  flex-basis: 80%;
`;

const Desc = styled.p`
  font-size: 0.9rem;
  color: #d2d2d2;
`;

const Line = styled.li`
  list-style-type: circle;
  font-size: 0.8rem;
  transition: 0.2s;

  :hover {
    text-decoration: underline;
  }
`;

const SectionHeader = styled.h3`
  color: #565454;
  margin: 0.6rem 0;
  padding: 0.2rem 0;
  border-bottom: 1px solid #f2f2f2;
`;

export default function () {
  const liveVersion = useAppSelector(version);

  return (
    <History>
      <Header>history</Header>
      <Desc>
        Every version persisted to blockchain will appear here. You can go back
        and forth in history.
      </Desc>

      <SectionHeader>live version</SectionHeader>
      <ul>
        <Line>{liveVersion}</Line>
      </ul>

      <br />
      <SectionHeader>previous versions</SectionHeader>
    </History>
  );
}
