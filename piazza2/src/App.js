import React, {Component} from 'react';
import './App.css';

//components
import Homepage from './components/pages/homePage';
import Loginpage from './components/pages/loginPage';


//includes
// import './default.css';
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends React.Component {
  render() {
    return(
      <div className="App">
        {/* <Homepage /> */}
        <Loginpage />
      </div>
    );
  }
}

export default App;