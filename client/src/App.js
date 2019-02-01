import React, { Component } from 'react';

import './App.css';
import ChartPage from './ChartPage';
import Header from './Header';


//const data = [
//  ["years", "Salary"],
//  [8, 12],
//  [4, 5.5],
//  [11, 14],
//  [4, 5],
//  [3, 3.5],
//  [6.5, 7]
//];

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
    data:[
      ["Years", "Salary"],

        [1.1, 39.343],
        [1.3, 46.205],
        [1.5, 37.731],
        [2.0, 43.525],
        [2.2, 39.891],
        [2.9, 56.642],
        [3.0, 60.150],
        [3.2, 54.445],
        [3.2, 64.445],
        [3.7, 57.189],
        [3.9, 63.218],
        [4.0, 55.794],
        [4.0, 56.957],
        [4.1, 57.081],
        [4.5, 61.111],
        [4.9, 67.938],
        [5.1, 66.029],
        [5.3, 83.088],
        [5.9, 81.363],
        [6.0, 93.940],

      ]
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('https://communitydaymlpythonservice.mybluemix.net/api');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('https://communitydaymlpythonservice.mybluemix.net/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: parseFloat(this.state.post) }),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
    const responseFloat = parseFloat(body);


    var intSalary = Math.round(responseFloat);
    var intYears = parseFloat(this.state.post);
    //this.state.data.addColumn( {'type': 'string', 'role': 'style'} );
    //this.state.data.push([intYears, 0,intSalary]);
    this.state.data.push([intYears, intSalary / 1000]);
    this.setState({ data: this.state.data })
  };

  render() {
    return (

      <div>
        <Header />
        <div>
          <p>{this.state.response}</p>
          <form onSubmit={this.handleSubmit}>
            <p>
              <strong>Post to Server:</strong>
            </p>
            <input
              type="text"
              value={this.state.post}
              onChange={e => this.setState({ post: e.target.value })}
            />
            <button type="submit">Submit</button>
          </form>
          <p>{this.state.responseToPost}</p>
        </div>
        <ChartPage listDataFromParent={this.state.data} />
      </div>
    );
  }
}

export default App;
