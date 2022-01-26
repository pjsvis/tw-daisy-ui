import React from "react";

class Status extends React.Component {
  render() {
    //console.log(this.props);
    return (
      <div>
        {(() => {
          switch (this.props.status) {
            case "1":
              return <span className="badge badge-warning">En cours</span>;
            case "2":
              return <span className="badge badge-success">Fermé</span>;
            case "3":
              return <span className="badge badge-error">Annulé</span>;
            default:
              return <span className="badge badge-ghost">Aucun status</span>;
          }
        })()}
      </div>
    );
  }
}

export default Status;
