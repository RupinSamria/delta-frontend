import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

export default class GenButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      IsActive: false
    }
  }

  render() {
    return (
      <Button
        className={`${this.props.className}`}
        primary={this.state.IsActive}
        onClick={() => {
          this.setState(
            this.state.IsActive ? { IsActive: false } : { IsActive: true }
          )
        }}
      >
        {this.props.content}
      </Button>
    )
  }
}
