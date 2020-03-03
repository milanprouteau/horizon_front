import React, {Component} from 'react';
import CityService from '../services/cities.service';
import FlightService from '../services/flight.service';
import { Link } from 'react-router-dom';

import "./style.scss";

class Cities extends Component{

    constructor(props){
        super(props);
        this.state = {
            flightList: [],
            city: '',
            selectedOption: null,
            citiesList: [],
        }
    }
 
    async componentDidMount(){
        let flightResponse = await FlightService.list();
        let cityResponse = await CityService.list();
        let cityValue = this.props.match.params.city;
        let cityData = await cityResponse.json();
        let data = await flightResponse.json();

        // get the current city
        if(cityResponse.ok){
            this.setState({city: cityData.cities.filter(({name}) => name.toLowerCase() == cityValue.toLowerCase())});
        }
        let city = this.state.city;

        // get the list of the flights related to the city (filtered by city of arrival)
        if(flightResponse.ok){
            this.setState({flightList: data.flights.filter(({arrivalCity}) => arrivalCity == city[0]._id)});
        }

        // get the list of the departure city which they have in arrival the actual city
        let departureIdsList = this.state.flightList.map(item => item.departureCity);
        this.setState({
            citiesList: cityData.cities.filter(({_id}) => departureIdsList.indexOf(_id) > -1).map(item => item.name)
          }, () => { console.log(this.state)})
    } 

    // allow the user to select the departure city of his choice
    render(){
        return this.state.flightList.length ? (
            <div className="city__container">
                <h1 className="city__title">{this.props.match.params.city}</h1>
                <div className="description">Select your flight</div>
                <div className="city__select">
                    <select>
                        {
                            this.state.citiesList.map(item => {
                                return (
                                    <option value="item">{item}</option>
                                )
                            })
                        }
                    </select>
                    <span> to {this.props.match.params.city}</span>
                </div>
                <div className="city__search">
                    <Link>Search</Link>
                </div>
            </div>
        ) : <div>No flight are available yet for this destination</div>
    }

}

export default Cities;