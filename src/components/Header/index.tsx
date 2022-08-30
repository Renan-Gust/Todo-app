import { useContext } from 'react'

import * as C from './styles'

import iconSun from '/images/icon-sun.svg'
import iconMoon from '/images/icon-moon.svg'

import { Context } from '../../contexts/Context'

export function Header() {
    const { state, dispatch } = useContext(Context)

    let image = iconSun

    if(localStorage.getItem("theme") !== null){
        if(localStorage.getItem("theme") === "light"){
            image = iconMoon
        }
    }

    return(
        <C.Header>
            <C.Content>
                <>
                    {console.log(state.theme.status)}
                    <h1>TODO</h1>
                    <C.Theme img={image} />
                </>
            </C.Content>
        </C.Header>
    )
}