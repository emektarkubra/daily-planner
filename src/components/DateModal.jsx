import { useContext } from "react";
import { StyledDateModal } from "./styled";
import { v4 as uuidv4 } from "uuid";
import { BsXLg } from "react-icons/bs";
import Picker from 'emoji-picker-react';
import DateContext from "../context";
import VisibleTasks from "./VisibleTasks";

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
    isEdited,
    isVisibleEmojiPicker,
    setIsVisibleEmojiPicker, 
    chosenEmojiSrc, 
    setChosenEmojiSrc
  } = useContext(DateContext);


  function handleSubmitInfo(e) {
    e.preventDefault();
    if (isEdited) {
      const index = tasks.findIndex(item => item.id === task.id)
      task.emojiUrl = chosenEmojiSrc;
      tasks.splice(index, 1, task)
      localStorage.setItem("taskList", JSON.stringify(tasks))

    } else {
      task.id = uuidv4();
      task.emojiUrl = chosenEmojiSrc;
      setTasks((prev) => [...prev, task]);
      const updatedTasks = [...tasks, task];
      localStorage.setItem("taskList", JSON.stringify(updatedTasks));
    }
    setChosenEmojiSrc(null)
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
        <form className="task-form" action="" onSubmit={handleSubmitInfo}>
          <div>
            <div className="select-header-box">
              <input onChange={handleChange} type="text" className="input-header" placeholder="Header" name="header" value={task.header} maxLength="20" required />
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
        <VisibleTasks />

      </StyledDateModal>
    </>
  );
}
