import { Component } from 'react';
import Task from './Task';

class Tasks extends Component {
  render() {
    const { tasks, onDelete, onToggle } = this.props;

    return (
      <>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </>
    );
  }
}

export default Tasks;
