import React, { Component } from 'react';
import InlineEdit, { SingleLineTextInput } from '@atlaskit/inline-edit';

// <FieldInlineEdit
//  label='Vehicle Plate'
//  name='vehiclePlate'
//  value='京A457HK'
//  onConfirm={({ [name]: value }) => {}} />
export class FieldInlineEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { [props.name]: props.value };
    this.onChange = this.onChange.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ [nextProps.name]: nextProps.value });
  }

  onChange(e) {
    this.setState({ [[this.props.name]]: e.target.value });
  }

  onConfirm() {
    this.props.onConfirm(this.state);
  }

  onCancel() {
    this.setState({ [this.props.name]: this.props.value });
  }

  render() {
    return (
      <InlineEdit
        label={this.props.label}
        editView={
          <SingleLineTextInput
            isEditing
            isInitiallySelected
            onChange={this.onChange}
            value={this.state[this.props.name]}
          />
        }
        readView={
          <SingleLineTextInput
            isEditing={false}
            value={this.props.value || '无'}
          />
        }
        onConfirm={this.onConfirm}
        onCancel={this.onCancel}
      />
    );
  }
}
