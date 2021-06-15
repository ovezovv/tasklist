import React, {Component} from 'react'

class AddTask extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: '', 
			day: '',
			reminder: false,
		}
	}

	onSubmit = (e) => {
		e.preventDefault();

		const { text, day, reminder } = this.state
		
		if( !text || !day ) {
			alert('Please fill out the fields!');
			return false;
		}

		this.props.addNewTask({
			id: +new Date(),
			text: text,
			day: day,
			reminder: reminder,
		})

		return this.setState(
			{
				text: '',
				day: '',
			}
		)
	}
	
	handleChangeInput = (event) => {
		const {name, value} = event.target

		this.setState({
			[name]: value
		})
	}

	render() {
		const {text, day, reminder} = this.state
			return (
					<form className="add-form" onSubmit={this.onSubmit}>
							<div className="form-control">
									<label>Task</label>
									<input 
										type="text" 
										placeholder="Task text" 
										name="text"
										value={text}
										onChange={this.handleChangeInput}
									/>
							</div>
							<div className="form-control">
									<label>Day & Time</label>
									<input 
											type="datetime-local" 
											placeholder="Day & Time" 
											value={day} 
											name="day"
											onChange={this.handleChangeInput}
									/>
							</div>
							<div className="form-control-check">
									<label>Reminder</label>
									<input 
										type="checkbox" 
										name="reminder"
										value={reminder} 
										onChange={this.handleChangeInput}
									/>
							</div>
							<input 
								className="btn" 
								type="submit" 
								value="Add Task"
								style={{ backgroundColor: 'blue', marginTop: '20px'}} 
							/> 
					</form>
			)
	}   
}

export default AddTask
