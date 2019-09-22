import React, { Component } from 'react'
import '../css/opportunities.css'
import Post from '../../../core_containers/post/index'
/*import Label from '../../../core_containers/label/label'*/
import Input from '../../../core_containers/input/index'
import Dropdown from '../../../core_containers/dropdown'
export default class Opportunites extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: [
        { label: 'ecell', value: 'rocks' },
        { label: 'delta', value: 'also rocks' }
      ],
      test1SelectedOption: null
    }
    this.test1handleChange = this.test1handleChange.bind(this)
  }

  test1handleChange = selectedOption => {
    this.setState({
      test1SelectedOption: selectedOption
    })
  }
  refresh = update => {
    this.setState({
      update
    })
  }
  render() {
    const { options } = this.state
    return (
      <div className="opportunities-container">
        <div className="filter-container">
          <h2 className="filter-heading">Filters</h2>
          <hr />
          <Input
            className="opportunities-filter-search"
            placeholder="Add keyword"
          />
          <div className="filter-opportunityType">
            <Dropdown
              options={options}
              // refresh={this.refresh}
              handleChange={this.test1handleChange}
              name="test1"
              isMulti={true}
            />
          </div>
          <div className="filter-searchLocation"></div>
        </div>
        <div className="list-post-container">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    )
  }
}
