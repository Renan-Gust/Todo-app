import styled from "styled-components";

export const Task = styled.div`
    padding: 15px 25px;
    display: flex;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid ${props => props.theme.colors.darkTheme.VeryDarkGrayishBlue};

    p{
        flex: 1;
        color: ${props => props.theme.colors.darkTheme.LightGrayishBlue};
        cursor: pointer;
    }

    img.deleteTask,
    img.infoTask{
        display: none;
        cursor: pointer;
    }

    &:hover{
        img.deleteTask,
        img.infoTask{
            display: block;
        }
    }

    &.completed{
        > div{
            background: linear-gradient(141deg, ${props => props.theme.colors.BackgroundLinearGradient1} 0%, ${props => props.theme.colors.BackgroundLinearGradient2} 100%);

            display: flex;
            align-items: center;
            justify-content: center;

            img{
                width: 15px;
            }

            &:hover{
                border: 0;
            }
        }

        p{
            text-decoration: line-through;
            color: ${props => props.theme.colors.darkTheme.DarkGrayishBlue};
        }
    }

    &.light{
        border-bottom-color: ${props => props.theme.colors.darkTheme.LightGrayishBlue};
    }

    &.light p{
        color: ${props => props.theme.colors.darkTheme.VeryDarkBlue};
    }

    &.light > div{
        border-color: ${props => props.theme.colors.lightTheme.LightGrayishBlue};
    }

    &.dark{
        border-bottom: 1px solid ${props => props.theme.colors.darkTheme.VeryDarkGrayishBlue};
    }

    &.dark p{
        color: ${props => props.theme.colors.darkTheme.LightGrayishBlue};
    }

    &.dark > div{
        border-color: ${props => props.theme.colors.darkTheme.VeryDarkGrayishBlue};
    }

    @media screen and (prefers-color-scheme: light) {
        border-bottom-color: ${props => props.theme.colors.darkTheme.LightGrayishBlue};

        p{
            color: ${props => props.theme.colors.darkTheme.VeryDarkBlue};
        }

        > div{
            border-color: ${props => props.theme.colors.lightTheme.LightGrayishBlue};
        }
    }
`

export const Checked = styled.div`
    width: 25px;
    height: 25px;
    border: 1px solid ${props => props.theme.colors.darkTheme.VeryDarkGrayishBlue};
    border-radius: 50%;
    cursor: pointer;

    &:hover{
        transition: all 0.3s ease;
        border-width: 1.5px;
        border-color: ${props => props.theme.colors.BackgroundLinearGradient1} !important;
    }
`