import axios from 'axios';
import baseURL from '../db/database';

// make axios calls
export const TrackAPI = {
  getAll() {
    return axios.get(`${baseURL}/bins/hw8lz`);
  },
  getItemById(id) {
    throw new Error(`the API doesnot support getItemById`);
    // return axios.get(`${baseURL}/bin/hw8lz/`);
  }
};
