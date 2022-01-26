import React from "react";
import { CheckTwoTone } from "@material-ui/icons";

class TaskCreator extends React.Component {
  render() {
    return (
      <details className="px-6">
        <summary className="btn btn-info text-center">
          Ajouter une tache
        </summary>
        <div className=" card shadow-2xl m-4 bordered ease">
          <div className="form-control p-4">
            <label className="label">
              <span className="label-text">Name </span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              onChange={this.props.handleChange}
              placeholder="Nom du produit"
              name="nameTemp"
            />
          </div>

          <div className="form-control p-4">
            <label className="label">
              <span className="label-text">End date</span>
            </label>
            <input
              type="date"
              className="input input-bordered"
              onChange={this.props.handleChange}
              placeholder="Date"
              name="dateTemp"
            />
          </div>

          <button
            className="btn btn-primary flex items-center m-4"
            onClick={() => this.props._handleAddToList(this)}
          >
            <CheckTwoTone />
            <div className="">Ajouter a ma liste</div>
          </button>
        </div>
      </details>
    );
  }
}

export default TaskCreator;
