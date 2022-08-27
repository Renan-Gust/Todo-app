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

    img{
        object-fit: contain;
        cursor: pointer;
        width: 30px;
        height: 30px;
    }
`