import React from 'react';
import getRandomString from '../util/getrandomstring.js';

class NewTodo extends React.Component {
  handleNewTodo() {
    event.preventDefault();
    let textValue = this.refs.newTodo.getDOMNode().value;
    if (textValue) {
      let todo = {
        id: getRandomString(),
        text: textValue,
        done: false
      };
      this.props.handleNewInput(todo);
      this.refs.newTodo.getDOMNode().value = '';
    }
  }

  render () {
    return (
        <div className="row">
            <div className="small-6 columns small-offset-2">
                <input type="text" ref="newTodo" placeholder="Write todo"/>
            </div>
            <div className="small-2 columns end">
                <a href="#" className="button postfix" onClick={this.handleNewTodo.bind(this)}>Save todo</a>
            </div>
        </div>
      )
  }
}

NewTodo.propTypes = {
  handleNewInput: React.PropTypes.func.isRequired,
};

export default NewTodo;
