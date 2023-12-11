import httpCommon from "./http-common";

class Services{
    getUsers(){
        return httpCommon.get('/users');
    }
    getUserById(id){
        return httpCommon.get('/users/${id}');

    }
}

export default new Services();