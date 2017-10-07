import React, { Component } from  'react';
import ReactTags from 'react-tag-autocomplete';
import capitalize from 'lodash/capitalize';
import styles from './style.scss';

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
        ]
      }
    }

    handleDelete (i) {
      const tags = this.state.tags.slice(0)
      tags.splice(i, 1)
      this.setState({ tags })
    }

    handleAddition (tag) {
      const tags = [].concat(this.state.tags, tag)
      this.setState({ tags })
    }

    render () {
      const { filterData } = this.props;

        return (
          <div>
              <h3> { capitalize(filterData.type) }: </h3>
              <ReactTags
                  tags={ this.state.tags }
                  suggestions={ filterData.values }
                  handleDelete={ this.handleDelete.bind(this) }
                  handleAddition={ this.handleAddition.bind(this) }
                  placeholder={ `Search with ${filterData.type}` }
              />
          </div>
        )
    }
}