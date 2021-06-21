import React, { Component } from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

const tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks,
    };
  }

  createTask = (task) => {
    if (task.trim() === "") {
      alert("Task can not be empty");
      return;
    }
    tasks.push({ task, isCompleted: false });
    this.setState({ tasks: tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  deleteTaskItem = (taskId) => {
    tasks.splice(taskId, 1);
    this.setState({ tasks: tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  editTaskItem = (taskId, task) => {
    let taskItem = tasks[taskId];
    taskItem.task = task;
    this.setState({ tasks: tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  toggleTaskItem = (taskId) => {
    let taskItem = tasks[taskId];
    taskItem.isCompleted = !taskItem.isCompleted;
    this.setState({ tasks: tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  render() {
    return (
      <div className="main">
        <h1>Tasks</h1>
        <div className="content">
          <CreateTask createTask={this.createTask} />
          <br />
          <TaskList
            tasks={this.state.tasks}
            deleteTaskItem={this.deleteTaskItem}
            editTaskItem={this.editTaskItem}
            toggleTaskItem={this.toggleTaskItem}
          />
        </div>
      </div>
    );
  }
}
