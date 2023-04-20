import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:8080' });

export const fetchTour = (id) => API.get(`/tours/${id}`);