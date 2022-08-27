import * as C from './styles'

export function CreateTask(){
    return(
        <C.Container>
            <C.Content>
                <C.Circle></C.Circle>
                <input type="text" name="" id="" placeholder="Create a new todo..." />
            </C.Content>
        </C.Container>
    )
}