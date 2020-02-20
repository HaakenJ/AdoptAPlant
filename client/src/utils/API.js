import axios from "axios";

export default {
  // Sends a post request to /sign-up route in routes/sign-up
  createUser: function(userData) {
    return axios.post("/sign-up", userData, {
      headers: {
          'Content-Type': 'application/json',
      }
    });
  },
  // Sends a post request to /log-in route in routes/log-in
  loginUser: function(userData) {
    return axios.post("/log-in", userData, {
      headers: {
          'Content-Type': 'application/json',
      }
    });
  },
  // Sends a post request to /log-in route in routes/log-in
  loginFacebook: function() {
    return axios.get("/facebook", {
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,OPTIONS'
      }
    });
  }
};
