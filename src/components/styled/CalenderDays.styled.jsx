import { styled } from "styled-components";

export const StyledCalenderDays = styled.div`
  display: grid;
  grid-template-columns: 14.285% 14.285% 14.285% 14.285% 14.285% 14.285% 14.285%;

  .grid-item {
    border: 1px solid black;
    text-align: center;
    font-size: 1.4vw;
    padding : 0.4vw;
    box-sizing : border-box;
  }
`;
