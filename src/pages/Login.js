import React, {Component} from 'react';

class Login extends Component{

    render(){
        return (
            <div className="container">
                
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" id="email" className="form-control" required />
                </div>
                
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" id="password" className="form-control" required />
                </div>

                <button type="submit" className="btn btn-primary">Connexion</button>
            </div>
        )
    }

}

export default Login;