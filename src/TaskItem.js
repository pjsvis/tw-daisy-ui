import React from "react";
import { CloseRounded } from "@material-ui/icons";
import Moment from "moment";
import Status from "./common/Status";

class TaskItem extends React.Component {
  _handleDelete(name) {
    this.props._handleDelete(name);
  }

  render() {
    const elem = this.props.elem;
    console.log(elem);
    return (
      <div>
        <div class="p-6">
          <div class=" shadow-xl p-6 rounded-lg ">
            <div class=" flex flex-row items-center">
              <div class="avatar">
                <div class=" w-14 h-14 shadow mask mask-squircle bg-purple-600 bg-opacity-25 flex items-center">
                  <span className="font-4xl self-center w-full h-full">
                    {"T"}
                  </span>
                </div>
              </div>
              <div className="flex-grow mx-4">
                <h2 class="card-title">{elem.name}</h2>
                <p class="text-base-content text-opacity-40">
                  {Moment(elem.dateEnd).format("LL")}
                </p>
                <Status status={elem.status} />
              </div>

              <div className="text-right self-start">
                <button
                  onClick={() => this.props._handleDelete(elem.name)}
                  className="btn btn-circle btn-xs md:btn-sm lg:btn-md xl:btn-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-4 h-4 stroke-current md:w-6 md:h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskItem;
