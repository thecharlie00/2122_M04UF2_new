
import React from 'react';
import TextField from '@mui/material/TextField';


class InputTask extends React.Component{
	constructor (props){
		super(props);
		this.state = {
		value: props.value

	};
}
	handleChange = (event)=>{
	this.props.handleChange(event);
		this.setState({
			value : event.target.value

});

}

render(){
	return(
			<TextField id="task_input" 	
			label="Tarea" 
			variant="outlined" 
			value={this.state.value}  
			onChange={this.handleChange}/>

);

	}
}

/*
	render(){
		return (
			<label htmlFor="task_input">
			Tarea
	<input type="text" id="task_input" value={this.state.value}  onChange={this.handleChange}/>
	
		</label>
		);
	}
}
*/

export default InputTask;
