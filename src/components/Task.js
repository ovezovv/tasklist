import { Component } from 'react';
import { FaTimes } from 'react-icons/fa';

class Task extends Component{

  render() {
    const {task, onDelete, onToggle} = this.props

    return (
      <div 
        className={`task ${task.reminder ? 'reminder' : ''}`}
        onDoubleClick={ () => {this.setState(onToggle(task.id))} }
      >
        <h3>
          {task.text}
          <FaTimes
            id="delete-btn"
            onClick={ () => {this.setState(onDelete(task.id))} }
          />
        </h3>
        <p>{task.day}</p>
      </div>
    )
  }
}

export default Task;
