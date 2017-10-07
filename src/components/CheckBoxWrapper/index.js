import React, { Component } from  'react';
import Checkbox from 'material-ui/Checkbox';
import c from 'classnames';
import capitalize from 'lodash/capitalize';
import classes from './style.scss';
import styles from './styles';

export default class CheckBoxWrapper extends Component {
    constructor (props) {
      super(props)
      this.state = {
          activeCheckboxes: [],
          isExpanded: true,
      };
    }

    handleCheck(event, isInputchecked, id, type) {
      this.setState({
          activeCheckboxes: isInputchecked
            ? this.state.activeCheckboxes.filter(x => x !== id)
            : [ ...this.state.activeCheckboxes, id ]
      }, () => {
          this.props.onChange(this.state.activeCheckboxes, type);
      });
    }

    toggle() {
      this.setState({ isExpanded: !this.state.isExpanded });
    }

    render() {
        const { filterData } = this.props
        const className = c('material-icons', classes.iconStyle);
        return (
            <div>
              <span> { capitalize(filterData.type) }: </span>
              { this.state.isExpanded
                  ? <i className={ className } onClick={ () => this.toggle() }>keyboard_arrow_up</i>
                  : <i className={ className } onClick={ () => this.toggle() }>keyboard_arrow_down</i>
              }
              { this.state.isExpanded
                  ? filterData.values.map(checkbox => {
                      return (
                          <Checkbox
                              key={ checkbox.id }
                              label={checkbox.name}
                              onCheck={(event, isInputchecked) => this.handleCheck(event, isInputchecked, checkbox.id, filterData.type)}
                              checked={ this.state.activeCheckboxes.includes(checkbox.id) }
                              labelStyle={styles.labelStyle}
                              iconStyle={styles.iconStyle}
                           />
                      )
                  })
                  : null
              }
            </div>
        )
    }
}
