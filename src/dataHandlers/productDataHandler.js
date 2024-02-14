import axios from 'axios';
import { BASE_BACK_URL } from 'constants';

//clients
export const getProducts = async () => {
  return axios
    .get(`${BASE_BACK_URL}/products/read`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const getProductById = (id) => {
  axios
    .get(`${BASE_BACK_URL}/products/read/${id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createProduct = async (data) => {
  return axios
    .post(`${BASE_BACK_URL}/products/create/`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      console.log(res);
      return res;
    });
};

export const editProduct = (id, data) => {
  axios
    .put(`${BASE_BACK_URL}/products/update/${id}`, {
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

export const deleteProduct = (id) => {
  axios
    .delete(`${BASE_BACK_URL}/products/delete/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
