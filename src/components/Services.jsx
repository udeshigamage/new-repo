import httpCommon from "./http-common";

class Services{
    getUsers(){
        return httpCommon.get('/users');
    }
    getUserById(id){
        return httpCommon.get(`/users/${id}`);

    }
    updateUser(id,data){
        return httpCommon.put(`/users/${id}`,data);
    }
}

export default new Services();