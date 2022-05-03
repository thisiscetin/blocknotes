import styled from "styled-components/macro";

const Button = styled.button`
  padding: 0.3rem 0.4rem;
  font-size: 0.95rem;
  font-weight: bold;
  margin: 1.4rem 0;
  border: 0.1rem solid gray;
  border-radius: 0.2rem;
  transition: 0.2s;

  color: #343231;

  cursor: pointer;

  :hover {
    border: 0.1rem solid black;
  }
`;

export default Button;
