import React from 'react';
import './RemoveTask.css';


import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';


class RemoveTask extends React.Component{

	constructor (props){
		super(props);
		this.state = { 
						open: false
					 };
	
		}

	handleOnClick = ()=>{
	this.setState({open: true });

}


	handleClose = () => {
	this.setState({open:false});
}

	removeTask = () => {
		this.props.removeTask(this.props.task,this.props.order, this.props.task_id);
		this.setState({open:false});
	}




 render() {
 return (
		<div>
		<Button variant="contained" 
				startIcon=<DeleteIcon /> 
				onClick={this.handleOnClick}


			//	{function(event){	
					
					//props.removeTask(props.task_id);

				
				
		>	

		BORRAR
		 
		</Button>

		<Dialog>  
			open={this.state.open}
			onClose={this.handleClose}
			>
			<DialogTitle>
				{'Has terminado?'}
					</DialogTitle>
			<DialogActions>
				<Button onClick={this.handleDelete}>
					BORRAR
						</Button>
				<Button onClick={this.handleClose}> 

					Salir
					</Button>

			</DialogActions>
		</Dialog>
</div>


		);	
	}
}

export default RemoveTask;
