import React from 'react';
import './Overview.css';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
        marginTop: '2rem',
        height: '2vh',
        padding: theme.spacing(5),
    }
  }));
  
  export default function Overview() {  
        const classes = useStyles();
        return (
            <div className={classes.root}>
               {/* First component */}
               <div className="main__wrapper">
                    <div className="box-container">
                        <span className="box-title">Algo price</span>
                        <div className="box-value">$0.76 <span className="rating-value">0.7 %</span></div>
                    </div>
                    <div className="box-container">
                        <span className="box-title with-icon">Circulating supply</span>
                        <div className="box-value">$605,978,371 </div>
                    </div>
                    <div className="box-container">
                        <span className="box-title with-icon">Tradable supply</span>
                        <div className="box-value">$2,605,978,371 </div>
                    </div>
                    <div className="box-container">
                        <span className="box-title with-icon">Online Stake</span>
                        <div className="box-value">1,622,972,252 </div>
                    </div>
                    <div className="box-container">
                        <span className="box-title with-icon">Rewards Per block Per</span>
                        <div className="box-value">0,002 Algos </div>
                    </div>
               </div>
               {/* Second component */}
               <div className="main__wrapper__second">
                    <div className="box-container">
                        <div className="box-inside">
                            <span className="box-title">Total transactions</span>
                            <div className="box-value">$2,245,564</div>
                        </div>
                        <div className="box-inside">
                            <span className="box-title">Lastest blocks</span>
                            <div className="box-value">3345454</div>
                        </div>
                    </div>
                    <div className="box-container with-padding">
                        <span className="box-title">Block transactions speed</span>
                    </div>
                    <div className="box-container with-padding">
                        <span className="box-title side">Algo daily transactions</span>
                    </div>
               </div>
            </div>
        ); 
}

