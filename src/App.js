import { Component } from 'react';
import Header from 'components/Header';
import Tasks from 'components/Tasks';
import AddTask from 'components/AddTask';

const INITIAL_TASKS = [];

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: INITIAL_TASKS,
      showAddTask: true,
    };
  }
  
  toggleModal = () => {
    this.setState(({showAddTask}) => ({
      showAddTask: !showAddTask
    }));
  }

  addNewTask = (task) => {
    this.setState(state => ({
      tasks: [...state.tasks, task]
    }))
  }

  deleteTask = (id) => {
    this.setState(({tasks}) => ({
      tasks: tasks.filter((task) => task.id !== id)
    }))
  }

  toggleReminder = (id) => {
    this.setState(({tasks}) => ({
      tasks: tasks.map((task) => 
        task.id === id ? {...task, reminder: !task.reminder} : task
      )
    }))
  }

  render(){
    const { tasks, showAddTask } = this.state
    return (
      <div className="container">
        <Header
          title="TaskList"
          showAddTask={showAddTask}
          toggleModal={this.toggleModal}
        />

        { showAddTask ? <AddTask addNewTask={this.addNewTask}/> : ''}
        { tasks.length > 0 ? (
          <Tasks 
            tasks={this.state.tasks} 
            onDelete={this.deleteTask}
            onToggle={this.toggleReminder}
          />
        ) :
          ('No tasks yet!') }
      </div>  
    );
  }
}

export default App;
