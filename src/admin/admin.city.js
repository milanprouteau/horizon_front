import React, {Component} from 'react';
import CityService from '../services/cities.service';
import City from '../components/City';

class adminCity extends Component{

    state = {
        cities: []
    } 

    
    async componentDidMount(){
        let response = await CityService.list();
        if(response.ok){
            let data = await response.json();
            this.setState({cities: data.cities});
        }
    }

    // find the id related to delete it in the database
    async deleteCity(id){
        let response = await CityService.delete(id);
        if(response.ok){
            let cities = this.state.cities;
            let index = cities.findIndex(cities => cities._id == id);
            cities.splice(index, 1);
            this.setState({cities: cities});
        }
    }

    // display the list of the cities
    render(){        
        return (
            <div className="container">
                <h1>Update your cities</h1>
                <div>
                    {
                        this.state.cities.length > 0 ? 
                            this.state.cities.map(item => {
                                return (
                                    <City data={item} btntext="Supprimer" delete={(id) => this.deleteCity(id) }/>
                                )
                            })
                        : null
                    }
                </div>
            </div>
        )
    }

}

export default adminCity;