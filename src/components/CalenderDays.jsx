import { useContext } from "react";
import { DateContext } from "../context/DateContext";
import { StyledCalenderDays } from "./styled/CalenderDays.styled";

export default function CalenderDays() {
  const { dayNames } = useContext(DateContext);

  return (
    <>
      <StyledCalenderDays>
        {dayNames.map((day, index) => (
          <div key={index} className="grid-item">
            {day}
          </div>
        ))}
      </StyledCalenderDays>
    
    </>
  );
}
