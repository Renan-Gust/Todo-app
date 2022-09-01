import * as C from './styles'

import iconSun from '/images/icon-sun.svg'
import iconMoon from '/images/icon-moon.svg'

import { useTheme } from '../../contexts/Theme'

export function Header() {
    const { theme, setTheme } = useTheme()

    let image = iconSun
    if(theme){
        theme === "dark" ? image = iconSun : image = iconMoon
    }

    function handleChangeTheme(){
        if(theme === "dark"){
            setTheme("light")
            localStorage.setItem("theme", JSON.stringify("light"))
        } else{
            setTheme("dark")
            localStorage.setItem("theme", JSON.stringify("dark"))
        }
    }

    return(
        <C.Header>
            <C.Content>
                <h1>TODO</h1>
                <C.Theme img={image} onClick={handleChangeTheme} className={theme} />
            </C.Content>
        </C.Header>
    )
}