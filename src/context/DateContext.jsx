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
  const [visibleTasks, setVisibleTasks] = useState([]);


  // fixed selected date info
  let mM = selectedMonth.toString().length === 1 ? `0${selectedMonth}` : `${selectedMonth}`;
  let dD = selectedDate.toString().length === 1 ? `0${selectedDate}` : `${selectedDate}`;
  let yY = selectedYear.toString().length === 1 ? `0${selectedYear}` : `${selectedYear}`;


  // fixed current date info
  let currentMm = currentMonth.toString().length === 1 ? `0${currentMonth}` : `${currentMonth}`;
  let currentDd = currentDate.toString().length === 1 ? `0${currentDate}` : `${currentDate}`;
  let currentYy = currentYear.toString().length === 1 ? `0${currentYear}` : `${currentYear}`;


  let hour = currentHour.toString().length === 1 ? `0${currentHour}` : `${currentHour}`;
  let minute = currentMinutes.toString().length === 1 ? `0${currentMinutes}` : `${currentMinutes}`;

  const defaultInfo = {
    header: "",
    color: "#ec7373",
    content: "",
    startDate: `${yY}-${mM}-${dD}`,
    startHour: `${hour}:${minute}`,
    emojiUrl: null
  };

  useEffect(() => {
    setTask((prev) => {
      return {
        ...prev,
        startDate: `${selectedYear}-${mM}-${selectedDate}`,
      };
    });
  }, [selectedDate, selectedYear, mM]);


  // for getting data
  const [task, setTask] = useState(defaultInfo);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedNoteList = JSON.parse(localStorage.getItem("taskList"));
    setTasks(storedNoteList ?? []);
  }, []);

  let firstDay = new Date();
  firstDay.setFullYear(year, monthNames.indexOf(month), 1); // first day of the month
  let lastDay = new Date(year, monthNames.indexOf(month) + 1, 0); // last day of the month

  let dayInMonth = new Date(year, monthNames.indexOf(month) + 1, 0).getDate(); // day number of the month
  let beforeDayInMonth = new Date(year, monthNames.indexOf(month), 0).getDate(); // day number of the previous month

  // for emoji
  const [isVisibleEmojiPicker, setIsVisibleEmojiPicker] = useState(false)

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
          currentMm,
          currentDd,
          currentYy,
          visibleTasks,
          setVisibleTasks,
          firstDay,
          task,
          setTask, isVisibleEmojiPicker, setIsVisibleEmojiPicker
        }}>
        {children}
      </DateContext.Provider>
    </>
  );
}
