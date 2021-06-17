/* import React, {createContext, useState, useContext} from 'react';
import axios from 'axios';

interface IAuthContext{

    logged: boolean;
    signIn(email: string, password: string):void;
    signOut(): void;
    
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

    const AuthProvider: React.FC = ({children}) => {

    const [logged, setLogger] = useState<boolean>(() => {

    const isLogged = localStorage.getItem('@sertao-rural:logged');

        return !!isLogged;

    });

    const signIn = (email: string, password: string) => {
    // const url = "http://localhost:3001/login";
    const url = "http://sertaorural.herokuapp.com/login";

        axios.post(url, {"email": email , "senha": password }).then(function(response) {
            const token = response.data.token;
            const validacao = response.data.valido;
            alert(validacao);
            alert(token);  

        if(validacao){
            localStorage.setItem('@sertao-rural:logged', 'true');
            setLogger(true);
        }else{
            alert('Senha ou usuário inválidos')
        }

        });
    }

    const signOut = () => {

        localStorage.removeItem('@sertao-rural:logged');
        setLogger(false);
    }

    return(
        <AuthContext.Provider value = {{logged, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}
function useAuth(): IAuthContext{
    const context = useContext(AuthContext);

    return context;
}

export {AuthProvider, useAuth}; */

import React, {createContext, useState, useContext} from 'react';

interface IAuthContext{

    logged: boolean;
    signIn(email: string, password: string):void;
    signOut(): void;
    
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

    const AuthProvider: React.FC = ({children}) => {

    const [logged, setLogger] = useState<boolean>(() => {

    const isLogged = localStorage.getItem('@sertao-rural:logged');

        return !!isLogged;

    });

    const signIn = (email: string, password: string) => {

        if(email === 'luis@gmail.com' && password === '123'){
            localStorage.setItem('@sertao-rural:logged', 'true');
            setLogger(true);
        }else{
            alert('Senha ou usuário inválidos')
        }
    }

    const signOut = () => {

        localStorage.removeItem('@sertao-rural:logged');
        setLogger(false);
    }

    return(
        <AuthContext.Provider value = {{logged, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}
function useAuth(): IAuthContext{
    const context = useContext(AuthContext);

    return context;
}

export {AuthProvider, useAuth};