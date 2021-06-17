import React, {useMemo} from 'react';

import Toggle from '../Toggle';

import ImgSettings from '../../images/settings.svg'
import ImgNotification from '../../images/bell.svg'
import imgAvatar from '../../images/luis.jpg'

import emojis from '../../components/utils/emojis';

import  { Container,
          Search,
          Settings,
          Notification,
          Profile, 
          Welcome, 
          UserName,
          Options } from './styles';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import {BiSearchAlt2}      from 'react-icons/bi';

import Badge from '@material-ui/core/Badge';
import { Button } from '@material-ui/core';



const avatarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);
const pesquisa = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }),
);

const useStylesnotification = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(3),
      },
    },
  }),
);


const MainHeader: React.FC = () => {
    const classes = avatarStyles();
    const classe = pesquisa();
    const notification = useStylesnotification();


  /*   const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    },[]) */

    return(

        <Container>
            <Toggle />
           
            <Search>  
                <Paper component="form" className={classe.root}>
                    <InputBase
                        className={classe.input}
                        placeholder="Pesquisar"
                        inputProps={{ 'aria-label': 'pesquisar' }}
                    />
                    <IconButton type="submit" className={classe.iconButton} aria-label="search">
                        <BiSearchAlt2 /> 
                    </IconButton>
                    <Divider className={classe.divider} orientation="vertical" />
                </Paper>
            </Search>

        <Options>

            <Notification className={notification.root}>
                <Button>
                    <Badge color="secondary" variant="dot">
                        <img id="config" width = '30px' src={ImgNotification} alt=""/>
                    </Badge>
                </Button>    
            </Notification>
          
            <Profile>
                 <Avatar alt="Remy Sharp" src={imgAvatar} />
               {/*  <Welcome> Olá, {emoji} <UserName>Luis Carlos</UserName>  </Welcome> */}
            </Profile>

        </Options>    

        </Container>
        
    );
}

export default MainHeader;