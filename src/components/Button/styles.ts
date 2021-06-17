import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    

    margin: 40px 0;
    padding: 10px;

    border-radius: 5px;

    font-weight: bold;
    color: ${props => props.theme.colors.primary};

    background-color: ${props => props.theme.colors.secondary};

    transition: opacity .3s;

    &:hover{
        opacity: .7;
    }

`;