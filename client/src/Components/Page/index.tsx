import { useState } from "react";
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
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  return (
    <Page>
      <Title title={title} onTitleChange={setTitle} />
      <Body content={body} onContentChange={setBody} />
    </Page>
  );
}
