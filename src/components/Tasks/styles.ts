import styled from "styled-components";

export const Container = styled.section`
    background: ${props => props.theme.colors.darkTheme.VeryDarkDesaturatedBlue};
    border-radius: 4px;
    margin-top: 30px;

    box-shadow: 5px 5px 44px 3px rgb(37 39 60 / 19%);

    &.light{
        background: ${props => props.theme.colors.lightTheme.VeryLightGray};
    }

    &.dark{
        background: ${props => props.theme.colors.darkTheme.VeryDarkDesaturatedBlue};
    }

    @media screen and (prefers-color-scheme: light) {
        background: ${props => props.theme.colors.lightTheme.VeryLightGray};
    }
`

export const Footer = styled.footer`
    color: ${props => props.theme.colors.darkTheme.DarkGrayishBlue};
    font-size: 0.9rem;
`

export const FooterContent = styled.div`
    padding: 15px 25px;
    display: flex;
    justify-content: space-between;
`

export const Nav = styled.nav`
    display: flex;
    gap: 30px;

    p:hover{
        transition: all 0.3s ease;
        color: ${props => props.theme.colors.lightTheme.VeryLightGray};
    }

    &.light p:hover{
        color: ${props => props.theme.colors.darkTheme.VeryDarkBlue};
    }

    &.dark p:hover{
        color: ${props => props.theme.colors.lightTheme.VeryLightGray};
    }

    @media screen and (prefers-color-scheme: light) {
        p:hover{
            color: ${props => props.theme.colors.darkTheme.VeryDarkBlue};
        }
    }
`

export const NavContent = styled.div`
    display: flex;
    gap: 15px;
    cursor: pointer;

    p.selected{
        color: ${props => props.theme.colors.BrightBlue};
    }
    
    @media(max-width: 1100px){
        &:first-child.nav{
            display: none;
        }
    }
`

export const Tasks = styled.div``

// Nav Mobile
export const NavMobile = styled.footer`
    display: none;

    background: ${props => props.theme.colors.darkTheme.VeryDarkDesaturatedBlue};
    color: ${props => props.theme.colors.darkTheme.DarkGrayishBlue};
    border-radius: 4px;
    margin-top: 30px;

    font-size: 0.9rem;
    box-shadow: 5px 5px 44px 3px rgb(37 39 60 / 19%);

    nav{
        justify-content: center;
    }

    @media(max-width: 1100px){
        display: block;
    }

    &.light{
        background: ${props => props.theme.colors.lightTheme.VeryLightGray};
    }

    &.dark{
        background: ${props => props.theme.colors.darkTheme.VeryDarkDesaturatedBlue};
    }

    @media screen and (prefers-color-scheme: light) {
        background: ${props => props.theme.colors.lightTheme.VeryLightGray};
    }
`

export const Content = styled.div`
    padding: 15px 25px;
`