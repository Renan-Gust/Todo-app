import * as C from './styles'

import { useTheme } from '../../contexts/Theme'

export function CreateTask(){
    const { theme } = useTheme()

    return(
        <C.Container className={theme}>
            <C.Content>
                <C.Circle className={theme}></C.Circle>
                <input type="text" name="" id="" placeholder="Create a new todo..." className={theme} />
            </C.Content>
        </C.Container>
    )
}