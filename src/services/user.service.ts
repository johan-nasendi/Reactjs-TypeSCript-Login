import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://edufams.com/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL);

  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'dashboard/user', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'dashboard/admin', { headers: authHeader() });
  }
}

export default new UserService();
