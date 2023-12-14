import httpCommon from "./http-common";

class Services {
  getUsers() {
    return httpCommon.get("/user");
  }
  getUserById(id) {
    return httpCommon.get(`/user/${id}`);
  }
  updateUser(id, data) {
    return httpCommon.put(`/user/${id}`, data);
  }
  postUsers(data) {
    return httpCommon.post("/user", data);
  }
}

export default new Services();
