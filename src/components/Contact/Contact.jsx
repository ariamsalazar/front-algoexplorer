import React from 'react';
import './Contact.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Contact extends React.Component {
    render(){
        return (
            <div className="root contact">
                {/* Component Title */}
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className="paper">
                            <div className="title__big">
                                Contact Us
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container className="form__contact" spacing={4}  justify="center">
                        <Grid item xs={4}>
                            <Paper className="paper less-padding">
                                <span className="title__input">Name <span className="input-required">*</span></span>
                                <input className="box__input" placeholder="Lebron James"></input>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className="paper less-padding">
                                <span className="title__input">Email <span className="input-required">*</span> </span>
                                <input className="box__input" placeholder="lebron@gmail.com"></input>
                            </Paper>
                        </Grid>
                        <Grid item xs={8}>
                            <Paper className="paper less-padding">
                                <span className="title__input">Subject <span className="input-required">*</span> </span>
                                <input className="box__input" placeholder="2. Support / Technical Issue"></input>
                            </Paper>
                        </Grid>
                        <Grid item xs={8}>
                            <Paper className="paper less-padding">
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
export default Contact;

