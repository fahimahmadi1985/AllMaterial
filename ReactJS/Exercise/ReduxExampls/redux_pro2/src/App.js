import React, { Component } from "react";

export class App extends Component {
  render() {
    return (
      <div className="container m-5 p-5 bg-secondary border border-1 rounded border-info text-warning d-flex justify-content-center flex-wrap">
        <h4 className="col-4">
          Number of Cooked Cake: {this.props.data.cookCake.numberOfCookedCake}
        </h4>
        <h4 className="col-4">
          Number of Sold Cake: {this.props.data.buyCake.numberOfSoldCake}
        </h4>
        <h4 className="col-4">
          Number of Cake:{" "}
          {this.props.data.cookCake.numberOfCookedCake -
            this.props.data.buyCake.numberOfSoldCake}
        </h4>

        <button
          onClick={this.props.dispBuyCake}
          className="btn btn-dark text-white col-4 mr-5 mt-5"
        >
          Sell Cake
        </button>
        <button
          onClick={this.props.dispCookCake}
          className="btn btn-dark text-white col-4 mt-5"
        >
          Cook Cake
        </button>
      </div>
    );
  }
}

export default App;
