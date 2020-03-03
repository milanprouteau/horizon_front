import React, {Component} from 'react';
import CityService from '../services/cities.service';

class DetailsCity extends Component{

    state = {
        name: '',
        continent: '',
    }

    // We take the id of the url to find the city related
    async componentDidMount(){
        let {id} = this.props.match.params;
        let response = await CityService.details(id);
        if(response.ok){
            let data = await response.json();
            this.setState({name: data.cities.name, continent: data.cities.continent});
        }
    }

    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    // Update the city datas once we've clicked on the submit button
    async submit(e){
        e.preventDefault();
        let {id} = this.props.match.params;
        let {name, continent} = this.state;

        let body = {
            name,
            continent,
        };

        let response = await CityService.update(id, body);
    }

    // display the form with the possibilities to update the name and the continent
    render(){
        let {name, continent} = this.state;
        return (
            <div className="container">
                <h1>Modify your city</h1>
                <form onSubmit={(e) => this.submit(e)}>
                    <div className="form-group">
                        <label>Name</label>
                        <input id="title" required className="form-control" onChange={(e) => this.handleChange(e)} value={name}/>
                    </div>

                    <div className="form-group">
                        <label>Continent</label>
                        <input id="content" required className="form-control" onChange={(e) => this.handleChange(e)} value={continent}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Modify</button>
                </form>
                
            </div>

        )
    }

}

export default DetailsCity;