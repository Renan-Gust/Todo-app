import * as C from './styles'

export function Tasks(){
    return(
        <>
            <C.Container>
                <C.Tasks>
                    <C.Task className="completed">
                        <C.Circle></C.Circle>
                        <p>Jog around the park 3x</p>
                    </C.Task>
                    <C.Task>
                        <C.Circle></C.Circle>
                        <p>Jog around the park 3x</p>
                    </C.Task>
                    <C.Task>
                        <C.Circle></C.Circle>
                        <p>Jog around the park 3x</p>
                    </C.Task>
                    <C.Task>
                        <C.Circle></C.Circle>
                        <p>Jog around the park 3x</p>
                    </C.Task>
                    <C.Task>
                        <C.Circle></C.Circle>
                        <p>Jog around the park 3x</p>
                    </C.Task>
                    <C.Task>
                        <C.Circle></C.Circle>
                        <p>Jog around the park 3x</p>
                    </C.Task>
                </C.Tasks>

                <C.Footer>
                    <C.FooterContent>
                        <div className="itemsLeft">5 items left</div>
                        <C.Nav>
                            <C.NavContent className="nav">
                                <p className="all selected">All</p>
                                <p className="active">Active</p>
                                <p className="completed">Completed</p>
                            </C.NavContent>
                            <C.NavContent>
                                <p className="clearCompleted">Clear Completed</p>
                            </C.NavContent>
                        </C.Nav>
                    </C.FooterContent>
                </C.Footer>
            </C.Container>

            <NavMobile />
        </>
    )
}

function NavMobile(){
    return(
        <C.NavMobile>
            <C.Content>
                <C.Nav>
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