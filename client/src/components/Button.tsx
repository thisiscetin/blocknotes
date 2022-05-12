import styled from "styled-components/macro";

const Button = styled.button`
  padding: 0.5rem 0.8rem;
  font-size: 1.1rem;
  margin: 1.4rem 0;
  transition: 0.2s;
  background-color: white;
  border: 0.1rem solid black;
  color: #241f1f;

  cursor: pointer;

  :hover {
    background-color: #d2d2d2;
  }
`;

export default Button;
