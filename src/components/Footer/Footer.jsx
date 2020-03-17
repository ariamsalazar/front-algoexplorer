import React from 'react';
import './Footer.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

class Footer extends React.Component {
    render(){
        return (
            <div className="root footer">
                 <Grid container spacing={5} className="master">
                    <Grid item xs={4}>
                        <Paper className="paper__footer">
                            <div className="logo__footer"><Link className="icon-moon"></Link></div>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className="paper__footer">
                            <span className="copy__footer">© 2020. Rand Labs. All Rights Reserved</span>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className="paper__footer">
                            <div className="link__footer">
                                <Link className="link">Contact us </Link>
                                <Link className="link icon">Follow </Link>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        ); 
    }
}

export default Footer;
