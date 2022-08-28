import styled from "styled-components";

export const Header = styled.header``

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        color: ${props => props.theme.colors.lightTheme.VeryLightGray};
        letter-spacing: 16px;
        font-size: 3rem;
    }
`

export const Theme = styled.img<{ img: string; }>`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: 100% 100%;

    padding: 15px 15px;
    width: 30px;
    height: 30px;
    cursor: pointer;

    @media screen and (prefers-color-scheme: light) {
        background-image: url('../../../public/images/icon-moon.svg');
    }
`