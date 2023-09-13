import { styled } from "styled-components";

export const StyledDateModal = styled.div`
  margin: 2vw;
  position: fixed;
  top: 0vw;
  left: 25vw;
  border: 1px solid black;
  border-radius: 0.5vw;
  background-color: white;
  width: 40vw;
  height: 32vw;
  padding: 2vw;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  box-shadow: 5px 5px 20px #888888;
  &::-webkit-scrollbar {
    width: 5px;
    background-color: #eaeaea;
    border-left: 1px solid #ccc;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #596971;
    border-radius: 1vw;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #2e3944;
  }

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
    cursor: pointer;
    position: fixed;
    left: 67vw;

    &:hover {
      color: #6c757d;
    }
  }

  .input-header {
    font-size: 15px;
    padding: 10px 10px 10px 5px;
    display: inline-block;
    width: 27vw;
    border: none;
    border-bottom: 1px solid #515151;
    background: transparent;
    outline: none;
  }

  .input-content {
    font-size: 15px;
    padding: 10px 10px 10px 5px;
    display: inline-block;
    width: 27vw;
    border: none;
    border-bottom: 1px solid #515151;
    background: transparent;
    outline: none;
  }

  input[type="color"] {
    background-color: white;
    border: none;
    width: 30px;
    height: 30px;
    cursor: pointer;
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
    width: 85%;
    display: flex;
  }

  .task-content {
    width: 100%;
    margin-left: 1vw;
    overflow: hidden;
    word-wrap: break-word;
  }

  .btn {
    font-size: 14px;
    border: none;
    cursor: pointer;
    padding: 0.2vw;
  }

  .alert {
    text-align: center;
  }

  .emoji-picker {
    position: fixed;
    right: 35vw;
    top: 9.5vw;
  }

  .select-emoji {
    background-color: white;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }

  .select-visual {
    width: 6vw;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  .select-header-box {
    display: flex;
  }

  .emoji-img {
    width: 2vw;
  }
`;