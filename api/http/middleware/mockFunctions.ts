import { AxiosRequestConfig } from 'axios';

const middleware = (config: AxiosRequestConfig): AxiosRequestConfig => {
  if (config.url && config.url.indexOf('/functions/') == 0) {
    if (config.baseURL) {
      config.baseURL = config.baseURL.replace('/mock-core', '');
    }
  }
  return config;
};

export default middleware;
