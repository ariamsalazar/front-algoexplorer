import React from 'react';
import './Contact.css';
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
      flexGrow: 1,
      position: 'relative',
      marginTop: '64px',
      padding: 0,
    },
    paper: {
        padding: 0,
        border: 'none',
        boxShadow: 'none',
        borderRadius: '4px'
    }
});
  
class Contact extends React.Component {
    render(){
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                {/* Component Title */}
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <div className="title__big">
                                Contact Us
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container className="form__contact" spacing={4}  justify="center">
                    
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>
                                <span className="title__input">Name <span className="input-required">*</span></span>
                                <input className="box__input" placeholder="Lebron James"></input>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>
                                <span className="title__input">Email <span className="input-required">*</span> </span>
                                <input className="box__input" placeholder="lebron@gmail.com"></input>
                            </Paper>
                        </Grid>
                        <Grid item xs={8}>
                            <Paper className={classes.paper}>
                                <span className="title__input">Subject <span className="input-required">*</span> </span>
                                <input className="box__input" placeholder="2. Support / Technical Issue"></input>
                            </Paper>
                        </Grid>
                        <Grid item xs={8}>
                            <Paper className={classes.paper}>
                                <span className="title__input">Messsage </span>
                                <textarea className="box__textarea" placeholder="Where applicable please provide the following information

                                    1. Txn hash (Transaction receipt): 

                                    2. Wallet provider Or exchange service: 

                                    3. Your question/issue: ">
                                    
                                </textarea>
                            </Paper>
                        </Grid>
                        <Grid item xs={8} align="right">
                            <Button className="submit__btn">Send Message</Button>
                        </Grid>
                </Grid>
                
            </div>
        ); 
    }
}
export default withStyles(styles)(Contact);

