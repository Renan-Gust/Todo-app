import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"
import { TaskDetails } from "./components/TaskDetails"
import { useTheme } from "./contexts/Context"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App(){
    const { theme } = useTheme()

    return(
        <div className={`container ${theme}`}>
            <div className="wrapper">
                <div className="content">
                    <div className="bg-photo"></div>

                    <div className="todo-wrapper">
                        <Header />
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Tasks />} />
                                <Route path="/detail/:taskTitle" element={<TaskDetails />} />
                            </Routes>
                        </BrowserRouter>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App