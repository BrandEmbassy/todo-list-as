import React from 'react';
import FilterButton from './filterbutton.js'

class FilterButtonSet extends React.Component {

  render () {
    return (
        <div className="row">
            <div className="medium-8 columns small-centered ">
                <ul className="button-group even-3">
                  <FilterButton handleFiltering={this.props.handleFiltering.bind(this)} filter="ALL">All</FilterButton>
                  <FilterButton handleFiltering={this.props.handleFiltering.bind(this)} filter="CHECKED">Checked</FilterButton>
                  <FilterButton handleFiltering={this.props.handleFiltering.bind(this)} filter="UNCHECKED">Unchecked</FilterButton>
                </ul>
            </div>
        </div>
      )
  }
}

FilterButtonSet.propTypes = {
  handleFiltering: React.PropTypes.func.isRequired
};

export default FilterButtonSet;
