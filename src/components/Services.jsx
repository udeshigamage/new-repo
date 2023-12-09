import httpCommon from "./http-common";

class Services{
    getUsers(){
        return httpCommon.get('/users');
    }
}

export default new Services();