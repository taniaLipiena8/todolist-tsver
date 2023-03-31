import './TodoHome.css'
import { useState, useEffect,  FormEvent } from 'react'
import TodoExcerpt from './TodoExcerpt'

export interface Activity {
    name: string,
    isDone: boolean
}

const TodoHome = () => {
    const [activityName, setActivityName] = useState('')
    const [activities, setActivities] = useState<Activity[]>([])

    useEffect(() => {
        console.log(activityName);

    }, [activityName])

    const handleSubmit=(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(activityName.trim().length === 0){
            alert('Please insert activity name')
            return
        }

        setActivities(activity => [...activity, {
            name: activityName,
            isDone: false
        }])

        setActivityName('')
    }

    const removeActivity = (selected : Activity)=>{
        setActivities((updated)=>{
            return updated.filter((item) => item!==selected)
        })
    }

    const changeIsDone=(selected : Activity)=>{
        const updatedList = activities.map((activity)=>{
            if(activity === selected){
                const updatedActivity = {...activity, isDone: !activity.isDone}
                return updatedActivity
            }
            return activity
        })
        setActivities(updatedList)
    }

    return (

        <div className='App'>
            <form onSubmit={handleSubmit}>

                <div>
                    <input type='text' placeholder='your activity' name='activity' value={activityName} onChange={e => setActivityName(e.target.value)} />

                    <button className="submitButton" type="submit">Submit</button>
                </div>
            </form>

            {activities.length > 0 ?
                <div className='activityList'>

                    <h2>Activity List</h2>

                    <TodoExcerpt activities = {activities} onRemove={removeActivity} onDone={changeIsDone}/>

                </div> :
                <div>
                    <h2>The list is empty</h2>
                </div>
            }
        </div>
    )
}

export default TodoHome