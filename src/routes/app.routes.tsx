import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Layout       from '../components/Layout';
import Dashboard    from '../pages/Dashboard';
import Vendas       from '../pages/Vendas';
import Despesas     from '../pages/Despesas';
import Funcionarios from '../pages/Funcionarios';



const AppRoutes: React.FC = () =>(
    <Layout>
        <Switch>
            <Route path ="/"             exact component = {Dashboard} />
            <Route path ="/vendas"       exact component = {Vendas} />
            <Route path ="/despesas"     exact component = {Despesas} />
            <Route path ="/funcionarios" exact component = {Funcionarios} />
            
        </Switch>
    </Layout>
);

export default AppRoutes;