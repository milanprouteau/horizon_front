import React, {Component} from 'react';

class Register extends Component{

    // display register form
    render(){
        return (
            <div className="container">
                
                <div className="form-group">
                    <label>Firstname</label>
                    <input type="text" id="firstname" className="form-control" required />
                </div>

                <div className="form-group">
                    <label>Lastname</label>
                    <input type="text" id="lastname" className="form-control" required />
                </div>

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

export default Register;