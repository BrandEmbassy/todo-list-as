import React from 'react';
import TodoItemList from './components/todoitemlist.js';
import NewTodo from './components/newtodo.js';
import FilterButtonSet from './components/filterbuttonset.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'ALL',
      todos: [
      {
        id: '1',
        text: 'Test todo',
        done: false
      },
      {
        id: '2',
        text: 'Test todo2',
        done: true
      }
      ]
    };
  }
  addNewTodo(newTodo) {
    this.setState({
      filter: 'ALL',
      todos: [...this.state.todos, newTodo]
    });
  }
  removeTodo(id) {
    let newTodos = this.state.todos.filter((todo => todo.id!=id));
    this.setState({filter: 'ALL', todos: newTodos});
  }
  doTodo(changedId) {
     let newTodos = this.state.todos.map(todo => todo.id === changedId ? {...todo, done: !todo.done} : todo);
     this.setState({filter:'ALL', todos: newTodos});
  }
  filterTodos(filter) {
    this.setState({
      filter: filter,
      todos: this.state.todos
    });
  }

  render () {
    return (
      <div>

        <NewTodo handleNewInput={this.addNewTodo.bind(this)}/>

        <TodoItemList todosList={this.state.todos}
                      filter={this.state.filter}
                      onTodoDelete={this.removeTodo.bind(this)}
                      onCheckboxChange={this.doTodo.bind(this)}/>

        <FilterButtonSet handleFiltering={this.filterTodos.bind(this)}/>
      </div>
      )
  }
}

React.render(<App/>, document.getElementById('app'));
