import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextField, SelectField, MenuItem } from 'material-ui';
import RadioButton from '../RadioButtonGroup';
import AutoComplete from '../AutoComplete';
import c from 'classnames';
import classes from './style.scss';

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSelectChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
      const floatingLabelText = 'Something';
      const hintText = 'Something';
      const value  = 'No Idea';
      const countries = [
        {
          id: 1,
          name: 'India',
        },
        {
          id: 2,
          name: 'India',
        },
        {
          id: 3,
          name: 'India',
        },
      ];

      const filters = {
        type: 'skillSet',
        values: [
          {
            id: '1',
            name: 'JAVA',
          },
          {
            id: '2',
            name: 'JS',
          },
          {
            id: '3',
            name: 'AWS',
          },
          {
            id: '4',
            name: 'BLAHH',
          },
          {
            id: '5',
            name: 'CS',
          }
        ]
      };
      return (
          <div>
            <p> Add Project </p>
            <TextField
                name="source"
                hintText={hintText}
                floatingLabelText={floatingLabelText}
                fullWidth
                value={value}
                onChange={this.handleInputChange}
                maxLength="150"
            />
            <SelectField
                  floatingLabelText={floatingLabelText}
                  hintText={hintText}
                  value={value}
                  onChange={this.handleSelectChange}
                  fullWidth
            >
                {
                  (
                    countries.length &&
                    countries.map(item => <MenuItem key={item.id} value={item.id} primaryText={item.name} />)
                  )
                }
            </SelectField>
            <SelectField
                floatingLabelText={floatingLabelText}
                hintText={hintText}
                value={value}
                onChange={this.handleSelectChange}
                fullWidth
              >
              {
                (
                  countries.length &&
                  countries.map(item => <MenuItem key={item.id} value={item.id} primaryText={item.name} />)
                )
              }
            </SelectField>
            <TextField
                name="source"
                hintText={hintText}
                floatingLabelText={floatingLabelText}
                fullWidth
                value={value}
                onChange={this.handleInputChange}
                maxLength="150"
            />
            <SelectField
              floatingLabelText={floatingLabelText}
              hintText={hintText}
              value={value}
              onChange={this.handleSelectChange}
              fullWidth
              >
              {
                (
                  countries.length &&
                  countries.map(item => <MenuItem key={item.id} value={item.id} primaryText={item.name} />)
                )
              }
            </SelectField>
            <SelectField
              floatingLabelText={floatingLabelText}
              hintText={hintText}
              value={value}
              onChange={this.handleSelectChange}
              fullWidth
              >
              {
                (
                  countries.length &&
                  countries.map(item => <MenuItem key={item.id} value={item.id} primaryText={item.name} />)
                )
              }
            </SelectField>
            <AutoComplete filterData={ filters } onChange={ this.setFilters } />
            <TextField
              name="source"
              hintText={hintText}
              floatingLabelText={floatingLabelText}
              fullWidth
              value={value}
              onChange={this.handleInputChange}
              maxLength="150"
              />
            <TextField
              name="source"
              hintText={hintText}
              floatingLabelText={floatingLabelText}
              fullWidth
              value={value}
              onChange={this.handleInputChange}
              maxLength="150"
              />
            <TextField
              name="source"
              hintText={hintText}
              floatingLabelText={floatingLabelText}
              fullWidth
              value={value}
              onChange={this.handleInputChange}
              maxLength="150"
              />
            <TextField
              name="source"
              hintText={hintText}
              floatingLabelText={floatingLabelText}
              fullWidth
              value={value}
              onChange={this.handleInputChange}
              maxLength="150"
              />
            <TextField
              name="source"
              hintText={hintText}
              floatingLabelText={floatingLabelText}
              fullWidth
              value={value}
              onChange={this.handleInputChange}
              maxLength="150"
              />
            <TextField
              name="source"
              hintText={hintText}
              floatingLabelText={floatingLabelText}
              fullWidth
              value={value}
              onChange={this.handleInputChange}
              maxLength="150"
              />
            <TextField
              name="source"
              hintText={hintText}
              floatingLabelText={floatingLabelText}
              fullWidth
              value={value}
              onChange={this.handleInputChange}
              maxLength="150"
              />
            <RadioButton />
          </div>
      );
  }
}

AddProject.propTypes = {
  content: PropTypes.object.isRequired,
};

export default AddProject;
