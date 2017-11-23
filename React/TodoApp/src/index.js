
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


var   todos=[];

class AddToDo extends React.Component{

constructor(props){
  super(props)
  this.state={}
  this.onChange=this.onChange.bind(this);
  this.onSubmit=this.onSubmit.bind(this);
  this.deleteTask=this.deleteTask.bind(this);
}

deleteTask(todo){
  console.log(todo);
  var index=todos.indexOf(todo);
  todos.splice(index,1);
  var temprows=todos.map((todo)=>(

    <li>{todo}
      <button className="button1" type="submit"  onClick={()=>this.deleteTask(todo)}>
      &nbsp;Delete
      </button>
        </li>
  ));
  this.setState({todo:"",rows:temprows});
}

onChange(event){
this.setState({todo:event.target.value});
}

onSubmit(event){
console.log(todos);
todos.push(this.state.todo);
console.log(todos);
var temprows=todos.map((todo)=>(

  <li>{todo}

    <button className="button1" type="submit"  onClick={()=>this.deleteTask(todo)}>
    &nbsp;Delete
    </button>
      </li>
));
this.setState({todo:"",rows:temprows});
event.preventDefault();
}

  render(){
  return (
    <div>
    <form onSubmit={this.onSubmit}>
    <input type="text" value={this.state.todo} onChange={this.onChange}/>
    <br/>
    {this.state.todo}
    <br/>
    <input className="button1" type="submit" value="Add Task"/>
    </form>
    <b>List of all tasks to be done</b><br/>
    {this.state.rows}
    </div>
  )
  }
}

class Header extends React.Component{
  render(){
    return <div><b>Simple To Do App Made using React JS</b></div>;
  }
}

class App extends React.Component{

  render(){
    return (<div>
      <Header />
      <AddToDo />
      </div>);
  };
}



// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
