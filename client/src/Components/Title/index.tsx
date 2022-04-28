import styled from "styled-components/macro";

const Title = styled.input`
  font-size: 1.4rem;
  font-family: "Merriweather Sans", sans-serif;
  border: none;
  padding: 0.6rem;
  margin-top: 0.4rem;

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
      placeholder="click and give me a title.."
      value={title}
      onChange={(e) => onTitleChange(e.target.value)}
    />
  );
}
