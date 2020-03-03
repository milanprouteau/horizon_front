import React, {Component} from 'react';
import UserService from '../services/users.sercice';

class Login extends Component{

    state = {
        email: "",
        password: ""
    }

    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    async submit(e){
        e.preventDefault();
        

        let response = await UserService.auth(this.state);
        if(response.ok){
            let data = await response.json();
            localStorage.setItem('token', data.token);
            this.props.history.push('/');
        }
    }

    // display form connexion
    render(){
        return (
            <div className="container">
                
                <form onSubmit={(e) => this.submit(e)}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" id="email" className="form-control" required onChange={(e) => this.handleChange(e)}/>
                    </div>
                    
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" id="password" className="form-control" required onChange={(e) => this.handleChange(e)}/>
                    </div>

                    <button type="submit" className="btn btn-primary">Connexion</button>
                </form>

            </div>
        )
    }


}

export default Login;