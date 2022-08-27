import styled from "styled-components";

export const Container = styled.section`
    background: ${props => props.theme.colors.darkTheme.VeryDarkDesaturatedBlue};
    border-radius: 4px;
    margin-top: 30px;
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
`

export const Circle = styled.div`
    width: 25px;
    height: 25px;
    border: 1px solid ${props => props.theme.colors.darkTheme.VeryDarkGrayishBlue};
    border-radius: 50%;
`