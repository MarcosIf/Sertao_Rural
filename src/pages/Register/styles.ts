import styled from 'styled-components';
import background from '../../images/fundo.jpg'

export const Back = styled.div`
    
    background-size: cover;
    background-image: url(${background});

`;
export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background-color: rgba(0,255,145,0.6);
    
    
    
    //background-color: ${props => props.theme.colors.secondary}; 

`;
export const Link = styled.link`
    
    align-items: center;
    margin-left: 40%;
    margin-bottom: 50px;
    display: flex;
    color: #287c43;

`;
export const Logo = styled.div`

    display: flex;
    align-items: center;
    margin-bottom: 50px;
    margin-left: 100px 

  
`;

export const Form = styled.form`
    width: 500px;
    height: 600px;
    padding: 30px 30px 30px 30px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.primary}


`;


export const FormTitle = styled.h1`
margin-bottom: 20px;

&:after {
    content: '';
    display: block;
    width: 55px;
    border-bottom: 10px solid ${props => props.theme.colors.secondary};
} ;

`;