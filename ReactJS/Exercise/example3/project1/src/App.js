import React, { Component } from "react";
import AddStudent from "./components/AddStudent";
import uuid from "uuid";

class App extends Component {
  state = {
    students: []
  };

  AddStu = Stname => {
    const newSt = {
      id: uuid.v4(),
      name: Stname
    };
    //this.setState({ students: newSt });
    this.state.students.push(newSt);
   // console.log(this.state.students);
  };

  DisplayIntoConsole = () => {
    console.log(this.state.students);
}


  render() {
    return (
      <div className="maincomp">
        <React.Fragment>
          <AddStudent AddStu={this.AddStu} disp={this.DisplayIntoConsole}/>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
