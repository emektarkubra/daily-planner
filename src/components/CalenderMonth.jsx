import { useContext, useState } from "react";
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
    tasks,
    setIsOpen,
    setInfo,
    setSelectedDate,
    selectedDate,
  } = useContext(DateContext);

  function handleOpenReminder(index) {
    setIsOpen(true);
    setInfo((prev) => {
      return {
        ...prev,
        startDate: `${selectedYear}-0${selectedMonth}-${selectedDate}`,
        endingDate: `${selectedYear}-0${selectedMonth}-${selectedDate}`,
      };
    });
    setSelectedDate(index + 1);
  }

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
            onClick={() => handleOpenReminder(index)}
            className="grid-item">
            <div
              className={`${
                index + 1 === currentDate &&
                selectedYear === currentYear &&
                selectedMonth === currentMonth + 1
                  ? "current-day"
                  : ""
              }`}>
              {index + 1}
            </div>
            {tasks.map((item, i) => {
              const year = Number(item.startDate.substring(0, 4));
              const month = item.startDate.substring(5, 7).startsWith(0)
                ? Number(item.startDate.substring(6, 7))
                : Number(item.startDate.substring(5, 7));
              const day = item.startDate.substring(8, 10).startsWith(0)
                ? Number(item.startDate.substring(9, 10))
                : Number(item.startDate.substring(8, 10));

              return selectedMonth === month &&
                selectedYear === year &&
                index + 1 === day ? (
                <div className="task-box" key={i}>
                  <div
                    className="header"
                    style={{ backgroundColor: `${item.color}` }}>
                    <span className="content"> {item.header} :</span>

                    {item.content}
                  </div>
                </div>
              ) : null;
            })}
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
