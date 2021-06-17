import styled from 'styled-components';

export const Container = styled.div `
    grid-area: MH;
    background-color: ${props => props.theme.colors.primary};

    display:flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px
    
 `;

 export const Search = styled.div ` 

 `;

 export const Settings = styled.div ` 
    padding-right: 25%;
 `;

 export const Notification = styled.div `
    
  `;

 export const Profile = styled.div `
    padding-right: 25%;
    color: ${props => props.theme.colors.black}

  `;

 export const Welcome = styled.div ` `;
 export const UserName = styled.div ` `;
 export const Avatar = styled.div `

 
  `;

 export const Options = styled.div ` 

    display:flex;
    justify-content:stretch;
    align-items: center;
    

`;