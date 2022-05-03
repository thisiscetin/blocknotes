import styled from "styled-components/macro";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import moment from "moment";

import {
  notes,
  noteChange,
  addNote,
  selectedNote,
  removeNote,
} from "../features/notes/notesSlice";

import Button from "./Button";
import Header from "./Header";

const Navigation = styled.div`
  width: 280px;
  overflow-y: auto;
  padding: 0.8rem;
  border-right: 1px dotted #d2d2d2;
`;

interface LineProps {
  selected: boolean;
}

const Line = styled.div<LineProps>`
  display: flex;
  flex-direction: column;
  border: 1px solid #d2d2d2;
  padding: 0.2rem;
  margin: 0.2rem 0;
  background-color: ${(props) => (props.selected ? "#f2f2f2" : "none")};
  color: ${(props) => (props.selected ? "none" : "#d2d2d2")};
  transition: 0.2s;
  cursor: pointer;

  :hover {
    background-color: #f2f2f2;
    color: black;
  }
`;

const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: 0.9rem;
  margin: 0.1rem 0;
`;

const DeleteCTA = styled.span`
  font-size: 0.9rem;
  border: none;
  padding: 0.1rem;
  background: none;
  text-decoration: underline;

  cursor: pointer;
`;

const Time = styled.div`
  text-align: right;
  margin-top: 0.2rem;
  font-size: 0.7rem;
`;

export default function () {
  const notesList = useAppSelector(notes);
  const selectedIndex = useAppSelector(selectedNote);

  const dispatch = useAppDispatch();

  const deleteNote = (index: number) => {
    const title = notesList[index].title;

    if (confirm(`Delete note "${title || "untitled"}"?`)) {
      dispatch(removeNote(index));
    }
  };

  return (
    <Navigation>
      <Header>blocknotes</Header>
      <Button onClick={() => dispatch(addNote())}>📓 new note</Button>

      <br />

      {notesList.map((note, index: number) => (
        <Line
          key={index}
          selected={selectedIndex === index}
          onClick={() => dispatch(noteChange(index))}
        >
          <FirstLine>
            {note.title.length > 15 ? (
              <Title>{note.title.substring(0, 16)}...</Title>
            ) : (
              <Title>{note.title || "untitled"}</Title>
            )}

            {notesList.length > 1 ? (
              <DeleteCTA onClick={() => deleteNote(index)}>[X]</DeleteCTA>
            ) : null}
          </FirstLine>
          <Time>
            {moment.unix(note.createdAt).local().format("YYYY-MM-DD HH:mm")}
          </Time>
        </Line>
      ))}
    </Navigation>
  );
}
