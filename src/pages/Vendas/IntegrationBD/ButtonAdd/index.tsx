import React from 'react';
import  { Container } from './styles';

import Form from './form';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal                               from '@material-ui/core/Modal';
import Backdrop                            from '@material-ui/core/Backdrop';
import Fade                                from '@material-ui/core/Fade';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid green',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);



const ButtonAdd: React.FC = () => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return(
    <Container>
            
      <button type="button" onClick={handleOpen}>
        NOVA VENDA
      </button>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
              <Form />
          </div>
        </Fade>
      </Modal>      
</Container>
        
    );

}

export default ButtonAdd;