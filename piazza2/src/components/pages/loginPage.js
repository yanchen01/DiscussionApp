import React, {Component} from 'react';
import '../../styles/login.css';



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
                            <input className="text-input" type="text" name="name" />
                        </label>
                        <br/>
                        <label>
                            <input className="text-input" type="text" name="name" />
                        </label>
                        <br />
                        <input  className="text-input" type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </div>  
    );
  }
}

export default Loginpage;
