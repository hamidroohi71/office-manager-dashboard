import axios from 'axios';
import { BASE_BACK_URL } from 'constants';

//clients
export const getClients = async () => {
  return axios
    .get(`${BASE_BACK_URL}/clients/read`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const getClientById = (id) => {
  axios
    .get(`${BASE_BACK_URL}/clients/read/${id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createClient = (data) => {
  axios
    .post(`${BASE_BACK_URL}/clients/create/`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const editClient = (id, data) => {
  axios
    .put(`${BASE_BACK_URL}/clients/update/${id}`, {
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

export const deleteClient = (id) => {
  axios
    .delete(`${BASE_BACK_URL}/clients/delete/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
