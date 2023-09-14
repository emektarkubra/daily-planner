import { styled } from "styled-components";

export const StyledCalenderDays = styled.div`
  display: grid;
  grid-template-columns: 175px 175px 175px 175px 175px 175px 175px;

  .grid-item {
    border: 1px solid black;
    text-align: center;
    font-size: 18px;
    padding: 0.4vw;
    box-sizing: border-box;
  }
`;