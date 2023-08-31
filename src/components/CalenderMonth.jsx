import { useContext } from "react";
import { DateContext } from "../context/DateContext";
import { StyledCalenderMonth } from "./styled/CalenderMonth.styled";

export default function CalenderMonth() {
  const {
    firstDay,
    lastDay,
    dayInMonth,
    beforeDayInMonth,
    currentDate,
    currentYear,
    currentMonth,
    selectedYear,
    selectedMonth,
  } = useContext(DateContext);


  return (
    <>
      <StyledCalenderMonth className="grid-container">
        {/* Bir önceki aydan taşan ayın günleri */}
          {[...Array(firstDay.getDay())].map((item, index) => (
            <div key={index} className="last-days">
              {beforeDayInMonth - firstDay.getDay() + index + 1}
            </div>
          ))}
        {/* ayın günleri */}
        {[...Array(dayInMonth)].map((item, index) => (
          <div
            key={index}
            style={{
              border: {},
              textAlign: "center",
              padding: "0 0 60px 0",
            }}
            className={`grid-item  `}>
            <div
              className={`${
                index + 1 === currentDate &&
                selectedYear === currentYear &&
                selectedMonth === currentMonth
                  ? "current-day"
                  : ""
              }`}>
              {index + 1}{" "}
            </div>
          </div>
        ))}
        {/* Bir sonraki aydan taşan ayın günleri */}
        {[...Array(7 - lastDay.getDay() - 1)].map((item, index) => (
          <div key={index} className="forward-days">
            {index + 1}
          </div>
        ))}
      </StyledCalenderMonth>
    </>
  );
}
