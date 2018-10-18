import React from 'react';

class FilterButton extends React.Component {
  filterTodos() {
    this.props.handleFiltering(this.props.filter);
  }
  render () {
    return (
      <li><a href="#" className="button secondary" onClick={this.filterTodos.bind(this)}>{this.props.children}</a></li>
      )
  }
}

FilterButton.propTypes = {
  handleFiltering: React.PropTypes.func.isRequired,
  filter: React.PropTypes.string.isRequired
};

export default FilterButton;
