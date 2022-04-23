import styled from "styled-components/macro";

const Body = styled.textarea`
  display: block;
  padding: 0.6rem;
  margin-top: 1rem;
  border: none;
  resize: none;
  height: 100vh;
  font-size: 1.1rem;

  :focus {
    outline: none;
  }
`;

interface BodyProps {
  content: string;
  onContentChange: (content: string) => void;
}

export default function ({ content, onContentChange }: BodyProps) {
  return (
    <Body value={content} onChange={(e) => onContentChange(e.target.value)} />
  );
}
