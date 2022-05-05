import styled from "styled-components/macro";

const Button = styled.button`
  padding: 0.2rem 0.4rem;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 1.4rem 0;
  border: 0.2rem solid gray;
  border-radius: 0.6rem;
  transition: 0.2s;
  background-color: #d2d2d2;
  color: black;

  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
  }
`;

export default Button;
