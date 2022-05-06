import React from 'react';
import './RemoveTask.css';


import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';


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

	handleDelete = () =>{
	console.log(this.props.key);
	this.props.removeTask(this.props.task,this.props.order, this.props.task_id);
	this.setState({open:false});

}





 render() {
 return (
		<div>
		<Button  variant="contained" 
					endIcon=<DeleteIcon /> 
					onClick={this.handleOnClick}>Eliminar
				</Button>

				<Dialog	open={this.state.open} onClose={this.handleClose}>
					<DialogTitle>{'Seguro que has terminado?'}</DialogTitle>

					<DialogActions>
						<Button  onClick={this.handleDelete}>
							Si
						</Button>
						<Button onClick={this.handleClose}>
							No
						</Button>
					</DialogActions>
				</Dialog>
</div>


		);	
	}
}

export default RemoveTask;
