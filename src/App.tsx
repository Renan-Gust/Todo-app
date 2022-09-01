import { Header } from "./components/Header"
import { CreateTask } from "./components/CreateTask"
import { Tasks } from "./components/Tasks"
import { useTheme } from "./contexts/Context"

function App(){
    const { theme } = useTheme()

    return(
        <div className={`container ${theme}`}>
            <div className="wrapper">
                <div className="content">
                    <div className="bg-photo"></div>

                    <div className="todo-wrapper">
                        <Header />
                        <CreateTask />
                        <Tasks />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App