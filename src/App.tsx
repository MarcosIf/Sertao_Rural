import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalSyles from './styles/GlobalStyles';
import Routes from './routes';
import Dash from './pages/Dashboard'

import light from './styles/themes/light';
import dark from './styles/themes/dark';

const App: React.FC  = () =>{
    return(
        <ThemeProvider theme={light}>
            <GlobalSyles />
                <Routes />  
        </ThemeProvider>
    );
}
export default App;