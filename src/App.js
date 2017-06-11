import React, { Component } from 'react';

import './App.css';
import * as Web3 from 'web3';

const notCompiledContract = import('./SignDocument.js');

let SignDocument;
let web3;

class Person {
  name;
  id;

  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

const approvers = [
  new Person('Emanoil Manolescu', '0x0805d6E32a66ACd51cD00168B0989872785b278b'),
  new Person('David Șerban', '0x12987A48A6C4c4aA32f2c79bee8A162105F8a781'),
  new Person('Valerian Neagu', '0x3ad4a4E100c5dc8a58C848dD9856631207C225dA')
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentApprovers: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      if (typeof window.web3 === 'undefined') {
        web3 = new Web3(new Web3.providers.HttpProvider("http://40.118.96.33:8545"));
      } else {
        web3 = window.web3;
      }

      SignDocument = web3.eth.contract([notCompiledContract]);
    }, 1000)
  }

  sendContract() {
    SignDocument.new(this.state.currentApprovers.map((a) => a.id), {from: '0xBf800F94E82438943c967Fe00C8a549381a650Ac'}, (a, b,c ,d) => console.log(a,b,c,d))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="http://www.uspa.gov.ua/images/port_logo-ua.png" className="" alt="logo" />
          <h2>Контракты</h2>
        </div>
        <div className="App-intro">
          <div className="Contract-holder">
            <div className="Contract">
              {
                approvers.map((a) => {
                  return <div className="Approvers Approvers-available" key={a.id}>{a.name} <button onClick={e => this.setState({...this.state, currentApprovers: (this.state.currentApprovers.indexOf(a) === -1) ? this.state.currentApprovers.concat(a) : this.state.currentApprovers})}>+</button></div>;
                })
              }

              <p>Выбраны:</p>

              <div>
                {
                  this.state.currentApprovers.map(a => <div className="Approvers Approvers-selected" key={a.id}>{a.name}</div>)
                }
              </div>

              <button onClick={e => this.sendContract()}>Отправить на подпись</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
