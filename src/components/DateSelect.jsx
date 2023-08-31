import { useContext } from "react";
import { DateContext } from "../context/DateContext";
import { StyledDateSelect } from "./styled/DateSelect.styled";

export default function DateSelect() {
  const { handleGoBack, handleGoForward, month, year } = useContext(DateContext);

 

  return (
    <>
      <StyledDateSelect>
        <div></div>
        <div></div>
        <button onClick={handleGoBack}>{"<"}</button>
        <div className="date">
          {month} {year}
        </div>
        <button onClick={handleGoForward}>{">"}</button>
        <div></div>
        <div></div>
      </StyledDateSelect> 
    </>
  );
}
