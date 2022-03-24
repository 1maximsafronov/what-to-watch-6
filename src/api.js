
import Axios from "axios";

const Error = {
  UNAUTHORIZED: 401
};

export const createAPI = (onUnauthorized) => {
  const api = Axios.create({
    baseURL: `https://9.react.pages.academy/guess-melody`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onError = (err) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED) {
      // onUnauthorized();
      // Бросаем ошибку, потому что нам важно прервать цепочку промисов после запроса авторизации.
      // Запрос авторизации - это особый случай и важно дать понять приложению, что запрос был неудачным.
      throw err;
    }


    throw err;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};
