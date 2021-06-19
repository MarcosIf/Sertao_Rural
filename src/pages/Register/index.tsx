import React, {useState} from 'react';


import {
    Container,
    Logo,
    Form,
    FormTitle,
    Back

}  from './styles';
import LogoImg  from '../../images/ruralV.png';
import Input from '../../components/Input';

import Button from '../../components/Button';
import {useAuth} from '../../hooks/auth';
import { Link } from 'react-router-dom';

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
            
                <FormTitle>Cadastro</FormTitle>

                <Input
                    type = "Nome"
                    placeholder = "Nome"
                    required
                    onChange ={(e) => setEmail(e.target.value) }
                />

                <Input
                    type = "Sobrenome"
                    placeholder = "Sobrenome"
                    required
                    onChange ={(e) => setEmail(e.target.value) }
                />

                <Input
                    type = "email"
                    placeholder = "E-mail"
                    required
                    onChange ={(e) => setEmail(e.target.value) }
                />
                <Input 
                    type = "password"
                    placeholder = "Senha"
                    required
                    onChange ={(e) => setPassword(e.target.value) }
                />

                
                <Input 
                    type = "password"
                    placeholder = "Confirmar senha"
                    required
                    onChange ={(e) => setPassword(e.target.value) }
                />
            
                <Button type = "submit"> Cadastre-se </Button>
                  
            </Form>
        
        </Container>
    </Back> 
    );
}

export default Signin;