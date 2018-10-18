import React from 'react';
import TodoItem from './todoitem.js'

class TodoItemList extends React.Component {
  selectTodos(todos, filter) {
  switch (filter) {
  case 'ALL':
    return todos;
  case 'UNCHECKED':
    return todos.filter(todo => !todo.done);
  case 'CHECKED':
    return todos.filter(todo => todo.done);
  }
}
  render() {
    return (
      <div>
        {this.props.todosList ? this.selectTodos(this.props.todosList, this.props.filter)
                                      .map(todo => <TodoItem
                                                     key = {todo.id}
                                                     todoItem={todo}
                                                     onTodoDelete={this.props.onTodoDelete.bind(this)}
                                                     onCheckboxChange={this.props.onCheckboxChange.bind(this)}
                                                    />)
          : <p className="small-8 columns small-centered">Zadejte Todo</p>}
      </div>
    )
  }
}

TodoItemList.propTypes = {
  todosList: React.PropTypes.array.isRequired,
  filter: React.PropTypes.string.isRequired,
  onTodoDelete: React.PropTypes.func.isRequired,
  onCheckboxChange: React.PropTypes.func.isRequired
};

export default TodoItemList;
