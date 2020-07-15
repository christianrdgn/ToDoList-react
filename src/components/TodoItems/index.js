import React, {Component} from 'react';

class TodoItems extends Component {

    constructor(props){
        super(props);
        this.state = {};

        this.delete = this.delete.bind(this);
    }

    delete(key){
        this.props.delete(key);
    }
    
    render(){
        return(
            <div>
                <ul>
                    {this.props.lista.map((item)=>{
                        return(
                            <li key={item.key} className="lista">
                                <input type="checkbox" className="checkbox"/>
                                <p className="tarefa-lista">{item.text}</p>
                                <span onClick={()=>this.delete(item.key)}><img src="https://image.flaticon.com/icons/svg/875/875550.svg" alt="" width="24px" className="btn-delete" /></span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default TodoItems;