import React, {Component} from 'react';
import CityService from '../services/cities.service';
import { Link } from 'react-router-dom';

import "./style.scss";

class Cities extends Component{

    constructor(props){
        super(props);
        this.state = {
            citiesList: []
        }
    }

    // get the list of the city and the continent (from the url)
    async componentDidMount(){
        let response = await CityService.list();
        let continentValue = this.props.match.params.continent;

        if(response.ok){
            let data = await response.json();
            // get the city linked to the continent
            // .replace() is use to remove the space and match with the continent (ex. noth america => northamerica)
            this.setState({citiesList: data.cities.filter(({continent}) => continent.replace(/\s/g,'') == continentValue )})
        }
    }

    // display the list of the cities related to the country
    // I use toLowerCase() to remove the uppercase in the url
    render(){
        return this.state.citiesList.length && (
            <div className="city__container">
                <h1 className="city__title">{this.props.match.params.continent}</h1>
                <div className="description">Select your destination !</div>
                <ul className="city__list">{
                    this.state.citiesList.map(item => {
                        return (
                            <Link className="item city__item" to={`/detail/` + item.name.toLowerCase()}> {item.name}</Link>
                        )
                    })
                }
                </ul>
            </div>
        )
    }

}

export default Cities;