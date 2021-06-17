import React from 'react';

import 'react-app-polyfill/ie11';
import { Formik, Field, FormikHelpers, Form } from 'formik';
import {ContainerForm, FormField} from './styles';
import {Post}  from '../Requests';



interface Values {
  descricao: string;
  frequencia: string;
  data: string;
  comprador: string;
  quantidade: string;
  valor: string;
  unidade: string;
}

const AppForm: React.FC = () => {
    return(

    <ContainerForm>
      <h3>Adicionar Venda</h3>

    <Formik
        initialValues={{

            descricao: '',
            frequencia: '',
            data: '',
            comprador: '',
            quantidade: '',
            valor: '',
            unidade: ''
        }}

        onSubmit={(
            values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {

            Post(
              values.descricao,
              values.frequencia,
              values.data,
              values.comprador,
              values.quantidade,
              values.valor,
              values.unidade);
 
              console.log("Valores Recebidos");
  
              alert("Dados Recebidos");
     
              document.location.reload(true);

            setSubmitting(false);
          }, 500);}
        }
    >
        <Form>
            
            <FormField>
                <label htmlFor="descricao">Descrição : </label>
                <Field id="descricao" name="descricao" className = 'input' placeholder="Tomate" />
            </FormField>

            <FormField>
                <label htmlFor="frequencia">Frequência: </label>
                <Field id="frequencia" name="frequencia" className = 'input' placeholder="Recorrente" />
            </FormField>
            
            <FormField>
                <label htmlFor="data">Data: </label>
                <Field id="data" name="data" className = 'input' placeholder="2021-12-05" />
            </FormField>

            <FormField>
                <label htmlFor="comprador">Comprador: </label>
                <Field id="comprador" name="comprador" className = 'input' placeholder="Zé do Pimentão" />
            </FormField>
          
            <FormField>
                <label htmlFor="quantidade">Quantidade: </label>
                <Field id="quantidade" name="quantidade" className = 'input' placeholder="50" />
            </FormField>
         
            <FormField>
                <label htmlFor="valor">Valor: </label>
                <Field id="valor" name="valor" className = 'input' placeholder="500" />
            </FormField>
          
            <FormField>
                <label htmlFor="unidade">Unidade: </label>
                <Field id="unidade" name="unidade" className = 'input' placeholder="500" />
            </FormField>
            
            <button type="submit">Adicionar</button>

        </Form>
      </Formik>
    </ContainerForm>
  );

     
        
    
}



export default AppForm;