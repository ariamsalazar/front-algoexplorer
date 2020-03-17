import React from 'react';
import './RewardCalculator.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
class Fag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          expanded: -1,
          flag: false
        };
        this.onChangePanel = this.onChangePanel.bind(this);
    }
    onChangePanel(e){
        if(this.state.flag===false){
            this.setState({ expanded: e.currentTarget.id, flag:true});
        }else{
            this.setState({expanded: -1, flag:false});
        }
    }
    render(){
        return (
            <div className="faq__list">
                <span className="title-faq">Participation Rewards FAQ:</span>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={
                            this.state.expanded === "panel1a-header" && this.state.flag===true
                            ? <RemoveIcon />
                            : <AddIcon />  
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        onClick={this.onChangePanel}
                        >
                        <Typography >What do I need to do to start earning rewards from my Algo balance ?</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className="answer-faq">
                        Gouda monterey jack caerphilly. Macaroni cheese cheese triangles cow lancashire stinking bishop cut the cheese camembert de normandie stilton. Squirty cheese fromage st. agur blue cheese red leicester hard cheese fromage say cheese hard cheese. Stinking bishop pecorino hard cheese cream cheese cream cheese.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={
                            this.state.expanded === "panel2a-header" && this.state.flag===true
                            ? <RemoveIcon />
                            : <AddIcon />  
                        }
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        onClick={this.onChangePanel}
                        >
                        <Typography >Does every address receive rewards?</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className="answer-faq">
                            Gouda monterey jack caerphilly. Macaroni cheese cheese triangles cow lancashire stinking bishop cut the cheese camembert de normandie stilton. Squirty cheese fromage st. agur blue cheese red leicester hard cheese fromage say cheese hard cheese. Stinking bishop pecorino hard cheese cream cheese cream cheese.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        >
                        <Typography >If I keep my Algos in a hardware wallet like Ledger Nano S, will I still earn awards?</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className="answer-faq">
                            Gouda monterey jack caerphilly. Macaroni cheese cheese triangles cow lancashire stinking bishop cut the cheese camembert de normandie stilton. Squirty cheese fromage st. agur blue cheese red leicester hard cheese fromage say cheese hard cheese. Stinking bishop pecorino hard cheese cream cheese cream cheese.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                        >
                        <Typography >How many rewards will I earn?</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className="answer-faq">
                            Gouda monterey jack caerphilly. Macaroni cheese cheese triangles cow lancashire stinking bishop cut the cheese camembert de normandie stilton. Squirty cheese fromage st. agur blue cheese red leicester hard cheese fromage say cheese hard cheese. Stinking bishop pecorino hard cheese cream cheese cream cheese.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel5a-content"
                        id="panel5a-header"
                        >
                        <Typography > I do not see any specific transaction depositing my rewards, how is that possible?</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className="answer-faq">
                            Gouda monterey jack caerphilly. Macaroni cheese cheese triangles cow lancashire stinking bishop cut the cheese camembert de normandie stilton. Squirty cheese fromage st. agur blue cheese red leicester hard cheese fromage say cheese hard cheese. Stinking bishop pecorino hard cheese cream cheese cream cheese.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
              
            </div>
        ); 
    }
}

export default Fag;
