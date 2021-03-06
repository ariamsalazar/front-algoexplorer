import React from 'react';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import iconSearch from '../../assets/images/search.png';
import iconWallet from '../../assets/images/wallet-blue.png';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
class Header extends React.Component {
    
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.state = {
            dropdownOpen: false,
            hoveredEl: -1
        };
    }
    handleMouseOver(e) {
        e.stopPropagation();
        if(e.target.className.indexOf("dropdown") === -1){
            console.log(e.target.className);
            this.setState({ hoveredEl: e.target.className });
        }     
    }
    handleMouseLeave(e) {
        e.preventDefault();
        this.setState({ hoveredEl: -1 })
    };
    toggle(i) {
        this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
        }));
    }
    onMouseEnter() {
        this.setState({dropdownOpen: true});
    }
    onMouseLeave() {
        this.setState({dropdownOpen: false});
    }
    render(){
        return (
            <div className="root header">
                {/* NavBar Desktop */}
                <AppBar position="static" className="app__bar">
                    <Toolbar  >
                        <Grid container spacing={2} className="master">
                            <Grid item xs={2} className="paper no-padding">
                                <Link className="logo__main" href="/" />
                            </Grid>
                            <Grid item xs={5}>
                                <form className="form__search">
                                    <input type="text" name="name"  className="form__input" placeholder="Search by Address/ Tx ID / Blocks/ Asset Name/ Asset ID"/><Button variant="outlined" className="btn__submitt">
                                        <img className="search-icon" src={iconSearch} width="20"/>
                                    </Button>
                                </form>
                            </Grid>
                            <Grid item xs={5}>
                            <div className="container__link__header">
                                    <li className="assets-list" id="drop__link" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} >Assets
                                        {this.state.hoveredEl === "assets-list" &&
                                            <ul className="dropdown__items">
                                                <div className="triangulo-equilatero-bottom"></div>
                                                <a href="/" className="dropdown-item">Standard </a>
                                                <li className="dropdown-item">Non-fungible ASA</li>
                                            </ul>
                                        }
                                    </li>
                                    <li className="statistics-list" id="drop__link" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} >Statistics
                                        {this.state.hoveredEl === "statistics-list" &&
                                            <ul className="dropdown__items">
                                                <div className="triangulo-equilatero-bottom"></div>
                                                <li className="dropdown-item">Top Accounts</li>
                                                <li className="dropdown-item">Top Statistics</li>
                                            </ul>
                                        }
                                    </li>
                                    <li className="tools-list" id="drop__link" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} > Tools
                                        {this.state.hoveredEl === "tools-list" &&
                                            <ul className="dropdown__items">
                                                <div className="triangulo-equilatero-bottom"></div>
                                                <li className="dropdown-item">Rewards Calculator</li>
                                                <li className="dropdown-item">2019 Staking Rewards</li>
                                                <li className="dropdown-item">Algorand Tester Dispenser</li>
                                            </ul>
                                        }
                                    </li>
                                    {/* <a id="drop__link" href="/" class="dev-list">Dev API </a> */}
                                    <li id="drop__link" className="wallet-list" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} ><img className="search-wallet" src={iconWallet}/>Wallets
                                        {this.state.hoveredEl === "wallet-list" &&
                                            <ul className="dropdown__items">
                                                <div className="triangulo-equilatero-bottom"></div>
                                                <li className="dropdown-item">My Algo Wallet</li>
                                                <li className="dropdown-item">Algorand iOS Wallet</li>
                                                <li className="dropdown-item">Algorand Android Wallet</li>
                                                <li className="dropdown-item">Atomic Wallet</li>
                                            </ul>
                                        }
                                    </li>
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
                {/* NavBar Mobile */}
                <AppBar position="fixed" className="app__bar__mobile">
                    <Toolbar>
                        {/* <div className="grow" />
                        <IconButton color="inherit">
                            <SearchIcon />
                        </IconButton>
                        <IconButton edge="start" color="inherit" aria-label="open drawer">
                            <MenuIcon />
                        </IconButton> */}
                        <Grid container spacing={2} >
                            <Grid item xs={8} className="paper no-padding">
                                <Link href="/" className="logo__main mobile av" />
                            </Grid>
                            <Grid item xs={2} className="paper no-padding">
                                A
                            </Grid>
                            <Grid item xs={2} className="paper no-padding">
                                A
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        ); 
    }
}
export default Header;
