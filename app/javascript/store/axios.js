import axios from 'axios';

const getToken = () => {
  const tags = document.getElementsByTagName("meta")
  let token;
  for (let i=0; i<tags.length; i++) {
    if (tags[i].name === "csrf-token") token = tags[i].content;
  }
  return token;
};

export default {
  get(path, params = {}) {
    return axios.get(path, { params }).then(response => response.data);
  },
  post(path, params = {}) {
    params.authenticity_token = getToken();
    return axios.post(path, params).then(response => response.data);
  },
  put(path, params = {}) {
    params.authenticity_token = getToken();
    return axios.put(path, params).then(response => response.data);
  },
  delete(path, params = {}) {
    params.authenticity_token = getToken();
    return axios.delete(path, { params }).then(response => response.data);
  },
}
