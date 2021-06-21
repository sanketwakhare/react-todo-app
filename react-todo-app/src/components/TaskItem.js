import React, { Component } from "react";

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.taskItem.task,
      isEditing: false,
    };
  }

  setEditingState = (isEditing) => {
    this.setState({ isEditing: isEditing });
  };

  handleEdit = (isEditing) => {
    this.setEditingState(isEditing);
  };

  handleChange = (event) => {
    this.setState({ task: event.target.value });
  };

  deleteTaskItem = () => {
    this.props.deleteTaskItem(this.props.id);
  };

  toggleTaskItem = () => {
    this.props.toggleTaskItem(this.props.id);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.editTaskItem(this.props.id, this.state.task);
    this.setEditingState(false);
  };

  render() {
    return (
      <tr>
        {this.state.isEditing ? (
          <>
            <td>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  value={this.state.task}
                  autoFocus
                  onChange={this.handleChange}
                ></input>
              </form>
            </td>
            <td>
              <button
                className="save"
                type="submit"
                onClick={this.handleSubmit}
              >
                Save
              </button>
              <button
                className="cancel"
                type="button"
                onClick={() => this.handleEdit(false)}
              >
                Cancel
              </button>
            </td>
          </>
        ) : (
          <>
            <td className="task" onClick={this.toggleTaskItem}>
              <input
                type="checkbox"
                readOnly
                checked={this.props.taskItem.isCompleted}
              ></input>
              <span
                className={
                  this.props.taskItem.isCompleted
                    ? "completed"
                    : "not-completed"
                }
              >
                {this.props.taskItem.task}
              </span>
            </td>
            <td>
              <button className="edit" onClick={() => this.handleEdit(true)}>
                Edit
              </button>
              <button className="delete" onClick={this.deleteTaskItem}>
                Delete
              </button>
            </td>
          </>
        )}
      </tr>
    );
  }
}
