import React from 'react';
import './Filters.css';
import Link from '@material-ui/core/Button';
import Select from "react-select";

const options = [
    { label: "Sent", value: 1 },
    { label: "Received", value: 2 },
    { label: "All", value: 3 },
];
class Filters extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          checked: false,
          values: []
        };
    }
    onChangeCheckbox = e => {
        const isChecked = !this.state.checked;
        this.setState({
          checked: isChecked,
          values: isChecked ? options : this.state.values
        });
      };
      onChange = opt => {
        const allOptionsSelected = opt.length === options.length;
        this.setState({
          checked: allOptionsSelected ? true : false,
          values: opt
        });
    };
    render(){
        return (
            <div className="header__list">
                Filter: 
                <form class="select__style">
                    <Select
                    isMulti
                    onChange={this.onChange}
                    options={options}
                    value={this.state.values}
                    placeholder="Type of transactions"
                    />
                    {/* <select className="select__filter">
                        <option value="grapefruit">Type of transactions</option>
                        <option value="grapefruit">Tranfer</option>
                    </select>
                    <div class="arrow"></div> */}
                </form>
                <div className="container__pagination">
                    1-25 of 9,912
                    <Link className="prev__pagination"></Link>
                    <Link className="next__pagination"></Link>
                </div>
            </div>
        ); 
    }
}
export default Filters;


