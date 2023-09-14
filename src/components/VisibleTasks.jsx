import { useContext } from "react"
import DateContext from "../context"
import { BsPencilSquare, BsFillTrash3Fill } from "react-icons/bs";
import { StyledVisibleTasks } from "./styled";

export default function VisibleTasks() {
    const { visibleTasks, dD, firstDay,task, selectedDate, dayNames, tasks, setTask, setIsEdited, setTasks, setChosenEmojiSrc } = useContext(DateContext)

    // ayın hangi güne geldiğini belirlemek için
    function findDayOfMonth() {
        const firstDayOfMonth = firstDay.getDay();
        const dayOfMonth = (firstDayOfMonth + selectedDate - 1) % 7; // seçilen günün indeksi
        return dayNames[dayOfMonth];
    }

    function handleEditNote(id) {
        const edited = tasks.find((item) => item.id === id);
        setTask(edited);
        console.log(task)
        setChosenEmojiSrc(edited.emojiUrl)
        setIsEdited(true);
    }

    function handleRemoveNote(id) {
        const filteredTasks = tasks.filter((item) => item.id !== id);
        setTasks(filteredTasks);
        localStorage.setItem("taskList", JSON.stringify(filteredTasks));
    }

    return (
        <>
            <StyledVisibleTasks>
                {
                    visibleTasks.length === 0 ? <div className="alert"><h2>Couldn't found any tasks</h2></div> :
                        (<>
                            <div className="tasks-info">
                                <div className="date-info">
                                    {`${dD} ${findDayOfMonth()}`}
                                </div>
                                <hr />
                                {
                                    visibleTasks.map((item, index) => (
                                        <>
                                            <div key={index} className="task-info">
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
            </StyledVisibleTasks>
        </>
    )
}