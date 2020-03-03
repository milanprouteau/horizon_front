import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Cities from './pages/Cities';
import City from './pages/City';
import AdminCity from './admin/admin.city'
import DetailsCity from './pages/DetailsCity';

import "./pages/style.scss";

class App extends Component{

    // browse the different routes of the application
    render(){
        return(
            <BrowserRouter>
                <Header />
                <div className="homepage-background"></div>

                <Route path="/" exact component={Home} />
                <Route path="/continent/:continent" exact component={Cities} />
                <Route path="/detail/:city" exact component={City} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/admin/cities" exact component={AdminCity} />
                <Route path="/admin/cities/:id" exact component={DetailsCity} />
                
            </BrowserRouter>
        )
    }
}

export default App;
