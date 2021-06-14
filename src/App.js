import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

const App = () => {

  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th 2:45pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 6th 2:45pm',
        reminder: false
    },
    {
        id: 3,
        text: 'Coding Time',
        day: 'Feb 5th 2:45pm',
        reminder: true
    }
])

  //Add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Toggle Task

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? {...task, reminder: !task.reminder} : task
      )
    )
  }

  return (
    <div className="container">
      <Header 
        title='TaskList' 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask} />

      {showAddTask && <AddTask onAdd={addTask} />}

      { tasks.length > 0 ? (<Tasks 
        tasks={tasks} 
        onDelete={deleteTask}
        onToggle={toggleReminder}
      />) :
        ('No tasks yet!') }
    </div>  
  );
}

export default App;
