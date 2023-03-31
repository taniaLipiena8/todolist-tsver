import React from 'react'
import { Activity } from './TodoHome'

type TodoExcerptProps = {
    activities: Activity[],
    onDone: (selected: Activity) => void,
    onRemove: (selected: Activity) => void
}

const TodoExcerpt = ({ activities, onDone, onRemove }: TodoExcerptProps) => {
    return (
        <>
            {activities.map((activity, index) => (
                <div className='list' key={index} style={{ backgroundColor: activity.isDone ? 'lightgray' : 'antiquewhite' }}>
                    <span>
                        <span className="indexNo" style={{ textDecoration: activity.isDone ? 'line-through' : 'none' }}>{index + 1}</span>

                        <span className="activityName" style={{ textDecoration: activity.isDone ? 'line-through' : 'none' }}>{activity.name}</span>
                    </span>

                    <span className="act">
                        <button className="donebutton" onClick={() => onDone(activity)}>{activity.isDone ? 'Undo ' : 'Done'} </button>
                        <button className="deletebutton" onClick={() => onRemove(activity)}>Delete </button>
                    </span>
                </div>
            ))}
        </>
    )
}

export default TodoExcerpt