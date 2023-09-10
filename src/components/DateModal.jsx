import { useContext, useState } from "react";
import { DateContext } from "../context/DateContext";
import { StyledDateModal } from "./styled/DateModal.styled";
import { v4 as uuidv4 } from "uuid";
import { BsXLg, BsPencilSquare } from "react-icons/bs";

export default function DateModal() {
  const {
    setIsOpen,
    defaultInfo,
    task,
    setTask,
    setTasks,
    yY,
    dD,
    mM,
    tasks,
    visibleTasks,
    selectedDate,
    dayNames,
    firstDay,
  } = useContext(DateContext);

  function handleSubmitInfo(e) {
    e.preventDefault();
    if (isEdited) {
      const index = tasks.findIndex(item => item.id === task.id)
      tasks.splice(index, 1, task)
      localStorage.setItem("taskList", JSON.stringify(tasks))
    } else {
      task.id = uuidv4();
      setTasks((prev) => [...prev, task]);
      const updatedTasks = [...tasks, task];
      localStorage.setItem("taskList", JSON.stringify(updatedTasks));
    }
    setIsOpen(false);
    setTask(defaultInfo);
    e.target.reset();
  }

  function handleChange(e) {
    setTask((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  const handleTurnBackToCalender = () => {
    setIsOpen(false);
    setTask(defaultInfo);
  };

  // ayın hangi güne geldiğini belirlemek için
  function findDayOfMonth() {
    const firstDayOfMonth = firstDay.getDay();
    const dayOfMonth = (firstDayOfMonth + selectedDate - 1) % 7; // seçilen günün indeksi
    return dayNames[dayOfMonth];
  }

  const [isEdited, setIsEdited] = useState(false);

  function handleEditNote(id) {
    const edited = tasks.find((item) => item.id === id);
    setTask(edited);
    setIsEdited(true);
  }

  function handleRemoveNote(id) {
    const filteredTasks = tasks.filter((item) => item.id !== id);
    setTasks(filteredTasks);
    localStorage.setItem("taskList", JSON.stringify(filteredTasks));
  }

  return (
    <>
      <StyledDateModal>
        <div className="cancel-box">
          <button
            onClick={handleTurnBackToCalender}
            type="button"
            className="cancel-btn">
            <BsXLg />
          </button>
        </div>
        <form className="task-form" action="" onSubmit={handleSubmitInfo}>
          <div>
            <input onChange={handleChange} type="text" className="input-header" placeholder="Header" name="header" value={task.header} required />
            <input onChange={handleChange} type="color" id="favcolor" name="color" value={task.color} />
          </div>
          <input onChange={handleChange} type="text" className="input-content" placeholder="Content" name="content" value={task.content} required />
          <br />
          <label className="start-label" htmlFor=""> Start date : </label>
          <input onChange={handleChange} type="date" className="start-date" value={`${yY}-${mM}-${dD}`} name="startDate" required />
          <br />
          <input onChange={handleChange} type="time" className="start-hour" value={task.startHour} name="startHour" required />
          <br />
          <div className="buttons">
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>

        {/* bir güne ait task lar  */}
        <div className="tasks-info">
          <div style={{ width: "30%", margin: "auto", textAlign: "center", fontSize: "18px" }}>
            {findDayOfMonth()}
          </div>
          <div style={{ width: "30%", margin: "auto", marginBottom: "1vw", textAlign: "center", fontSize: "14px" }}>
            {`${dD}-${mM}-${yY}`}
          </div>

          {visibleTasks.map((item) => (
            <>
              <div key={item.id} style={{ backgroundColor: `${item.color}` }} className="task-info">
                <div className="task">
                  <div className="task-time">
                    <span>{item.startHour}</span>
                    <div className="">|</div>
                  </div>
                  <div className="task-content">
                    <div>{item.header}:</div>
                    <div>{item.content}</div>
                  </div>
                </div>
                <div className="btn btn-group">
                  <button onClick={() => handleEditNote(item.id)} style={{ backgroundColor: `${item.color}` }} className="btn btn-edit">
                    <BsPencilSquare />
                  </button>
                  <button onClick={() => handleRemoveNote(item.id)} style={{ backgroundColor: `${item.color}` }} className="btn btn-remove">
                    <BsXLg />
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </StyledDateModal>
    </>
  );
}
