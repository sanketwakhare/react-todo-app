import React, { Component } from "react";
import TaskItem from "./TaskItem";

export default class TaskList extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.tasks.map((task, index) => {
            return (
              <TaskItem
                key={index}
                taskItem={task}
                id={index}
                deleteTaskItem={this.props.deleteTaskItem}
                editTaskItem={this.props.editTaskItem}
                toggleTaskItem={this.props.toggleTaskItem}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}
