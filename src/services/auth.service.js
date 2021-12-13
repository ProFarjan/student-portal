import axios from "axios";
import Api from "@/config/Api";
import Notify from "@/plugins/notify";

class AuthService {
  login(user) {
    return axios
      .post(Api.ENDPOINT.LOGIN, user)
      .then((res) => {
        if (res.data.status == "success") {
          localStorage.setItem("user", JSON.stringify(res.data.message));
          return res.data.message;
        } else {
          Notify.warn(res.data.message);
        }
        return null;
      })
      .catch((err) => {
        Notify.err(err.message);
      });
  }
  logout() {
    localStorage.clear();
  }
}

export default new AuthService();
