import React, {useMemo, useState, useEffect} from 'react';

import {Container, Filters} from './styles';

import {uuid}               from 'uuidv4';

import Content              from '../../components/Content';
import ContentHeader        from '../../components/ContentHeader';
import SelectInput          from '../../components/SelectInput';

import HistoryFinanceCard   from '../../components/HistoryFinanceCard';
import gains                from '../../repositories/gains';
import formatCurrency       from '../../components/utils/formatCurrency';
import formatDate           from '../../components/utils/formatDate';
import listOfMonths         from '../../components/utils/months'
import ButtonNovaVenda      from './IntegrationBD/ButtonAdd';
import vendas from '../../repositories/vendas';
/*
interface IData{
    id:              string;
    description:     string;
    amountFormatted: string;
    frequency:       string;
    dateFormatted:   string;
    tagColor:        string;
}*/

interface IData{

    id: string,
    descricao: string,
    dataFormatada: string,
    valorFormatado: string,
    frequencia: string,
    tagColor: string
}

const Vendas: React.FC= () => {

    const [data, setData] = useState<IData[]>([]);

    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
    const [yearSelected,  setYearSelected]  = useState<string>(String(new Date().getFullYear));
    
    const[frequencyFilterSelected, setfrequencyFilterSelected] = useState(['recorrente', 'eventual']);
 
    const title = 'Vendas';
    const lineColor = '#F7931B';
    const vendasBD = vendas;
  
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

    vendas.forEach(item => {

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

}, [vendasBD]);

   const handleFrequencyClick = (frequency: string) => {
        const alreadySelected = frequencyFilterSelected.findIndex(item => item === frequency);

        if(alreadySelected >= 0){
            const filtered = frequencyFilterSelected.filter(item => item !== frequency);
            setfrequencyFilterSelected(filtered);
        }else{
            setfrequencyFilterSelected((prev) => [...prev, frequency] );
        }
   }

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

    useEffect(() => {

      const filteredDate = vendasBD.filter( item =>{
            const date = new Date(item.date);
            const month = String(date.getMonth() + 1);
            const year  = String(date.getFullYear()) ;

            return month === monthSelected && year === yearSelected && frequencyFilterSelected.includes(item.frequencia);
      });

      const formattedData = filteredDate.map(item => {
            return {

                id: uuid(),
                descricao: item.desc_venda ,
                valorFormatado: formatCurrency(Number(item.valor_venda)),
                frequencia: (item.frequencia).toLocaleLowerCase(),
                dataFormatada: formatDate (item.date),
                tagColor: item.frequencia === 'recorrente' ? '#4E41F0': '#E44C4E'
            }
        }
        )
       setData(formattedData);
    },[vendasBD, monthSelected, yearSelected, data.length, frequencyFilterSelected ]);

    return(
        
        <Container>
            <ContentHeader title={title} lineColor = {lineColor}>
                <SelectInput options ={months} onChange ={(e) => handleMothSelected(e.target.value)} defaultValue ={monthSelected} />

                <SelectInput options ={years}  onChange ={(e) => handleYearSelected(e.target.value)}  defaultValue = {yearSelected} />
            </ContentHeader>  

            <Filters>
                <button type = "button" className= {`tag-filter tag-filter-recurrent
                ${frequencyFilterSelected.includes('recorrente') && 'tag-actived'} `}
                onClick = {() => handleFrequencyClick('recorrente')} >
                    Recorrentes
                </button>

                <button type = "button" 
                className= {`tag-filter tag-filter-eventual
                ${frequencyFilterSelected.includes('eventual') && 'tag-actived'} `}
                onClick = {() => handleFrequencyClick('eventual')}>
                    Eventual
                </button>
            </Filters>

            <ButtonNovaVenda />
            
            <Content>
             {   
                data.map(item => (

                <HistoryFinanceCard
                    key      = {item.id}
                    tagColor = {item.tagColor}
                    title    = {item.descricao}
                    subtitle = {item.dataFormatada}
                    amount   = {item.valorFormatado}
                />  
                ))
            }
            </Content>
        </Container>
    );
}

export default Vendas;