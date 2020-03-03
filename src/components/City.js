import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class City extends Component{

    constructor(props){
        super(props);
    }

    render(){
        let {_id, name, continent} = this.props.data;
        let {btntext} = this.props;
        return (
            <div className="admin__city">
                <Link to={`/admin/cities/${_id}`}>{_id}</Link>
                <div>{name}</div>
                <div>{continent}</div>
                <div><button className="btn btn-danger" onClick={() => this.props.delete(_id)}>{btntext}</button></div>                            
            </div>
        )
    }



}

export default City;