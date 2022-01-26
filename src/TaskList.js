import React from "react";
import ls from "local-storage";
import TaskItem from "./TaskItem";
import TaskCreator from "./TaskCreator";
import Navbar from "./common/Navbar";

let todoList = ls.get("todoList");
console.log("Localstorage => ", todoList);

class TaskList extends React.Component {
  state = {
    nameTemp: "Produit",
    dateTemp: "1",
    status: "1",
    list: ls.get("todoList") || [
      {
        name: "Timesheet",
        dateEnd: new Date().toDateString(),
        status: 1
      }
    ]
  };

  componentDidMount() {
    this.handleChange.bind(this);
    this.saveData.bind(this);
    todoList = ls.get("todoList");
  }

  saveData() {}

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  delete(name) {
    console.log(name);
    var array = [...this.state.list];

    array.forEach(function (elem, idx) {
      if (elem.name === name) {
        array.splice(idx, 1);
      }
    });

    this.setState({ list: array });
    ls.set("todoList", array);
  }

  handleAddToList() {
    this.setState({
      list: [
        ...this.state.list,
        {
          name: this.state.nameTemp,
          date: this.state.dateTemp,
          status: "1"
        }
      ]
    });

    ls.set("todoList", [
      ...this.state.list,
      {
        name: this.state.nameTemp,
        date: this.state.dateTemp,
        status: "1"
      }
    ]);
    //this.saveData();
  }

  render() {
    const { list } = this.state;
    console.log(this.state);
    return (
      <div className="">
        <Navbar />
        <TaskCreator
          _handleAddToList={this.handleAddToList.bind(this)}
          handleChange={this.handleChange}
        />

        <div className="container padding-xs wh-80 wh-mobile-100">
          {list.map((elem) => {
            return (
              <TaskItem elem={elem} _handleDelete={this.delete.bind(this)} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default TaskList;
