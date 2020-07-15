import React, {Component} from 'react';
import TodoItems from '../TodoItems'

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = {
            tarefa: '',
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

    }

    addItem(e){

        let state = this.state;
        if(this._tarefaInput.value !== ''){
            let newItem = {
                text: this._tarefaInput.value, 
                key: Date.now()
            };
            this.setState({items: [...state.items, newItem]});
        }

        e.preventDefault();
        this.setState({tarefa: ''});

    }
    

    deleteItem(key){
        console.log('Item a ser deletado' + key);
        let filtro = this.state.items.filter((item)=>{
            return(item.key !== key);
        })

        this.setState({items: filtro});
    }

    render(){
        return(
            <div className="conteudo-form">
                <div>
                    <form onSubmit={this.addItem} className="form">
                        <input type="text" placeholder="Nova tarefa?" name="tarefa" value={this.state.tarefa} onChange={(ev)=>this.setState({tarefa: ev.target.value})} ref={(event)=>this._tarefaInput = event} className="input" /> 

                        <button type="submit" className="btn-input">
                            <img src="https://image.flaticon.com/icons/svg/875/875541.svg" alt="" width="40px" />
                        </button>
                    </form>
                </div>
                <div className="conteudo-lista">
                    <TodoItems lista={this.state.items} delete={this.deleteItem} />
                </div>
            </div>
        );
    }
}

export default TodoList;