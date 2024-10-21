import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosRequestConfig,
} from 'axios';
import { ERROR_TYPE } from 'utils/error';
import { BASE_URL } from '.';
import showErrorToast from 'app/components/Toast/components/Toast-error';
import { useNavigateContext } from 'utils/contex/navigate';

const authData = JSON.parse(localStorage.getItem('auth') || '{}');
let accessToken = authData?.auth?.accessToken;
let refreshToken = authData?.auth?.refreshToken;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// Interceptor để thêm accessToken vào header của mỗi request
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (accessToken) {
      config.headers['Authorization'] = `${
        authData?.auth?.tokenType || 'Bearer'
      } ${accessToken}`;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: any) => {
    const originalRequest = error.config;
    const navigate = useNavigateContext();

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshResponse = await axios.post(
          `${BASE_URL}/auth/refresh-token`,
          { token: refreshToken },
        );
        const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
          refreshResponse.data;

        accessToken = newAccessToken;
        refreshToken = newRefreshToken;

        const updatedAuthData = {
          ...authData,
          auth: {
            ...authData.auth,
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
          },
        };
        localStorage.setItem('auth', JSON.stringify(updatedAuthData));

        originalRequest.headers['Authorization'] = `${
          updatedAuthData.auth.tokenType || 'Bearer'
        } ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        showErrorToast('Phiên đã hết hạn, vui lòng đăng nhập lại.');
        navigate('/login');
        return Promise.reject(refreshError);
      }
    }

    if (error.response) {
      const statusCode = error.response.status;
      const errorData = error.response.data;

      if (statusCode === 400) {
        showErrorToast(ERROR_TYPE[errorData.error] || 'Yêu cầu không hợp lệ');
      } else if (statusCode >= 500) {
        showErrorToast('Lỗi máy chủ, vui lòng thử lại sau');
      }
    } else {
      showErrorToast('Không thể kết nối đến máy chủ');
    }
    return Promise.reject(error);
  },
);

export async function request(url: string, options?: AxiosRequestConfig) {
  const response = await axiosInstance(url, options);
  return response;
}

export async function get(url: string, options?: AxiosRequestConfig) {
  return await request(url, { ...options, method: 'GET' });
}

export async function post(
  url: string,
  data?: any,
  options?: AxiosRequestConfig,
) {
  return await request(url, { ...options, method: 'POST', data });
}

export async function put(
  url: string,
  data?: any,
  options?: AxiosRequestConfig,
) {
  return await request(url, { ...options, method: 'PUT', data });
}

export async function patch(
  url: string,
  data?: any,
  options?: AxiosRequestConfig,
) {
  return await request(url, { ...options, method: 'PATCH', data });
}

export async function del(url: string, options?: AxiosRequestConfig) {
  return await request(url, { ...options, method: 'DELETE' });
}
