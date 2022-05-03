import { useEffect } from "react";
import md5 from "blueimp-md5";

import type { NoteState } from "./notesSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { notes, setVersion } from "./notesSlice";

export default function () {
  const notesArr = useAppSelector(notes);

  const dispatch = useAppDispatch();

  const calculateVersion = (allNotes: NoteState[]) => {
    return md5(JSON.stringify(allNotes));
  };

  useEffect(() => {
    dispatch(setVersion(calculateVersion(notesArr)));
  }, [notesArr, dispatch]);

  return null;
}
