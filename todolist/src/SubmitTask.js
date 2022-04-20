import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import React from 'react';

class  SubmitTask  extends React.Component{
	constructor (props){
	
		super(props);

	}
handleSubmit = (event) => {
	event.preventDefault();
	this.props.onSubmit(event);

}

render(){
	return(
	
	<Tooltip title="Añadir tarea" >
		<Button variant="contained" onClick={this.handleSubmit}>
			<AddCircleIcon />
				</Button>
	</Tooltip>
	);


}
}

export default SubmitTask;

