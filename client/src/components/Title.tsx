import styled from "styled-components/macro";

const Title = styled.input`
  font-size: 1.8rem;
  font-weight: bold;
  border: none;
  padding: 0.6rem;
  margin-top: 0.6rem;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #d2d2d2;
    font-weight: normal;
  }
`;

interface TitleProps {
  title: string;
  onTitleChange: (title: string) => void;
}

export default function ({ title, onTitleChange }: TitleProps) {
  return (
    <Title
      autoFocus
      placeholder="give me a title and hit tab"
      value={title}
      onChange={(e) => onTitleChange(e.target.value)}
    />
  );
}
