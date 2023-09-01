import { styled } from "styled-components";

export const StyledCalenderMonth = styled.div`
  display: grid;
  grid-template-columns: 14.285% 14.285% 14.285% 14.285% 14.285% 14.285% 14.285%;
  text-align: center;
  font-size: 15px;
  .grid-item {
    border: 1px solid black;
    text-align: center;
    padding: 0 0 5.8vw 0;
    cursor: pointer;
    box-sizing: border-box;
    &:hover {
      background-color: #beb8b837;
    }
  }
  .last-days {
    border: 1px solid black;
    text-align: center;
    padding: 0 0 5.8vw 0;
    color: #808080ac;
    box-sizing: border-box;
  }
  .forward-days {
    border: 1px solid black;
    text-align: center;
    padding: 0 0 5.8vw 0;
    color: #808080ac;
    box-sizing: border-box;
  }
  .current-day {
    background-color: black;
    color: white;
    width: 19%;
    margin: auto;
    border-radius: 5px;
  }
  .task-box {
    margin-bottom: 5px;
  }
  .header {
    font-size: 12px;
    padding: 4px;
    display: flex;
    flex-direction: column;
  }

  .content {
    font-weight: bold;
  }
`;
