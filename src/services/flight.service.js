const baseUrl = "http://localhost:3005";

class FlightService{

    static async list(){
        let init = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }
        let call = await fetch(`${baseUrl}/flights`, init);
        return call;
    }

    static async details(id){
         let init = {
             method: "GET",
             headers: {
                 "Content-Type": "application/json",
                 "Authorization": `Bearer ${localStorage.getItem('token')}`
             }
         }
         let call = await fetch(`${baseUrl}/flights/${id}`, init);
         return call;
     }

    static async update(id, body){
        let init = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(body)
        }
        let call = await fetch(`${baseUrl}/flights/${id}`, init);
        return call;
    }

    static async delete(id){
        let init = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }
        let call = await fetch(`${baseUrl}/flights/${id}`, init);
        return call;
    }

}

export default FlightService;