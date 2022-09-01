import styled from "styled-components";

export const Container = styled.section`
    background: ${props => props.theme.colors.darkTheme.VeryDarkDesaturatedBlue};
    border-radius: 4px;
    margin-top: 30px;

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
    display: flex;
    gap: 20px;

    input{
        flex: 1;
        background: none;
        border: 0;
        outline: 0;
        font-size: 1rem;
        color: ${props => props.theme.colors.lightTheme.VeryLightGray};
    }

    input::placeholder {
        color: ${props => props.theme.colors.darkTheme.DarkGrayishBlue};
    }

    input.light{
        color: ${props => props.theme.colors.darkTheme.VeryDarkBlue};
    }

    input.dark{
        color: ${props => props.theme.colors.lightTheme.VeryLightGray};
    }

    @media screen and (prefers-color-scheme: light) {
        input{
            color: ${props => props.theme.colors.darkTheme.VeryDarkBlue};
        }
    }
`

export const Circle = styled.div`
    width: 25px;
    height: 25px;
    border: 1px solid ${props => props.theme.colors.darkTheme.VeryDarkGrayishBlue};
    border-radius: 50%;

    &.light{
       border-color: ${props => props.theme.colors.lightTheme.LightGrayishBlue};
    }

    &.dark{
        border: 1px solid ${props => props.theme.colors.darkTheme.VeryDarkGrayishBlue};
    }

    @media screen and (prefers-color-scheme: light) {
        border-color: ${props => props.theme.colors.lightTheme.LightGrayishBlue};
    }
`