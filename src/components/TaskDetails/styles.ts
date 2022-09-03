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

export const Content = styled.div`
    padding: 15px 25px;
`

export const Detail = styled.div`
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1{
            color: ${props => props.theme.colors.darkTheme.LightGrayishBlue};
        }

        &.dark h1{
            color: ${props => props.theme.colors.darkTheme.LightGrayishBlue};
        }

        &.light h1{
            color: ${props => props.theme.colors.darkTheme.VeryDarkBlue};
        }

        img{
            cursor: pointer;
            height: 18px;
            width: 18px;
        }

        @media screen and (prefers-color-scheme: light) {
            h1{
                color: ${props => props.theme.colors.darkTheme.VeryDarkBlue};
            }
        }
    }

    p{
        margin-top: 30px;
        color: ${props => props.theme.colors.darkTheme.LightGrayishBlue};
        letter-spacing: 1px;
        line-height: 23px;
    }

    &.dark p{
        color: ${props => props.theme.colors.darkTheme.LightGrayishBlue};
    }

    &.light p{
        color: ${props => props.theme.colors.darkTheme.VeryDarkBlue};
    }

    @media screen and (prefers-color-scheme: light) {
        p{
            color: ${props => props.theme.colors.darkTheme.VeryDarkBlue};
        }
    }
`