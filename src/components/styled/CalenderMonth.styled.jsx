import { styled } from "styled-components";

export const StyledCalenderMonth = styled.div`
  display: grid;
  grid-template-columns: 175px 175px 175px 175px 175px 175px 175px;
  text-align: center;
  font-size: 15px;
  .grid-item {
    border: 1px solid black;
    height: 7.8vw;
    padding: 0 0 5.8vw 0;
    cursor: pointer;
    box-sizing: border-box;
    overflow: hidden;
    height: 100px;
    &:hover {
      background-color: #beb8b837;
    }
  }
  .last-days {
    border: 1px solid black;
    border-bottom: 1px solid black;
    padding: 0 0 5.8vw 0;
    color: #808080ac;
    box-sizing: border-box;
    height: 100px;
  }
  .forward-days {
    border: 1px solid black;
    text-align: center;
    padding: 0 0 5.8vw 0;
    color: #808080ac;
    box-sizing: border-box;
    height: 100px;
  }
  .current-day {
    background-color: black;
    color: white;
    width: 19%;
    margin: auto;
    border-radius: 5px;
  }

  .task-box {
    margin-bottom: 0.2vw;
    padding-left: 0.7vw;
  }

  .content-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .info-box {
    width: 100%;
    display: flex;
    & > .header {
      font-size: 12px;
      overflow: hidden;
      /* width: 70%; */
      padding: 0.2vw;
    }
  }

  img {
    width: 20px;
  }

  .horizontal-line {
    width: 0.3vw;
    border-radius: 5vw;
  }
`;
