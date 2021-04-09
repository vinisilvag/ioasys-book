import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@ioasysBooks:token');

  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const token = localStorage.getItem('@ioasysBooks:token');

    if (error.response.status === 401 && token) {
      const response = await refresh(error);

      return response;
    }

    return Promise.reject(error);
  },
);

async function refresh(error: AxiosError) {
  return new Promise((resolve, reject) => {
    try {
      const refreshToken = localStorage.getItem('@ioasysBooks:refreshToken');
      const currentToken = localStorage.getItem('@ioasysBooks:token');

      axios
        .post(
          'https://books.ioasys.com.br/api/v1/auth/refresh-token',
          { refreshToken },
          {
            headers: {
              Authorization: `Bearer ${currentToken}`,
            },
          },
        )
        .then(async (response) => {
          const newToken = response.headers.authorization;
          const newRefreshToken = response.headers['refresh-token'];

          localStorage.setItem('@ioasysBooks:token', newToken);
          localStorage.setItem('@ioasysBooks:refreshToken', newRefreshToken);

          return resolve(response);
        })
        .catch(() => {
          localStorage.removeItem('@ioasysBooks:token');
          localStorage.removeItem('@ioasysBooks:refreshToken');
          localStorage.removeItem('@ioasysBooks:user');

          window.location.href = process.env.REACT_APP_DEVELOPMENT_SERVER
            ? 'http://localhost:3000/'
            : 'https://vinisilvag-ioasys.netlify.app/';

          return reject(error);
        });
    } catch (err) {
      return reject(err);
    }
  });
}

export default api;
