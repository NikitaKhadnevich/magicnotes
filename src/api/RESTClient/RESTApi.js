/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { ERROR_MESSAGES } from './RestReceiver';
import { notesURL } from './apiConstants';

const { getError, postError, putError, deleteError } = ERROR_MESSAGES;

function runGETusers(fetchState) {
  return axios
    .get(notesURL)
    .then((resNotes) => resNotes.data)
    .catch((err) => new Error(getError))
    .finally(() => fetchState(false));
}

function runGETInfinityNotes({ pageParam = 1 }) {
  return axios
    .get(`${notesURL}?_limit=4&_page=${pageParam}`)
    .then((resNotes) => resNotes)
    .catch((err) => new Error(getError));
}

function runPOSTuser(baseUrl, obj) {
  return axios
    .post(baseUrl, obj)
    .then((resNotes) => resNotes.data)
    .catch((err) => new Error(postError));
}

function runUpdateUser(baseUrl, { ...updateUser }) {
  return axios
    .put(`${baseUrl}`, updateUser)
    .then((resNotes) => resNotes.data)
    .catch((err) => new Error(putError));
}

function runDELETEuser(baseUrl, id) {
  return axios
    .delete(`${baseUrl}/${id}`)
    .then((resNotes) => resNotes.data)
    .catch((err) => new Error(deleteError));
}

export {
  runGETusers,
  runPOSTuser,
  runUpdateUser,
  runDELETEuser,
  runGETInfinityNotes,
};
