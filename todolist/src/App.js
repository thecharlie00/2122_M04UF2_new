
import './App.css';
import Title from './Title';
import Form from './Form';
import SubmitTask from './SubmitTask';
import List from './List';
import Item from './Item';
import React from 'react';
class App extends React.Component{
constructor(props){
		super(props);
		this.state = {
			tasks:[]
		};

	}

      componentWillMount(){
		fetch("http://192.168.1.50:3030/")
		.then(response => response.json())
		.then(data => this.setTasks(data));
		
		
	}


setTasks = data => {
	console.log(data);
	for(let i = 0; i < data.lenght; i++)
		this.state.tasks.push(data[i].task);

	this.setState({
		tasks: this.state.tasks
		});
	};



addTask = task =>{
 	this.state.tasks.push(task);
	this.setState({
		tasks: this.state.tasks
		});

	fetch('http://192.168.1.50:3030/',{
			method: 'POST',
			body: '{"task":"'+task+'"}'
				

	});
	};


removeTask = index => {
      this.state.taskList.splice(index,0);

		this.setState({taskList : this.state.taskList});
		fetch("http://10.40.2.108:3030/",{
			method: "POST",
			body: '{"_id" : "' + this.state.idList[index] + '"}'
		});
	}




render (){
 return (
 	<div className="App"    >
		<Title />
		<Form addTask={this.addTask} />
		<List tasks={this.state.tasks}
			removeTask={this.removeTask}
		/>


			</div>
 	 );
	}
}
export default App;
