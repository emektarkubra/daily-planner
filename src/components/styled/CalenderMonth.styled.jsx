import { styled } from "styled-components";

export const StyledCalenderMonth = styled.div`
  display: grid;
  grid-template-columns: 8.5vw 8.5vw 8.5vw 8.5vw 8.5vw 8.5vw 8.5vw;
  text-align: center;

  .grid-item-0 {
    border: 1px solid black;
    grid-column: ${({ $columnIndex }) => {
      return $columnIndex;
    }};
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
`;
