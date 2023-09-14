import { styled } from "styled-components";

export const StyledDateModal = styled.div`
  margin: 2vw;
  position: fixed;
  top: 0vw;
  left: 25vw;
  border: 1px solid black;
  border-radius: 0.5vw;
  background-color: white;
  width: 550px;
  height: 480px;
  padding: 30px;
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
    border-radius: 15px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #2e3944;
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 30px;
  }

  .cancel-box {
    border: "1px solid red";
  }

  .cancel-btn {
    border: none;
    background-color: white;
    font-size: 15px;
    cursor: pointer;
    text-align: right;

    &:hover {
      color: #6c757d;
    }
  }

  .input-header {
    font-size: 15px;
    padding: 10px 10px 10px 5px;
    display: inline-block;
    width: 365px;
    border: none;
    border-bottom: 1px solid #515151;
    background: transparent;
    outline: none;
  }

  .input-content {
    font-size: 15px;
    padding: 10px 10px 10px 5px;
    display: inline-block;
    width: 365px;
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
    margin: 3px;
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
  .select-visual {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  .select-emoji {
    background-color: white;
    border: none;
    font-size: 18px;
    outline: none;
    cursor: pointer;
  }
  .emoji-picker {
    position: fixed;
    right: 35vw;
    top: 9.5vw;
  }
  .select-header-box {
    display: flex;
  }
  .emoji-img {
    width: 2vw;
  }

  .start-label {
    color: #515151;
  }

  .start-date {
    width: 100px;
    font-size: 12px;
    height: 20px;
  }

  .start-hour {
    font-size: 12px;
    width: 65px;
    height: 20px;
  }

  .submit-btn {
    border: none;
    border-radius: 5px;
    outline: none;
    background-color: #909396;
    color: white;
    font-size: 15px;
    width: 90px;
    padding: 5px;
    cursor: pointer;
    &:hover {
      background-color: #6c757d;
    }
  }

  .buttons {
    width: 100px;
    display: flex;
    justify-content: space-between;
  }
`;
