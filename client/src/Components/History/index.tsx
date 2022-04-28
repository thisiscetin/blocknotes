import styled from "styled-components/macro";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectCount, increment } from "../../features/counter/counterSlice";

import Header from "../Header";

const History = styled.div`
  width: 280px;
  padding: 0.8rem;
  border-left: 1px dotted #d2d2d2;
  border-bottom: 1px dotted #d2d2d2;
  flex-basis: 80%;
`;

const Line = styled.p`
  font-size: 1rem;
  margin: 0.4rem 0;
`;

const SelectedPage = styled.p`
  font-size: 1rem;
  margin: 0.2rem 0;
`;

export default function () {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <History>
      <Header>history</Header>
      <SelectedPage>note 1</SelectedPage>

      <br />
      <Line>asd - asd</Line>
      <Line>asda - asd</Line>
      <button onClick={() => dispatch(increment())}>{count}</button>
    </History>
  );
}
