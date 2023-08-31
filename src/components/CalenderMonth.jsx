import { useContext } from "react";
import { DateContext } from "./context/DateContext";
import { StyledCalenderMonth } from "./styled/CalenderMonth.styled";

export default function CalenderMonth() {
  const { date, firstDay, lastDay, dayInMonth, beforeDayInMonth } = useContext(DateContext);

  return (
    <>
      <StyledCalenderMonth
        className="grid-container"
        $columnIndex={firstDay.getDay() + 1}> {/* 0. grid konumu için burada styled elemente props geçirildi */}
        
        {/* Bir önceki aydan taşan ayın günleri */}
        {
          [...Array(firstDay.getDay())].map((item, index) => (
            <div key={index} className="last-days">
              {beforeDayInMonth - firstDay.getDay() + index + 1}
            </div>
          ))
        }

        {/* ayın günleri */}
        {
          [...Array(dayInMonth)].map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid black",
                textAlign: "center",
                padding: "0 0 60px 0",
              }}
              className={`grid-item-${index}`}>
              {
                date.getDate() === firstDay.getDate() + index ? (
                  <div style={{ border: "1px solid red" }}>
                    {firstDay.getDate() + index}
                  </div>
                ) : (firstDay.getDate() + index) /* Burada 0. index için özel bir css vermek için index ile adlandırıldı */
              }
            </div>
          ))
        }

        {/* Bir sonraki aydan taşan ayın günleri */}
        {
          [...Array(7 - lastDay.getDay() - 1)].map((item, index) => (
            <div key={index} className="forward-days">
              {index + 1}
            </div>
          ))
        }
      </StyledCalenderMonth>
    </>
  );
}
