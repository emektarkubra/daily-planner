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
    cursor: pointer;
    padding: 0;
    border-radius: 10px;
    width: 20px;
    height: 20px;
  }

  input[type="color"]::-webkit-color-swatch {
    border: none;
    border-radius: 15px;
    padding: 0;
  }
  input[type="color"]::-webkit-color-swatch-wrapper {
    border: none;
    border-radius: 10px;
    padding: 0;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding: 0.4vw; */
    margin: 1.5vw;
    font-size: 14px;
  }

  .date-info {
    margin: auto;
    margin-bottom: 1.2vw;
    font-size: 18px;
    padding-left: 0.4vw;
  }

  hr {
    border-top: dotted 1px;
  }

  .task-time {
    width: 4.3vw;
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
    width: 0.3vw;
    border-radius: 5vw;
    height: 1.4vw;
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
    padding: 0.2vw;
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

  .emoji {
    width: 18px;
    height: 18px;
  }
`;
