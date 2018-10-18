import React from 'react';

class TodoItem extends React.Component {
  handleDeleteTodo() {
    event.preventDefault();
    this.props.onTodoDelete(this.refs.todo.getDOMNode().id);
  }
  handleChange() {
    this.props.onCheckboxChange(this.refs.todo.getDOMNode().id)
  }
  render () {
    return (
        <div className="row" id={this.props.todoItem.id} ref="todo">
            <div className="small-8 columns small-centered ">
                <div className="small-2 columns">
                  <input type="checkbox" checked={this.props.todoItem.done} onClick={this.handleChange.bind(this)}/>
                </div>
                <div className="small-8 columns" styles={{lineHeight:`35`,fontSize: `20`}}>
                    {this.props.todoItem.text}
                </div>
                <div className="small-2 columns">
                    <a href="#" className="tiny button alert" styles={{float:`right`}} onClick={this.handleDeleteTodo.bind(this)}>X</a>
                </div>
            </div>
        </div>
      )
  }
}

TodoItem.propTypes = {
  todoItem: React.PropTypes.object.isRequired,
  onTodoDelete: React.PropTypes.func.isRequired,
  onCheckboxChange: React.PropTypes.func.isRequired
};

export default TodoItem;
