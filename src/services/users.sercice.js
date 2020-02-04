const baseUrl = "http://localhost:3005";

class UserService{

    static async auth(body){
        let init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
        let call = await fetch(`${baseUrl}/users/authenticate`, init);
        return call;
    }

}

export default UserService;