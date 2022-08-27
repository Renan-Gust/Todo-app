import styled from "styled-components";

export const Container = styled.section`
    background: ${props => props.theme.colors.darkTheme.VeryDarkDesaturatedBlue};
    border-radius: 4px;
    margin-top: 30px;
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

export const Task = styled.div`
    padding: 15px 25px;
    display: flex;
    align-items: center;
    gap: 20px;

    border-bottom: 1px solid ${props => props.theme.colors.darkTheme.VeryDarkGrayishBlue};
    cursor: pointer;

    p{
        flex: 1;
        color: ${props => props.theme.colors.darkTheme.LightGrayishBlue};
    }

    &.completed{
        > div{

        }

        p{
            text-decoration: line-through;
            color: ${props => props.theme.colors.darkTheme.DarkGrayishBlue};
        }
    }
`

export const Circle = styled.div`
    width: 25px;
    height: 25px;
    border: 1px solid ${props => props.theme.colors.darkTheme.VeryDarkGrayishBlue};
    border-radius: 50%;
`

// Nav Mobile
export const NavMobile = styled.footer`
    display: none;

    background: ${props => props.theme.colors.darkTheme.VeryDarkDesaturatedBlue};
    color: ${props => props.theme.colors.darkTheme.DarkGrayishBlue};
    border-radius: 4px;
    margin-top: 30px;

    font-size: 0.9rem;

    nav{
        justify-content: center;
    }

    @media(max-width: 1100px){
        display: block;
    }
`

export const Content = styled.div`
    padding: 15px 25px;
`