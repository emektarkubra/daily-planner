import { useContext, useEffect, useState } from "react";
import { DateContext } from "../context/DateContext";
import { StyledDateInfo } from "./styled/StyledDateInfo";

export default function DateInfo() {
  const {
    setIsOpen,
    defaultInfo,
    info,
    setInfo,
    task,
    setTask,
    setTasks,
    yY,
    dD,
    mM,
  } = useContext(DateContext);

  useEffect(() => {
    setTask(info); // info değiştiğinde task'ı güncelle
  }, [info, setTask]);


  function handleSubmitInfo(e) {
    e.preventDefault();
    setIsOpen(false);
    setTask(info)
    setTasks(prev => [...prev, task])
    setInfo(defaultInfo);
    e.target.reset();
  }

  function handleChange(e) {
    setInfo((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleTurnBackToCalender(e) {
    setIsOpen(false);
  }

  return (
    <>
      <StyledDateInfo>
        <form action="" onSubmit={handleSubmitInfo}>
          <input onChange={handleChange} type="text" className="input-header" placeholder="Başlık" name="header" required />
          <input onChange={handleChange} type="color" id="favcolor" name="color" value={info.color} />
          <br />
          <input onChange={handleChange} type="text" className="input-content" placeholder="İçerik" name="content" required />
          <br />
          <label className="start-label" htmlFor=""> Start date : </label>
          <label className="ending-label" htmlFor=""> Ending date : </label>
          <br />
          <input onChange={handleChange} type="date" className="start-date" value={`${yY}-${mM}-${dD}`} name="startDate" />
          <input onChange={handleChange} type="date" className="ending-date" value={`${yY}-${mM}-${dD}`} name="endingDate" />
          <br />
          <input onChange={handleChange} type="time" className="start-hour" value={info.startHour} name="startHour" required />
          <input onChange={handleChange} type="time" className="ending-hour" value={info.endingHour} name="endingHour" />
          <br />
          <button onClick={handleTurnBackToCalender} type="button" className="cancel-btn">
            İptal
          </button>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </StyledDateInfo>
    </>
  );
}
