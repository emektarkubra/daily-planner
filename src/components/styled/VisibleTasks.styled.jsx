import { styled } from "styled-components";

export const StyledVisibleTasks = styled.div`
  .task-info {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 18px;
    font-size: 14px;
  }

  .date-info {
    margin: auto;
    margin-bottom: 5px;
    font-size: 18px;
    padding-left: 9px;
  }

  hr {
    border-top: dotted 1px;
  }

  .task-time {
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
  }

  .task {
    width: 85%;
    display: flex;
  }

  .horizontal-line {
    height: 17px;
    width: 5px;
    border-radius: 5px;
  }

  .task-content {
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: 0.5vw;
    overflow: hidden;
    word-wrap: break-word;
  }

  .header-info {
    font-weight: bold;
  }

  .content-info {
    padding: 2px;
  }

  .emoji-box {
    border: none;
  }
  img {
    border: none;
  }

  .btn {
    background-color: white;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  .alert {
    text-align: center;
  }

  .emoji {
    width: 18px;
    height: 18px;
  }
`;
