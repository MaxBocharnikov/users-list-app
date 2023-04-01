import { type User } from 'types/user'
import { Method } from 'types/api'
import HttpClient from './httpClient'
import { BASE_URL } from 'constants/api'

export const fetchUserList = async (): Promise<User[]> => {
  const response = await HttpClient.call<User[]>(
    Method.GET,
    `${BASE_URL}/users`
  )
  return response.data
}
