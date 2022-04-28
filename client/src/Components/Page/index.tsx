import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  titleChange,
  bodyChange,
  selectedTitle,
  selectedBody,
  selectedNote,
  noteChange,
} from "../../features/notes/notesSlice";
import styled from "styled-components/macro";

import Title from "../Title";
import Body from "../Body";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding: 0.8rem;
`;

export default function () {
  const title = useAppSelector(selectedTitle);
  const body = useAppSelector(selectedBody);
  const noteIndex = useAppSelector(selectedNote);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(noteChange(noteIndex));
  }, [noteIndex, dispatch]);

  return (
    <Page>
      <Title title={title} onTitleChange={(s) => dispatch(titleChange(s))} />
      <Body content={body} onContentChange={(s) => dispatch(bodyChange(s))} />
    </Page>
  );
}
