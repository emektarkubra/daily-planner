import { styled } from "styled-components";

export const StyledDateModal = styled.div`
  margin: 2vw;
  position: fixed;
  z-index: 1;
  top: 5vw;
  left: 25vw;
  border: 2px solid red;
  background-color: white;
  width: 40vw;
  padding: 2vw;
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    padding: 3vw;
  }

  .cancel-box {
    border: "1px solid red";
  }

  .cancel-btn {
    border: none;
    background-color: white;
    font-size: 1.2vw;
    float: right;
    cursor: pointer;
    &:hover {
      color: #6c757d;
    }
  }

  input[type="text"] {
    font-size: 15px;
    padding: 10px 10px 10px 5px;
    display: inline-block;
    width: 30vw;
    border: none;
    border-bottom: 1px solid #515151;
    background: transparent;
    outline: none;
  }

  input[type="color"] {
    background-color: white;
    border: none;
    width: 25px;
  }

  .start-label {
    color: #515151;
  }

  .start-date {
    width: 9vw;
    font-size: 1vw;
  }

  .start-hour {
    font-size: 0.8vw;
    width: 5vw;
  }

  .submit-btn {
    border: none;
    border-radius: 5px;
    outline: none;
    background-color: #909396;
    color: white;
    font-size: 1.2vw;
    width: 6vw;
    padding: 0.5vw;
    cursor: pointer;
    &:hover {
      background-color: #6c757d;
    }
  }

  .buttons {
    width: 13vw;
    display: flex;
    justify-content: space-between;
  }

  .task-info {
    margin: 0 auto;
    width: 90%;
    border: "1px solid red";
    display: flex;
    justify-content: space-between;
    padding: 1vw;
    margin-bottom: 1vw;
  }

  .task-time {
    border: "1px solid blue";
    width: 4vw;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }

  .task {
    display: flex;
  }

  .task-content {
    margin-left: 1vw;
  }

  .btn {
    font-size: 14px;
    border: none;
    cursor: pointer;
    padding: 0.2vw;
  }
`;
