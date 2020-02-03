import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import DetailsPost from './pages/DetailsPost';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';

class App extends Component{

    render(){
        return(
            <BrowserRouter>
                <Header />

                <Route path="/" exact component={Home} />
                <Route path="/posts/:id" exact component={DetailsPost} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                
            </BrowserRouter>
        )
    }
}

export default App;
