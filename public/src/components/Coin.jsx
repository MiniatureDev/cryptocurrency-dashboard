import React from "react";

function Coin(props) {
  return (
      <div className="card mt-5 border border-2 border-primary" style={{width: "15rem"}}>
        <img src={props.icon} className="img" alt="Image of the coin" />
        <div className="card-body">
          <h4 className="card-title"> {props.name} </h4>
            <h5> Price: {props.price} </h5>
          <a href={props.url} className="btn btn-primary">
            Visit the website
          </a>
        </div>
      </div>
  );
}

export default Coin;
