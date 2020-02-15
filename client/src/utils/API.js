import axios from 'axios';

export default {
  // Sends a post request to /sign-up route in routes/sign-up
  createUser: function(userData) {
    return axios.post('/sign-up', userData, {
      headers: {
          'Content-Type': 'application/json',
      }
    });
  },
  // Sends a post request to /log-in route in routes/log-in
  loginUser: function(userData) {
    return axios.post('/log-in', userData, {
      headers: {
          'Content-Type': 'application/json',
      }
    });
  },
  // Get sensor data from Firebase
  getSensorData: function() {
    return axios.get('/data')
  },
  waterPlant: function() {
    return axios.post('/water');
  },
  toggleLight: function() {
    return axios.post('/light');
  },
  getLightState: function() {
    return axios.get('/light');
  }
};
