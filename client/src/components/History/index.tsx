import styled from "styled-components/macro";
import { useAppSelector } from "../../app/hooks";
import { versionHistory } from "../../features/notes/notesSlice";

import Header from "../Header";

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

  :hover {
    text-decoration: underline;
  }
`;

const SectionHeader = styled.p`
  font-size: 0.9rem;
  margin: 0.6rem 0;
  padding: 0.2rem 0;
  border-bottom: 1px solid #f2f2f2;
  font-style: italic;
`;

export default function () {
  const vHistory = useAppSelector(versionHistory);

  return (
    <History>
      <Header>history</Header>
      <Desc>
        Every version persisted to blockchain will appear here. You can go back
        and forth in history.
      </Desc>

      <SectionHeader>live version</SectionHeader>
      <ul>
        {vHistory.map((v) => (
          <Line>{v.substring(0, 23)}</Line>
        ))}
      </ul>

      <br />
      <SectionHeader>previous versions</SectionHeader>
    </History>
  );
}
