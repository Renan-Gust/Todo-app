import * as C from './styles'

import iconCheck from '/images/icon-check.svg'
import iconCross from '/images/icon-cross.svg'
import iconInfo from '/images/icon-info.svg'

export function Tasks(){
    return(
        <>
            <C.Container>
                <C.Tasks>
                    <C.Task className="completed">
                        <C.Checked>
                            <img src={iconCheck} alt="icon check" />
                        </C.Checked>
                        <p>Jog around the park 3x</p>

                        <img className="deleteTask" src={iconCross} alt="icon cross" />
                        <img className="infoTask" src={iconInfo} alt="icon info" />
                    </C.Task>
                    <C.Task>
                        <C.Checked>
                            {/* <img src={iconCheck} alt="iconCheck" /> */}
                        </C.Checked>
                        <p>Jog around the park 3x</p>
                        <img className="deleteTask" src={iconCross} alt="icon cross" />
                    </C.Task>
                    <C.Task>
                        <C.Checked></C.Checked>
                        <p>Jog around the park 3x</p>
                        <img className="deleteTask" src={iconCross} alt="icon cross" />
                    </C.Task>
                    <C.Task>
                        <C.Checked></C.Checked>
                        <p>Jog around the park 3x</p>
                        <img className="deleteTask" src={iconCross} alt="icon cross" />
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