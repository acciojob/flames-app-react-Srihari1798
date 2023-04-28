import React, {Component, useState} from "react";
import '../styles/App.css';


class App extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          firstName: '',
          secondName: '',
          relationshipStatus: '',
        };
      }
    
      calculateRelationship = () => {
        // check if inputs are valid
        if (!this.state.firstName || !this.state.secondName) {
          this.setState({ relationshipStatus: 'Please Enter valid input' });
          return;
        }
    
        // convert strings to lowercase
        let firstLower = this.state.firstName.toLowerCase();
        let secondLower = this.state.secondName.toLowerCase();
    
        // remove common characters
        for (let i = 0; i < firstLower.length; i++) {
          for (let j = 0; j < secondLower.length; j++) {
            if (firstLower[i] === secondLower[j]) {
              firstLower = firstLower.slice(0, i) + firstLower.slice(i + 1);
              secondLower = secondLower.slice(0, j) + secondLower.slice(j + 1);
              i--;
              break;
            }
          }
        }
    
        // calculate Flames value
        const remainingLength = firstLower.length + secondLower.length;
        const flames = ['Siblings', 'Friends', 'Love', 'Affection', 'Marriage', 'Enemy'];
        const flamesIndex = remainingLength % flames.length;
    
        this.setState({ relationshipStatus: flames[flamesIndex] });
      };
    
      clearInputs = () => {
        this.setState({
          firstName: '',
          secondName: '',
          relationshipStatus: '',
        });
      };
    

    render() {

        return(
            <div id="main">
                <h1>FLAMES Game</h1>
        <div>
          
          <input
            type="text"
            value={this.state.firstName}
            onChange={(e) => this.setState({ firstName: e.target.value })}
            data-testid="input1"
            placeholder="Enter first name"
          />
        </div>
        <div>
        
          <input
            type="text"
            value={this.state.secondName}
            onChange={(e) => this.setState({ secondName: e.target.value })}
            data-testid="input2"
            placeholder="Enter secound name"
          />
        </div>
        <button onClick={this.calculateRelationship} data-testid="calculate_relationship">
          Calculate Relationship Future
        </button>
        <button onClick={this.clearInputs}>Clear</button>
        <h3 data-testid="answer">{this.state.relationshipStatus}</h3>        
               {/* Do not remove the main div */}
               
            </div>
        )
    }
}


export default App;
