import styled from 'styled-components';


export const Container = styled.div ` 
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray
    };
`;

export const Header = styled.header `
    height: 90px;
    display: flex;
    align-items:center;    
`;

export const LogImg = styled.img `

    margin-top: 40px;
    margin-left: 20px;
    
`;
export const MenuContainer = styled.nav `
    display:flex;
    flex-direction: column;
    margin-top:50px;
`;
export const MenuItemLink = styled.a `
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    margin: 12px 0;
    display:flex;
    align-items:center;
    transition: opacity .3s;

    &:hover{
        opacity: .7;
    }

    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;

export const MenuItemButton = styled.button `
    font-size: 16px;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};
    border:none;
    
    margin: 12px 0;
    display:flex;
    align-items:center;
    transition: opacity .3s;

    &:hover{
        opacity: .7;
    }

    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;