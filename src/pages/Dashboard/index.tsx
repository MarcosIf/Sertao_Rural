import React, {useMemo, useState} from 'react';

import {Container, Content}   from './styles';
import ContentHeader          from '../../components/ContentHeader';
import SelectInput            from '../../components/SelectInput';
import WalletBox              from '../../components/WalletBox';
import MessageBox             from  '../../components/MessageBox';

import despesas               from '../../repositories/expenses';
import vendas                 from '../../repositories/vendas';

import listOfMonths           from '../../components/utils/months';

import happyImg               from    '../../images/happy.svg';
import sadImg                 from    '../../images/sad.svg';
import ufaImg                 from    '../../images/grinning.svg';



const Dashboard: React.FC = () => {

    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
    
    const [yearSelected,  setYearSelected]  = useState<string>(String(new Date().getFullYear));


    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
          return{
              value: index + 1,
              label: month,
          }
      });         
  }, []);
  
    const years = useMemo(() => {
      let uniqueYears: number[] = [];
  
      [...despesas, ...vendas].forEach(item => {
  
          const date = new Date(item.date);
          const year = date.getFullYear();
  
          if(!uniqueYears.includes(year)){
              uniqueYears.push(year);
          }
      });
      return uniqueYears.map(year =>{
          return{
              value: year,
              label: year,
          }
      });
  
  }, []);

  const totalExpenses = useMemo(() => {
    let total: number = 0;

    despesas.forEach(item => {
        const date = new Date(item.date);
        const year = String(date.getFullYear()) ;
        const month = String(date.getMonth() + 1) ;

        if(month === monthSelected && year === yearSelected){
            try{
                total += Number(item.amount)
            }catch{
                throw new Error('Invalid amount!')
            }
           
        }
    })
        return total;
  },[monthSelected,yearSelected]);

  const totalGains = useMemo(() => {
    let total: number = 0;

    vendas.forEach(item => {
        const date = new Date(item.date);
        const year = String(date.getFullYear()) ;
        const month = String(date.getMonth() + 1) ;

        if(month === monthSelected && year === yearSelected){
            try{
                total += Number(item.valor_venda)
            }catch{
                throw new Error('Invalid amount!')
            }
           
        }
    })
        return total;
  },[monthSelected,yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalGains, totalExpenses]);



  const message = useMemo(() => {
    if(totalBalance < 0){
        return {
            title: "Que triste!",
            description: "Neste mês você gastou mais do que deveria",
            footerText: "Reavalie suas despesas.",
            icon: sadImg
        }
    }

    else if(totalBalance == 0){
        return {
            title: "Ufaa! ",
            description: "Neste mês você gastou exatamente o que ganhou!",
            footerText: "Tenha cuidado. No próximo mês tente poupar o seu dinheiro",
            icon: ufaImg
        }
    }else{
        return {
        title: "Muito bem ",
        description: "Seu saldo está positivo",
        footerText: "Considere investir o seu saldo.",
        icon: happyImg
        }
    }

  },[totalBalance]);

    const handleMothSelected = (month: string) => {
        try{
             setMonthSelected(month);
        }catch(Error){
             throw new Error('Invalid month value. Is accept 0 - 24.')
        }
    }
    
    const handleYearSelected = (year: string) => {
     try{
    
          setYearSelected(year);
     }catch(Error){
          throw new Error('Invalid month value. Is accept interger numbers.')
     }
    }
    
    return(

        <Container>
            <ContentHeader title='Dashboard' lineColor = "#287C43">
            <SelectInput options ={months} onChange ={(e) => handleMothSelected(e.target.value)} defaultValue ={monthSelected} />

            <SelectInput options ={years}  onChange ={(e) => handleYearSelected(e.target.value)}  defaultValue = {yearSelected} />
            </ContentHeader>  

        <Content>
            
        <WalletBox 
            title = "Saldo"
            amount = {totalBalance}
            footerlabel = "atualizado com base nas vendas e despesas"
            icon= "dolar"
            color = "#4E41F0"
        />

        <WalletBox 
            title = "Vendas"
            amount = {totalGains}
            footerlabel = "atualizado com base nas vendas e despesas"
            icon= "arrowUp"
            color = "#F7931B"
        />

        <WalletBox 
            title = "Despesas"
            amount = {totalExpenses}
            footerlabel = "atualizado com base nas vendas e despesas"
            icon= "arrowDown"
            color = "#E44C4E"
        />

        <MessageBox 
            title = {message.title}
            description = {message.description}
            footerText = {message.footerText}
            icon = {message.icon}
        />

        </Content>

        </Container>
    );
}

export default Dashboard;