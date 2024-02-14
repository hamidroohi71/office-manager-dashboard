import axios from 'axios';
import { BASE_BACK_URL } from 'constants';

//clients
export const getTasks = () => {
  axios
    .get(`${BASE_BACK_URL}/tasks/read`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTaskById = (id) => {
  axios
    .get(`${BASE_BACK_URL}/tasks/read/${id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createTask = (data) => {
  axios
    .post(`${BASE_BACK_URL}/tasks/create/`, {
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

export const editTask = (id, data) => {
  axios
    .put(`${BASE_BACK_URL}/tasks/update/${id}`, {
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

export const deleteTask = (id) => {
  axios
    .delete(`${BASE_BACK_URL}/tasks/delete/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
