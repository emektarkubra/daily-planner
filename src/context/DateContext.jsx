import { createContext, useState } from "react";

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
  const currentDate = date.getDate()
  const currentYear = date.getFullYear()
  const currentMonth = date.getMonth()
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(monthNames[currentMonth]);

const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  let firstDay = new Date();
  firstDay.setFullYear(year, monthNames.indexOf(month), 1); // ayın ilk günü
  let lastDay = new Date(year, monthNames.indexOf(month) + 1, 0); // ayın son günü

  let dayInMonth = new Date(year, monthNames.indexOf(month) + 1, 0).getDate(); // ayın kaç gün çektiği
  let beforeDayInMonth = new Date(year, monthNames.indexOf(month), 0).getDate(); // bir önceki ayın kaç gün çektiği

  function handleGoBack(e) {
    if (selectedMonth === 0) {
      setSelectedYear(selectedYear - 1);
      setSelectedMonth(11);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
    setMonth((prev) => {
      let index = monthNames.indexOf(prev);
      if (index - 1 < 0) {
        index = 12;
      }
      return monthNames[index - 1];
    });

    if (month === "January") {
      setYear((prev) => prev - 1);
    }
  }

  function handleGoForward(e) {
    if (selectedMonth === 11) {
      setSelectedYear(selectedYear + 1);
      setSelectedMonth(0);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }

    setMonth((prev) => {
      let index = monthNames.indexOf(prev);
      if (index + 1 > 11) {
        index = -1;
      }
      return monthNames[index + 1];
    });

    if (month === "December") {
      setYear((prev) => prev + 1);
    }
  }

  return (
    <>
      <DateContext.Provider
        value={{
          handleGoBack,
          handleGoForward,
          month,
          year,
          monthNames,
          dayNames,
          date,
          firstDay,
          lastDay,
          dayInMonth,
          beforeDayInMonth,
          currentYear,
          currentMonth,
          currentDate,
          selectedMonth,
          selectedYear
        }}>
        {children}
      </DateContext.Provider>
    </>
  );
}
