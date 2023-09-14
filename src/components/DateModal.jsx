import { useContext, useState } from "react";
import { StyledDateModal } from "./styled";
import { v4 as uuidv4 } from "uuid";
import { BsXLg, BsPencilSquare, BsFillTrash3Fill } from "react-icons/bs";
import Picker from 'emoji-picker-react';
import DateContext from "../context";


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
    selectedDate,
    dayNames,
    firstDay,
    visibleTasks,
    isVisibleEmojiPicker,
    setIsVisibleEmojiPicker
  } = useContext(DateContext);


  const [isEdited, setIsEdited] = useState(false);
  const [chosenEmojiSrc, setChosenEmojiSrc] = useState(null);


  function handleSubmitInfo(e) {
    e.preventDefault();
    if (isEdited) {
      const index = tasks.findIndex(item => item.id === task.id)
      tasks.splice(index, 1, task)
      localStorage.setItem("taskList", JSON.stringify(tasks))

    } else {
      task.id = uuidv4();
      task.emojiUrl = chosenEmojiSrc;
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


  // emoji için
  function handleSelectEmoji(e) {
    e.preventDefault()
    setIsVisibleEmojiPicker(prev => !prev)
  }
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmojiSrc(emojiObject.target.src);
    setIsVisibleEmojiPicker(false)
  };

  return (
    <>
      <StyledDateModal>
        <button
          onClick={handleTurnBackToCalender}
          type="button"
          className="cancel-btn">
          <BsXLg />
        </button>
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
            <div className="select-header-box">
              <input onChange={handleChange} type="text" className="input-header" placeholder="Header" name="header" value={task.header} maxLength="16" required />
              <div className="select-visual">
                <input onChange={handleChange} type="color" id="favcolor" name="color" value={task.color} />
                <button onClick={handleSelectEmoji} className="select-emoji">
                  <img className="emoji-img" src={chosenEmojiSrc === null ? "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f603.png" : chosenEmojiSrc} alt="" />
                </button>
              </div>
            </div>
          </div>
          <input onChange={handleChange} type="text" className="input-content" placeholder="Content" name="content" value={task.content} minLength="3" maxLength="80" required />
          <br />
          <label className="start-label" htmlFor=""> Start date : </label>
          <input onChange={handleChange} type="date" className="start-date" value={`${yY}-${mM}-${dD}`} name="startDate" required />
          <br />
          <input onChange={handleChange} type="time" className="start-hour" value={task.startHour} name="startHour" required />
          <br />
          <div className="buttons">
            <button type="submit" className="submit-btn">Submit</button>
          </div>
          {
            isVisibleEmojiPicker ? <div className="emoji-picker">
              <Picker onEmojiClick={onEmojiClick} height={350}
                width="100%" />
            </div> : null
          }
        </form>
        {
          visibleTasks.length === 0 ? <div className="alert"><h2>Couldn't found any tasks</h2></div> :
            (<>
              <div className="tasks-info">
                <div className="date-info">
                  {`${dD} ${findDayOfMonth()}`}
                </div>
                <hr />
                {
                  visibleTasks.map((item) => (
                    <>
                      <div key={item.id} className="task-info">
                        <div className="task">
                          <div className="task-time">
                            <span>{item.startHour}</span>
                            <div style={{ backgroundColor: `${item.color}` }} className="horizontal-line"></div>
                          </div>
                          <div className="task-content">
                            <div className="header-info">{item.header}:</div>
                            <div className="content-info">{item.content}</div>
                            <div className="emoji-box">{item.emojiUrl && <img className="emoji" src={item.emojiUrl} alt="" />}</div>
                          </div>
                        </div>
                        <div className="btn btn-group">
                          <button onClick={() => handleEditNote(item.id)} className="btn btn-edit">
                            <BsPencilSquare />
                          </button>
                          <button onClick={() => handleRemoveNote(item.id)} className="btn btn-remove">
                            <BsFillTrash3Fill />
                          </button>
                        </div>
                      </div>
                    </>
                  ))}
              </div>
            </>)
        }
      </StyledDateModal>
    </>
  );
}
