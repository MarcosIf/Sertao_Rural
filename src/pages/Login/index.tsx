import React, {useState} from 'react';

import {
    Container,
    Logo,
    Form,
    FormTitle,
    Back,
    Cadas

}  from './styles';
import LogoImg  from '../../images/ruralV.png';
import Input from '../../components/Input';

import Button from '../../components/Button';
import {useAuth} from '../../hooks/auth';


//import signIn  from '../../hooks/authC';

const Signin: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

const {signIn} = useAuth();

    return(
    <Back>
        <Container>
       
            <Form onSubmit = {() => signIn(email, password)} >
                
            <Logo>
                <img src = {LogoImg} alt = "Sertão Rural" />
            </Logo>
        
            
                <FormTitle>Entrar</FormTitle>

                <Input
                    type = "email"
                    placeholder = "e-mail"
                    required
                    onChange ={(e) => setEmail(e.target.value) }
                />
                <Input 
                    type = "password"
                    placeholder = "senha"
                    required
                    onChange ={(e) => setPassword(e.target.value) }
                />
            
                <Button type = "submit"> Acessar </Button>
                <Cadas href="Register">Cadastre-se</Cadas>    
            </Form>
        
        </Container>
    </Back> 
    );
}

export default Signin;