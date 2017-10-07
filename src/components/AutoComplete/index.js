import React, { Component } from  'react';
import ReactTags from 'react-tag-autocomplete';
import c from 'classnames';
import capitalize from 'lodash/capitalize';
import styles from '../CheckBoxWrapper/style.scss';
import classes from './style.scss';

export default class AutoComplete extends Component {
    constructor (props) {
      super(props)

      this.state = {
        tags: [],
        suggestions: [
          { id: 3, name: "Bananas" },
          { id: 4, name: "Mangos" },
          { id: 5, name: "Lemons" },
          { id: 6, name: "Apricots" }
        ],
        isExpanded: true
      };

      this.toggle = this.toggle.bind(this);
    }

    handleDelete (i) {
      const tags = this.state.tags.slice(0)
      tags.splice(i, 1)
      this.setState({ tags }, () => {
          this.props.onChange(tags);
      });
    }

    handleAddition (tag) {
      const tags = [].concat(this.state.tags, tag)
      this.setState({ tags }, () => {
          this.props.onChange(tags, this.props.filterData.type);
      });
    }

    toggle() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }

    render () {
        const { filterData } = this.props;
        const className = c('material-icons', styles.iconStyle);
        return (
          <div className={ classes.autoCompleteWrapper }>
              <span> { capitalize(filterData.type) }: </span>
              { this.state.isExpanded
                ? <i className={ className } onClick={ () => this.toggle() }>keyboard_arrow_up</i>
                : <i className={ className } onClick={ () => this.toggle() }>keyboard_arrow_down</i>
              }
              { this.state.isExpanded
                ? <ReactTags
                    tags={ this.state.tags }
                    suggestions={ filterData.values }
                    handleDelete={ this.handleDelete.bind(this) }
                    handleAddition={ this.handleAddition.bind(this) }
                    placeholder={ `Search with ${filterData.type}` }
                />
                : null
              }

          </div>
        )
    }
}