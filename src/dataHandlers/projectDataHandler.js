import axios from 'axios';
import { BASE_BACK_URL } from 'constants';

//clients
export const getProjects = async () => {
  return axios.get(`${BASE_BACK_URL}/projects/read`).then((res) => {
    console.log(res.data);
    return res.data;
  });
};

export const getProjectById = (id) => {
  axios
    .get(`${BASE_BACK_URL}/projects/read/${id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createProject = async (data) => {
  return axios
    .post(`${BASE_BACK_URL}/projects/create/`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      console.log(res);
      return res;
    });
};

export const editProject = async (id, data) => {
  return axios
    .put(`${BASE_BACK_URL}/projects/update/${id}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      console.log(res);
      return res;
    });
};

export const deleteProject = (id) => {
  axios
    .delete(`${BASE_BACK_URL}/projects/delete/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
