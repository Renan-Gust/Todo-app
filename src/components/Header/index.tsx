import * as C from './styles'

import iconSun from '../../../public/images/icon-sun.svg'

export function Header() {
    return(
        <C.Header>
            <C.Content>
                <h1>TODO</h1>
                <img src={iconSun} alt="icon sun" />
            </C.Content>
        </C.Header>
    )
}