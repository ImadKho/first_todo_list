import deleteBin from "./icones/delete-bin.svg";

export const Task = (props) => {
    return (
        <div className='task-container' key={props.task.id}>
            <div className='task-time-container'>
            <h4 style={{
                textDecoration: props.task.done ? 'line-through' : 'none',
                textDecorationColor: props.task.done ? '#FF5600' : 'initial',
                textDecorationThickness:  props.task.done ? '0.3em' : 0
            }}>
                {props.task.title}
            </h4>
            <h6>Today, {props.task.time}</h6>
            </div>
            <div className='icone-container'>
            <input onClick={() => props.completeTask(props.task.id)} type='checkbox'></input>
            <img onClick={() => props.deleteTask(props.task.id)} src={deleteBin} alt='trash-bin'></img>
            </div>
        </div>
    )
}