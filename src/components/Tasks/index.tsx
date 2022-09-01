import * as C from './styles'

import { useTheme, useTasks } from '../../contexts/Context'
import { Task } from '../Task'
import { TaskType } from '../../types/tasks'

export function Tasks(){
    const { theme } = useTheme()
    const { tasks, setTasks } = useTasks()

    function handleActive(){
        const newTasks = tasks.filter((task: TaskType) => task.completed !== true)
        setTasks(newTasks)
    }

    function handleCompleted(){
        // const test = [...tasks]
        const newTasks = tasks.filter((task: TaskType) => task.completed === true)
        setTasks(newTasks)
    }

    return(
        <>
            <C.Container className={theme}>
                <C.Tasks>
                    {tasks.map((task: TaskType) => (
                        <Task task={task} key={task.id} />
                    ))}
                </C.Tasks>

                <C.Footer>
                    <C.FooterContent>
                        <div className="itemsLeft">{tasks.length} items left</div>
                        <C.Nav className={theme}>
                            <C.NavContent className="nav">
                                <p className="all selected">All</p>
                                <p className="active" onClick={handleActive}>Active</p>
                                <p className="completed" onClick={handleCompleted}>Completed</p>
                            </C.NavContent>
                            <C.NavContent >
                                <p className="clearCompleted">Clear Completed</p>
                            </C.NavContent>
                        </C.Nav>
                    </C.FooterContent>
                </C.Footer>
            </C.Container>

            <NavMobile theme={theme} />
        </>
    )
}

function NavMobile({ theme }: any) {
    return(
        <C.NavMobile className={theme}>
            <C.Content>
                <C.Nav className={theme}>
                    <C.NavContent>
                        <p className="all selected">All</p>
                        <p className="active">Active</p>
                        <p className="completed">Completed</p>
                    </C.NavContent>
                </C.Nav>
            </C.Content>
        </C.NavMobile>
    )
}