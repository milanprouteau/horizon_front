import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{

    render(){
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Blog</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link className="nav-link" to={'/'}>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to={'/login'}>Connexion</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to={'/register'}>Inscription</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

}

export default Header;