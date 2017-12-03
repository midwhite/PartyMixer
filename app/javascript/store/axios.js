import axios from 'axios';

export default {
  get(path, params) {
    return axios.get(path, { params }).then(response => response.data);
  },
}
