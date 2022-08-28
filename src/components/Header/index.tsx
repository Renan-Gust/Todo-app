import * as C from './styles'

import iconSun from '../../../public/images/icon-sun.svg'
import iconMoon from '../../../public/images/icon-moon.svg'

export function Header() {
    let image = iconSun

    if(localStorage.getItem("theme") !== null){
        if(localStorage.getItem("theme") === "light"){
            image = iconMoon
        }
    }

    return(
        <C.Header>
            <C.Content>
                <h1>TODO</h1>
                <C.Theme img={image} />
            </C.Content>
        </C.Header>
    )
}