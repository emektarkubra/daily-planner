import { useContext } from "react";
import { DateContext } from "../context/DateContext";
import { StyledDateSelect } from "./styled/DateSelect.styled";

export default function DateSelect() {
  const {
    month,
    year,
    setSelectedYear,
    setSelectedMonth,
    selectedYear,
    selectedMonth,
    monthNames,
    setYear,
    setMonth,
  } = useContext(DateContext);

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
      <StyledDateSelect>
        <div className="back-btn">
          <button onClick={handleGoBack}>{"<"}</button>
        </div>
        <div className="date">
          {month} {year}
        </div>
        <div className="next-btn">
          <button onClick={handleGoForward}>{">"}</button>
        </div>
      </StyledDateSelect>
    </>
  );
}
