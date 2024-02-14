import axios from 'axios';
import { BASE_BACK_URL } from 'constants';

//clients
export const getUsers = () => {
  axios
    .get(`${BASE_BACK_URL}/users/read`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUserById = (id) => {
  axios
    .get(`${BASE_BACK_URL}/users/read/${id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createUser = (data) => {
  axios
    .post(`${BASE_BACK_URL}/users/create/`, {
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

export const editUser = (id, data) => {
  axios
    .put(`${BASE_BACK_URL}/users/update/${id}`, {
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

export const deleteUser = (id) => {
  axios
    .delete(`${BASE_BACK_URL}/users/delete/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
