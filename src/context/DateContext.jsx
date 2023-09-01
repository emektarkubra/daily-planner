import { createContext, useEffect, useState } from "react";

export const DateContext = createContext();

export default function DateContextProvider({ children }) {
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date();
  const currentDate = date.getDate();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  let currentHour = date.getHours();
  let currentMinutes = date.getMinutes();

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(monthNames[currentMonth]);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth + 1);
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [isOpen, setIsOpen] = useState(false);

  let mM =
    selectedMonth.toString().length === 1
      ? `0${selectedMonth}`
      : `${selectedMonth}`;
  let dD =
    selectedDate.toString().length === 1
      ? `0${selectedDate}`
      : `${selectedDate}`;
  let yY =
    selectedYear.toString().length === 1
      ? `0${selectedYear}`
      : `${selectedYear}`;

  let hour =
    currentHour.toString().length === 1 ? `0${currentHour}` : `${currentHour}`;
  let minute =
    currentMinutes.toString().length === 1
      ? `0${currentMinutes}`
      : `${currentMinutes}`;

  const defaultInfo = {
    header: "",
    color: "#ec7373",
    content: "",
    startDate: `${yY}-${mM}-${dD}`,
    endingDate: `${yY}-${mM}-${dD}`,
    startHour: ``,
    endingHour: ``,
  };

  useEffect(() => {
    setInfo((prev) => {
      return {
        ...prev,
        startDate: `${selectedYear}-${mM}-${selectedDate}`,
        endingDate: `${selectedYear}-${mM}-${selectedDate}`,
      };
    });
  }, [selectedDate, selectedYear, mM]);

  // for getting data
  const [info, setInfo] = useState(defaultInfo);
  const [task, setTask] = useState(info);
  const [tasks, setTasks] = useState([{ ...task }]);

  let firstDay = new Date();
  firstDay.setFullYear(year, monthNames.indexOf(month), 1); // first day of the month
  let lastDay = new Date(year, monthNames.indexOf(month) + 1, 0); // last day of the month

  let dayInMonth = new Date(year, monthNames.indexOf(month) + 1, 0).getDate(); // day number of the month
  let beforeDayInMonth = new Date(year, monthNames.indexOf(month), 0).getDate(); // day number of the previous month

  return (
    <>
      <DateContext.Provider
        value={{
          month,
          year,
          monthNames,
          dayNames,
          firstDay,
          lastDay,
          dayInMonth,
          beforeDayInMonth,
          currentYear,
          currentMonth,
          currentDate,
          selectedMonth,
          selectedYear,
          selectedDate,
          isOpen,
          setIsOpen,
          defaultInfo,
          info,
          setInfo,
          task,
          setTask,
          tasks,
          setTasks,
          setSelectedDate,
          yY,
          dD,
          mM,
          setYear,
          setMonth,
          setSelectedYear,
          setSelectedMonth,
        }}>
        {children}
      </DateContext.Provider>
    </>
  );
}
