import axios from 'axios';

interface User {
  name: string | null | undefined
  email: string | null | undefined
}


export const api = axios.create({
  baseURL: 'http://localhost:3500',
});

export const userUrlEndpoint = '/user'

export const getUser = async () => {
  const response = await api.get(userUrlEndpoint)
}

export const createUser = async (data: User) => {

  const response = await api.post(userUrlEndpoint, data)


}




