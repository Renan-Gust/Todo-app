import { useState, MouseEvent } from 'react'

import { useTheme, useTasks } from '../../contexts/Context'
import { Task } from '../Task'
import { TaskType, ThemeType } from '../../types/tasks'
import { CreateTask } from '../CreateTask'

import * as C from './styles'

export function Tasks(){
    const { theme } = useTheme()
    const { tasks, setTasks } = useTasks()

    const [completedTasks, setCompletedTasks] = useState<TaskType[]>([])
    const [activeTasks, setActiveTasks] = useState<TaskType[]>([])
    const [chosenContent, setChosenContent] = useState<'all' | 'active' | 'completed'>('all')

    function handleActiveTask(element: MouseEvent<HTMLElement>){
        const newTasks = tasks!.filter((task: TaskType) => task.completed !== true)

        setActiveTasks(newTasks)
        setCompletedTasks([])
        setChosenContent('active')

        addClass(element)
    }

    function handleCompletedTask(element: MouseEvent<HTMLElement>){
        const newTasks = tasks!.filter((task: TaskType) => task.completed === true)

        setCompletedTasks(newTasks)
        setActiveTasks([])
        setChosenContent('completed')

        addClass(element)
    }

    function handleAllTask(element: MouseEvent<HTMLElement>){
        setActiveTasks([])
        setCompletedTasks([])
        setChosenContent('all')

        addClass(element)
    }

    function handleClearCompletedTask(){
        const clearCompletedTasks = tasks!.map((task: TaskType) => {
            return {...task, completed: false}
        })

        setTasks!(clearCompletedTasks)
        setCompletedTasks([])
    }

    function addClass(element: MouseEvent<HTMLElement>){
        document.querySelectorAll("nav p").forEach(item => item.classList.remove("selected"))
        // element.target.classList.add("selected")
        
        document.querySelectorAll("nav p").forEach(item => {
            if(item.textContent == element.currentTarget.innerText) item.classList.add("selected")
        })
    }

    return(
        <>
            <CreateTask />

            <C.Container className={theme}>
                <C.Tasks>
                    {chosenContent == 'active' &&
                        activeTasks.map((task: TaskType) => (
                            <Task task={task} key={task.id} />
                        ))
                    }

                    {chosenContent == 'completed' &&
                        completedTasks.map((task: TaskType) => (
                            <Task task={task} key={task.id} />
                        ))
                    }

                    {chosenContent == 'all' &&
                        tasks!.map((task: TaskType) => (
                            <Task task={task} key={task.id} />
                        ))
                    }
                </C.Tasks>

                <C.Footer>
                    <C.FooterContent>
                        <div className="itemsLeft">{tasks!.length} items left</div>
                        <C.Nav className={theme}>
                            <C.NavContent className="nav">
                                <p className="all selected" onClick={element => handleAllTask(element)}>All</p>
                                <p className="active" onClick={element => handleActiveTask(element)}>Active</p>
                                <p className="completed" onClick={element => handleCompletedTask(element)}>Completed</p>
                            </C.NavContent>
                            <C.NavContent >
                                <p className="clearCompleted" onClick={handleClearCompletedTask}>Clear Completed</p>
                            </C.NavContent>
                        </C.Nav>
                    </C.FooterContent>
                </C.Footer>
            </C.Container>

            <NavMobile 
                theme={theme}
                handleAllTask={handleAllTask} 
                handleActiveTask={handleActiveTask}
                handleCompletedTask={handleCompletedTask}
            />
        </>
    )
}

type navMobileProps = {
    theme?: "dark" | "light";
    handleAllTask: (element: MouseEvent<HTMLElement>) => void;
    handleActiveTask: (element: MouseEvent<HTMLElement>) => void;
    handleCompletedTask: (element: MouseEvent<HTMLElement>) => void;
}

function NavMobile({ theme, handleAllTask, handleActiveTask, handleCompletedTask }: navMobileProps) {
    return(
        <C.NavMobile className={theme}>
            <C.Content>
                <C.Nav className={theme}>
                    <C.NavContent>
                        <p className="all selected" onClick={element => handleAllTask(element)}>All</p>
                        <p className="active" onClick={element => handleActiveTask(element)}>Active</p>
                        <p className="completed" onClick={element => handleCompletedTask(element)}>Completed</p>
                    </C.NavContent>
                </C.Nav>
            </C.Content>
        </C.NavMobile>
    )
}