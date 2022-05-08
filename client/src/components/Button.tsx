import styled from "styled-components/macro";

const Button = styled.button`
  padding: 0.6rem 0.8rem;
  font-size: 1.1rem;
  margin: 1.4rem 0;
  transition: 0.2s;
  background-color: #d2d2d2;
  border: 0.1rem solid black;
  color: black;

  cursor: pointer;

  :hover {
    background-color: #a2a2a2;
  }
`;

export default Button;
