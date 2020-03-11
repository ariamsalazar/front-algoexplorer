import React from 'react';
import './Filters.css';
import Link from '@material-ui/core/Button';
import Select, { components } from "react-select";
import createClass from "create-react-class";

import { colourOptions } from "./options";

const Option = createClass({
    render() {
      return (
        <div>
          <components.Option {...this.props}>
            <input
              type="checkbox"
              checked={this.props.isSelected}
              onChange={e => null}
            />{" "}
            <label>{this.props.label} </label>
          </components.Option>
        </div>
      );
    }
  });
  
class Filters extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          checked: false,
          values: []
        };
    }
    render(){
        return (
            <div className="header__list">
                Filter: 
                <form class="select__style">
                    <Select
                        closeMenuOnSelect={false}
                        isMulti
                        components={{ Option, MultiValue }}
                        defaultValue={false}
                        options={colourOptions}               
                        backspaceRemovesValue={false}
                        placeholder="Type of transactions"
                    />
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

const MultiValue = props => {
    return (
      <components.MultiValue {...props}>
        <span>{props.data.label}</span>
      </components.MultiValue>
    );
};


export default Filters;


