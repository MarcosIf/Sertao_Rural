import React from 'react';

import {
    MdDashboard,
    MdAddShoppingCart,
    MdPeopleOutline
} from 'react-icons/md';

import {FaProductHunt}            from 'react-icons/fa';
import {IoIosRemoveCircleOutline} from 'react-icons/io';
import {RiPlantFill}              from 'react-icons/ri';
import {BiBox, BiExit, BiSearchAlt2}            from 'react-icons/bi';
import {useAuth}                  from '../../hooks/auth';

import LogoRural from '../../images/ruralC.png'

import  {   Container,
            Header,     
            LogImg,
            MenuContainer,
            MenuItemButton,
            MenuItemLink } from './styles';

const Aside: React.FC = () => {
    const { signOut } = useAuth();
    return(
        <Container>
            <Header>
                <LogImg src={LogoRural} alt="Logo Sertão Rural"/>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/">
                   <MdDashboard /> Dashboard   
                </MenuItemLink>

                <MenuItemLink href="/vendas">
                   <MdAddShoppingCart /> Vendas 
                </MenuItemLink>

                <MenuItemLink href="/despesas">
                    <IoIosRemoveCircleOutline /> Despesas
                </MenuItemLink>

                <MenuItemLink href="produtos">
                   <FaProductHunt /> Produtos
                </MenuItemLink>
                
                <MenuItemLink href="funcionarios">
                    <MdPeopleOutline /> Funcionários
                </MenuItemLink>

                <MenuItemLink href="plantacoes">
                   <RiPlantFill /> Plantações
                </MenuItemLink>

                <MenuItemLink href="insumos">
                    <BiBox /> Insumos
                </MenuItemLink>

                <MenuItemButton onClick={signOut}>
                    <BiExit /> Sair
                </MenuItemButton>
                
            </MenuContainer> 
        </Container>  
    );
}

export default Aside;