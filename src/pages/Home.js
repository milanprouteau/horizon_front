import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Logo from "../logo.png"

import "./style.scss";

class Home extends Component{

    // display the list of the continent which they will redirect to there related city
    render(){        
        return (
            <div>
                <div className="logo"><img className="image" src={Logo}></img></div>
                <h1 className="title">HORIZON</h1>
                <div className="description">Let's plan your next trip !</div>
                <div className="continent__content">
                    <ul className="continent__list">
                        <Link className="item" to={`/continent/africa`}>Africa</Link>
                        <Link className="item" to={`/continent/asia`}>Asia</Link>
                        <Link className="item" to={`/continent/europe`}>Europe</Link>
                        <Link className="item" to={`/continent/northamerica`}>North America</Link>
                        <Link className="item" to={`/continent/southamerica`}>South America</Link>
                        <Link className="item" to={`/continent/oceania`}>Oceania</Link>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home;