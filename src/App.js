import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

const notCompiledContract = import('./SignDocument.js');

let SignDocument;

const web3 = window.web3;

class Person {
  name;
  id;

  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

const approvers = [
  new Person('Ceplialo', '0x0805d6E32a66ACd51cD00168B0989872785b278b'),
  new Person('Hvatalov', '0x12987A48A6C4c4aA32f2c79bee8A162105F8a781'),
  new Person('Grabchenko', '0x3ad4a4E100c5dc8a58C848dD9856631207C225dA')
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentApprovers: []
    };

    SignDocument = web3.eth.contract([notCompiledContract]);
  }

  componentDidMount() {
  }

  sendContract() {
    SignDocument.new(this.state.currentApprovers.map((a) => a.id), {}, (a, b,c ,d) => console.log(a,b,c,d))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          {
            approvers.map((a) => {
              return <div key={a.id}>{a.name} <button onClick={e => this.setState({...this.state, currentApprovers: (this.state.currentApprovers.indexOf(a) === -1) ? this.state.currentApprovers.concat(a) : this.state.currentApprovers})}>+</button></div>;
            })
          }

          <p>Approvers:</p>

          <div>
            {
              this.state.currentApprovers.map(a => <div key={a.id}>{a.name}</div>)
            }
          </div>

          <button onClick={e => this.sendContract()}>Send contract</button>
        </div>
      </div>
    );
  }
}

export default App;
