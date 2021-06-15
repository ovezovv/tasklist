 import React, { Component } from 'react'
 import Button from 'components/Button';

 class Header extends Component {
	render() {
		const { title, showAddTask, toggleModal } = this.props
		return (
			<header className="header">
				<h2>{title}</h2>
				<Button 
					color={showAddTask ? 'red' : 'green' } 
					text={showAddTask ? 'Close' : 'Add'} 
					onClick={toggleModal}
				/>
			</header>
		)
	}
 }
 
 export default Header
 