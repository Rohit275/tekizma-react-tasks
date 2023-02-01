import axios from "axios";
import { resolve } from "./resolve.js";

const URL = process.env.REACT_APP_URL;

export async function getMeetups() {
  return await resolve(axios.get(`${URL}/api/meetups`));
}

export async function getMeetup(id) {
  return await resolve(axios.get(`${URL}/api/meetups/${id}`));
}

export async function deleteMeetup(id) {
  return await resolve(axios.delete(`${URL}/api/meetups/` + id));
}

export async function updateMeetup(data) {
  return await resolve(axios.put(`${URL}/api/meetups/` + data.id, data));
}
