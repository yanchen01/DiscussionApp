import React, {Component} from 'react';
import '../../styles/login.css';
// import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');


class Loginpage extends React.Component {
  render() {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 left-col">
                    <img className="image img-fluid" src={require("../../images/login-image.png")} id="infographic"></img>
                </div>
                <div className="col-lg-6 right-col">
                    <h2>Login</h2>
                    <form>
                        <label>
                            <input className="textinput" type="email" name="email" placeholder="Email"/>
                        </label>
                        <br/>
                        <label>
                            <input className="textinput" type="text" name="name" placeholder="Password"/>
                        </label>
                        <br />
                        <input className="button" type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </div>  
    );
  }
}

export default Loginpage;
