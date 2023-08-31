import { styled } from "styled-components";

export const StyledCalenderMonth = styled.div`
  display: grid;
  grid-template-columns: 8.5vw 8.5vw 8.5vw 8.5vw 8.5vw 8.5vw 8.5vw;
  text-align: center;

  .grid-item {
    border: 1px solid black;
    text-align : center;
  }

  .last-days {
    border: 1px solid black;
    text-align: center;
    padding: 0 0 60px 0;
    color: #808080ac;
  }
  .forward-days {
    border: 1px solid black;
    text-align: center;
    padding: 0 0 60px 0;
    color: #808080ac;
  }
  .current-day {
    background-color : black;
    color : white;
    width : 19%;
    margin :auto;
    border-radius : 5px;
  }
`;
