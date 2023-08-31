import { styled } from "styled-components";

export const StyledCalenderDays = styled.div`
  display: grid;
  grid-template-columns: 8.5vw 8.5vw 8.5vw 8.5vw 8.5vw 8.5vw 8.5vw;

  .grid-item {
    border: 1px solid black;
    text-align: center;
    font-size: 1.2vw;
    padding: 5px;
  }
`;
