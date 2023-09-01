import { styled } from "styled-components";

export const StyledDateInfo = styled.div`
  margin: 2vw;
  position: fixed;
  z-index : 1; 
  top:5vw;
  left: 25vw;
  border: 2px solid red;
  background-color : white;
  width : 40vw;
  padding : 2vw 0vw 2vw 6vw;

  input[type="text"] {
    
   font-size: 15px;;
    padding: 10px 10px 10px 5px;
    display: inline-block;
    width: 30vw;
    border: none;
    border-bottom: 1px solid #515151;
    background: transparent;
    outline: none;
    margin: auto;
    margin-bottom: 2vw;
  }
  
  input[type="color"] {
    background-color: white;
    border: none;
    width: 25px;
  }

  .start-label {
    color: #515151;
    margin-left: 1vw;
  }
  .ending-label {
    color: #515151;
    margin-left: 15vw;
  }

  .start-date {
    /* margin: auto; */
    width: 9vw;
    padding: 0.3vw;
    font-size: 1vw;
    margin-left: 1vw;
  }
  .ending-date {
    /* margin: auto; */
    width: 9vw;
    padding: 0.3vw;
    font-size: 1vw;
    margin-left: 9vw;
  }

  .start-hour {
    font-size: 0.8vw;
    width: 5vw;
    margin-top: 1vw;
    margin-left: 1vw;
  }
  .ending-hour {
    font-size: 0.8vw;
    width: 5vw;
    margin-top: 1vw;
    margin-left: 13.6vw;
    margin-bottom : 2vw;
  }

  .cancel-btn {
    border: none;
    border-radius: 5px;
    outline: none;
    background-color: #909396;
    color: white;
    font-size: 1.2vw;
    width: 6vw;
    padding: 0.3vw;
    margin-left: 8vw;
    cursor: pointer;
    &:hover {
      background-color: #6c757d;
    }
  }
  .submit-btn {
    border: none;
    border-radius: 5px;
    outline: none;
    background-color: #909396;
    color: white;
    font-size: 1.2vw;
    width: 6vw;
    padding: 0.3vw;
    margin: 1vw;
    cursor: pointer;
    &:hover {
      background-color: #6c757d;
    }
  }
`;
