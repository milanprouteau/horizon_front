import React, {Component} from 'react';
import PostService from '../services/posts.service';

class DetailsPost extends Component{

    state = {
        title: '',
        content: '',
    }

    async componentDidMount(){
        let {id} = this.props.match.params;
        let response = await PostService.details(id);
        if(response.ok){
            let data = await response.json();
            console.log(data);
            /*
                data:{
                    title: "tete",
                    content: "tete"
                }
            */
            this.setState({title: data.post.title, content: data.post.content});
        }
    }

    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    async submit(e){
        e.preventDefault();
        let {id} = this.props.match.params;
        let {title, content} = this.state;

        let body = {
            title,
            content
        };

        let response = await PostService.update(id, body);
        if(response.ok){
            console.log("update");   
        }
    }

    render(){

        //Extraction de données
        let {title, content} = this.state;
        
        return (
            <div className="container">
                <h1>Détails du post</h1>
                <form onSubmit={(e) => this.submit(e)}>
                    <div className="form-group">
                        <label>Titre</label>
                        <input id="title" required className="form-control" onChange={(e) => this.handleChange(e)} value={title}/>
                    </div>

                    <div className="form-group">
                        <label>Contenu</label>
                        <input id="content" required className="form-control" onChange={(e) => this.handleChange(e)} value={content}/>
                    </div>

                    <button type="submit" className="btn btn-primary">Modifier</button>
                </form>
                
            </div>

        )
    }

}

export default DetailsPost;