import Axios from "axios";
import {getToken} from "./token";

const Error = {
  UNAUTHORIZED: 401
};

const BASE_URL = `https://9.react.pages.academy/wtw`;
const TIMEOUT = 1000 * 5;

export const createAPI = (onUnauthorized) => {
  const api = Axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onError = (err) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();
      // Бросаем ошибку, потому что нам важно прервать цепочку промисов после запроса авторизации.
      // Запрос авторизации - это особый случай и важно дать понять приложению, что запрос был неудачным.
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onError);
  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token) {
      config.headers[`x-token`] = token;
    }

    return config;
  });

  return api;
};
