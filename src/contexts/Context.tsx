import { createContext, useContext, useState, useEffect } from "react"
import { TaskType, TasksType, ThemeType } from "../types/tasks"

export const Context = createContext({})

export const ContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeType>()
    const [tasks, setTasks] = useState<TaskType[]>([
        {
            id: "1",
            title: "Estudar programação",
            completed: false
        },

        {
            id: "2",
            title: "Ler livros",
            completed: true
        }
    ])

    useEffect(() => {
        const themeStorage = localStorage.getItem("theme")
        if(themeStorage){
            setTheme(JSON.parse(themeStorage))
        }
    }, [])

    return(
        <Context.Provider value={{ theme, setTheme, tasks, setTasks }}>
            {children}
        </Context.Provider>
    )
}

export const useTheme = () => useContext<ThemeType>(Context)
export const useTasks = () => useContext<TasksType>(Context)