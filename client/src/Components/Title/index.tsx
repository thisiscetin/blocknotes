import styled from "styled-components/macro";

const Title = styled.input`
  font-size: 1.6rem;
  font-weight: bold;
  border: none;
  padding: 0.6rem;
  margin-top: 0.6rem;

  :focus {
    outline: none;
  }
`;

interface TitleProps {
  title: string;
  onTitleChange: (title: string) => void;
}

export default function ({ title, onTitleChange }: TitleProps) {
  return (
    <Title value={title} onChange={(e) => onTitleChange(e.target.value)} />
  );
}
