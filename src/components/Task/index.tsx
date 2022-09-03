import * as C from './styles'

import iconCheck from '/images/icon-check.svg'
import iconCross from '/images/icon-cross.svg'
import iconInfo from '/images/icon-info.svg'

import { useTheme, useTasks } from '../../contexts/Context'
import { TaskType } from '../../types/tasks'

import { Link } from 'react-router-dom'

type TaskProps = {
    task: TaskType
}

export const Task = ({ task }: TaskProps) => {
    const { theme } = useTheme()
    const { tasks, setTasks } = useTasks()

    function handleDeleteTask(id?: string){
        const newTasks = tasks.filter((task: TaskType) => task.id !== id)
        setTasks(newTasks)
    }

    function handleCompletedTask(id?: string){
        const taskCompleted = tasks.map((task: TaskType) => {
            if(task.id === id){
                return {...task, completed: !task.completed}
            }

            return task
        })

        setTasks(taskCompleted)
    }

    return(
        <C.Task className={`${task.completed && 'completed'} ${theme}`}>
            <C.Checked onClick={() => handleCompletedTask(task.id)}>
                {task.completed && <img src={iconCheck} alt="icon cross" />}
            </C.Checked>
            <p>{task.title}</p>

            <img 
                className="deleteTask" 
                src={iconCross} 
                alt="icon cross" 
                onClick={() => handleDeleteTask(task.id)} 
            />
            <Link to={`/detail/${task.title}`}>
                <img className="infoTask" src={iconInfo} alt="icon info" />
            </Link>
        </C.Task>
    )
}