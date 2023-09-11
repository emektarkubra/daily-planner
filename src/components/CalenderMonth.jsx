import { useContext, useEffect, useState } from "react";
import { DateContext } from "../context/DateContext";
import { StyledCalenderMonth } from "./styled/CalenderMonth.styled";
import { BsX } from "react-icons/bs";

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
    setSelectedDate,
    selectedDate,
    setTask,
    setTasks,
    visibleTasks, setVisibleTasks, task
  } = useContext(DateContext);

  useEffect(() => {
    const filteredTasks = tasks.filter(item => item.startDate === `${selectedYear}-0${selectedMonth}-${selectedDate}`);
    setVisibleTasks(filteredTasks);
  }, [selectedDate, tasks, task]);

  useEffect(() => {
    setVisibleTasks(visibleTasks); // Güncel visibleTasks değeri
  }, [visibleTasks]);


  let someCondition = false;
  function handleOpenReminder(index) {
    if (!someCondition) {
      setIsOpen(true);
      setTask((prev) => {
        return {
          ...prev,
          startDate: `${selectedYear}-0${selectedMonth}-${selectedDate}`,
        };
      });
      setVisibleTasks(visibleTasks)
      setSelectedDate(index + 1);
    }
  }

  function handleRemoveNote(id) {
    const filteredTasks = tasks.filter(item => item.id !== id)
    setTasks(filteredTasks)
    localStorage.setItem("taskList", JSON.stringify(filteredTasks))
    someCondition = true
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
              className={`${index + 1 === currentDate &&
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
                <div style={{ backgroundColor: `${item.color}` }} className="task-box" key={i}>
                  <div className="content-box">
                    <div className="info-box">

                      <span className="hour"> {item.startHour} |</span>
                      <span className="header"> {item.header}</span>
                    </div>
                    <button onClick={() => handleRemoveNote(item.id)} className="btn-close" style={{ backgroundColor: `${item.color}` }}><BsX /></button>
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
