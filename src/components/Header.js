import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{

    state = {
        isAuth: false
    }

    componentDidMount(){
        localStorage.getItem('token') && this.setState({isAuth: true});
    }

    logout(){
        localStorage.removeItem('token');
        this.setState({isAuth: false});
    }

    // display the menu to log in or log out
    render(){
        let {isAuth} = this.state;
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    {
                        isAuth ?
                        (
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                    <Link className="nav-link" to={'/'}>Home</Link>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link" onClick={() => this.logout()}>Logout</a>
                                </li>
                            </ul>
                        )        
                        : (
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                    <Link className="nav-link" to={'/login'}>Connexion</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link" to={'/register'}>Inscription</Link>
                                </li>                     
                            </ul>
                        )
                    }
                </div>
            </nav>
        )
    }

}

export default Header;
