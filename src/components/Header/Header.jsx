import React from 'react';
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      display: 'flex'
    },
    title: {
      flexGrow: 1,
      color: '#fff'
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'left',
        background: 'white',
        border: 'none',
        boxShadow: 'none',
        height: '3em'
    }
  }));
  
  export default function Header() {  
        const classes = useStyles();
        const preventDefault = event => event.preventDefault();
        return (
            <div className={classes.root}>
                <AppBar position="static" className="app__bar">
                    <Toolbar>
                        <Grid container spacing={2}>
                            <Grid item xs={2} >
                                <div className="logo__main"></div>
                            </Grid>
                            <Grid item xs={5}>
                                <form className="form__search">
                                    <input type="text" name="name"  className="form__input" placeholder="Search by Address/ Tx ID / Blocks/ Asset Name/ Asset ID"/><Button variant="outlined" className="btn__submitt">Search</Button>
                                </form>
                            </Grid>
                            <Grid item xs={5}>
                               <div className="container__link__header">
                                    <Link href="#" onClick={preventDefault} className="link__main">
                                        Assets
                                    </Link>
                                     <Link href="#" onClick={preventDefault} className="link__main">
                                        Top Accounts
                                    </Link>
                                    <Link href="#" onClick={preventDefault} className="link__main">
                                        Tools
                                    </Link>
                                    <Link href="#" onClick={preventDefault} className="link__main last">
                                        Wallet
                                    </Link>
                                    <select className="select__network">
                                        <option value="grapefruit">Betanet</option>
                                        <option value="lime">Testnet</option>
                                        <option selected value="coconut">Mainnet</option>
                                    </select>
                               </div>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        ); 
}

