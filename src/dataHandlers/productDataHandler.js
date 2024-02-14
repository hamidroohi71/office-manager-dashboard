import axios from 'axios';
import { BASE_BACK_URL } from 'constants';

//clients
export const getProduct = () => {
  axios
    .get(`${BASE_BACK_URL}/products/read`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
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

export const createProduct = (data) => {
  axios
    .post(`${BASE_BACK_URL}/products/create/`, {
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
