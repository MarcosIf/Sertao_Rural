import React from 'react';
import axios from 'axios';


async function Entrar(email: string, password: string) {

    const url = "http://localhost:3001/login";

    axios.post(url, {"email": email , "senha": password }).then(function(response) {
        const token = response.data.token;
        const validacao = response.data.valido;
        alert(validacao);
        alert(token);  
    });
}

export default Entrar;