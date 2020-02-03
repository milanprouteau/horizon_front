const baseUrl = "http://localhost:3005";

class PostService{

    static async list(){
        let init = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
        let call = await fetch(`${baseUrl}/posts`, init);
        return call;
    }

    static async delete(id){
        let init = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }
        let call = await fetch(`${baseUrl}/posts/${id}`, init);
        return call;
    }

}

export default PostService;