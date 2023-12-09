import axios from "axios";

export default axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/users",
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    }
}



)