import { useAxios } from './axios';

export const getSystemList = async () => {
  const { data } = await useAxios().get('/systems');
  return data;
};
