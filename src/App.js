import React, { Component } from 'react';
import TodoList from './components/TodoList';
import './style.css';

class App extends Component {

  render(){

    return(

      <div >
        <header>
          <img src="https://image.flaticon.com/icons/svg/839/839860.svg" alt="" width="24px" />
          <h1>Lista de tarefas</h1>
        </header> 
        <div className='container'>
          <TodoList/>
        </div>
      </div>

    );
  }
}

export default App;