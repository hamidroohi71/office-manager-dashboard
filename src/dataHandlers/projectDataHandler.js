import axios from 'axios';
import { BASE_BACK_URL } from 'constants';

//clients
export const getProjects = () => {
  axios
    .get(`${BASE_BACK_URL}/projects/read`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
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

export const createProject = (data) => {
  axios
    .post(`${BASE_BACK_URL}/projects/create/`, {
      headers: {
        'Content-Type': 'application/json'
      },
      data
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const editProject = (id, data) => {
  axios
    .put(`${BASE_BACK_URL}/projects/update/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      data
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
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
