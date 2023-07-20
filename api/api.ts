import { http } from './http/index';


const puppyApi = {
    index: () => http.get(`/puppies`),
    get: (id: string) => http.get(`/puppies/${id}`),
    create: (data: any) => http.post(`/puppies`, data),
    update: (id: string, data: any) => http.patch(`/puppies/${id}`, data),
    delete: (id: string) => http.delete(`/puppies/${id}`),
  }
  ;
const userApi = {
    index: () => http.get(`/users`),
    get: (id: string) => http.get(`/users/${id}`),
    create: (data: any) => http.post(`/users`, data),
  };

export {
    puppyApi,
    userApi
} 