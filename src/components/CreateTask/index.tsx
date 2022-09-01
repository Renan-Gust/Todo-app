import { KeyboardEvent, useState } from 'react'

import {v4 as uuidv4} from 'uuid';

import * as C from './styles'

import { useTheme, useTasks } from '../../contexts/Context'

export function CreateTask(){
    const { theme } = useTheme()
    const { tasks, setTasks } = useTasks()

    const[title, setTitle]= useState<string>("")

    function handleCreateTask(e: KeyboardEvent){
        if(e.key === "Enter"){
            const newTask = [
                ...tasks,
                {
                    id: uuidv4(),
                    title: title,
                    completed: false
                }                
            ]

            setTasks(newTask)
            setTitle("")
        }
    }

    return(
        <C.Container className={theme}>
            <C.Content>
                <C.Circle className={theme}></C.Circle>
                <input 
                    type="text" 
                    placeholder="Create a new todo..." 
                    className={theme}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={(e) => handleCreateTask(e)}
                />
            </C.Content>
        </C.Container>
    )
}