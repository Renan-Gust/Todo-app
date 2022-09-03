import { useNavigate, useParams } from 'react-router-dom'

import { useTheme } from '../../contexts/Context'

import * as C from './styles'
import iconBack from '/images/icon-back.svg'

export const TaskDetails = () => {
    const { theme } = useTheme()

    const navigate = useNavigate()
    const params = useParams()

    return(
        <C.Container className={theme}>
            <C.Content>
                <C.Detail className={theme}>
                    <header className={theme}>
                        <img src={iconBack} alt="icon back" onClick={() => navigate(-1)} />
                        <h1>{params.taskTitle}</h1>
                    </header>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                </C.Detail>
            </C.Content>
        </C.Container>
    )
}