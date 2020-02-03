import React, {Component} from 'react';

class Post extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(this.props.data);
    }

    render(){
        let {_id, title, content} = this.props.data;
        let {btntext} = this.props;
        return (
            <tr>
                <td>{_id}</td>
                <td>{title}</td>
                <td>{content}</td>
                <td><button className="btn btn-danger" onClick={() => this.props.delete(_id)}>{btntext}</button></td>                            
            </tr>
        )
    }



}

export default Post;