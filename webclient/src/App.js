import React, { Component } from 'react';
import './App.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Profile from './Profile';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { data: '', requestErr: '', fetchErr: '' };
  //   this.updateUrl = this.updateUrl.bind(this);
  // }

  // // update the user-put url and fectch the Open Graph props from the server
  // updateUrl(url) {
  //     // clean up the current state
  //     this.setState({ data: '', requestErr: '', fetchErr: '' });
  //     var that = this;

  //     var ReqUrl = "https://api.leontaolong.me/v1/summary?url=" + url;
  //     fetch(ReqUrl) //download the data
  //       .then(function (res) {
  //         if (!res.ok) {
  //           that.setState({ requestErr: res.status + ": " + res.statusText });
  //           return;
  //         }
  //         return res.json();
  //       })
  //       .then(function (data) {
  //         if (typeof data === 'object')
  //           that.setState({ data: data });
  //       })
  //       .catch(function (err) {
  //         that.setState({ fetchErr: err.message });
  //       });
  // }

  render() {
    return (
      <div className="App">
        <Header />
      <Router>
          <div>
            <Route exact path="/" component={SignIn} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </div>
      </Router>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
        <div className="mdl-layout--fixed-header">
          <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">Open Graph Explorer</span>
            </div>
          </header>
         </div>
    );
  }
}
export default App;
