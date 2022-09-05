import * as C from './styles'

import iconSun from '/images/icon-sun.svg'
import iconMoon from '/images/icon-moon.svg'

import { useTheme } from '../../contexts/Context'

export function Header() {
    const { theme, setTheme } = useTheme()

    let image = iconSun
    if(theme){
        theme === "dark" ? image = iconSun : image = iconMoon
    }

    function handleChangeTheme(){
        if(theme){
            if(theme === "dark"){
                changeTheme("light")
            } else{
                changeTheme("dark")
            }
        } else{
            if(window.matchMedia('(prefers-color-scheme: dark)').matches){
                changeTheme("light")
            } else{
                changeTheme("dark")
            }
        }
    }

    function changeTheme(theme: "dark" | "light"){
        setTheme!(theme)
        localStorage.setItem("theme", JSON.stringify(theme))
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