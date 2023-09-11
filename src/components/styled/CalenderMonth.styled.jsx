import { styled } from "styled-components";

export const StyledCalenderMonth = styled.div`
  display: grid;
  grid-template-columns: 14.285% 14.285% 14.285% 14.285% 14.285% 14.285% 14.285%;
  text-align: center;
  font-size: 15px;
  .grid-item {
    border: 1px solid black;
    height: 7.8vw;
    padding: 0 0 5.8vw 0;
    cursor: pointer;
    box-sizing: border-box;
    overflow: hidden;
    &:hover {
      background-color: #beb8b837;
    }
  }
  .last-days {
    border: 1px solid black;
    padding: 0 0 5.8vw 0;
    color: #808080ac;
    box-sizing: border-box;
    height: 7.8vw;
  }
  .forward-days {
    border: 1px solid black;
    text-align: center;
    padding: 0 0 5.8vw 0;
    color: #808080ac;
    box-sizing: border-box;
    height: 7.8vw;
  }
  .current-day {
    background-color: black;
    color: white;
    width: 19%;
    margin: auto;
    border-radius: 5px;
  }

  .task-box {
    margin-bottom: 0.6vw;
    padding: 0.7vw;
  }

  .content-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .info-box {
    & > .hour {
      font-size: 0.8vw;
      font-weight: bold;
      width: 20%;
    }
    & > .header {
      font-size: 12px;
      overflow: hidden;
      width: 70%;
    }
  }
  .btn-close {
    color: black;
    border: none;
    cursor: pointer;
    font-size: 14px;
    padding: 0px;
    width: 10%;
  }
`;
