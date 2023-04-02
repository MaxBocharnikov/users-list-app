import { type User } from 'types/user'
import { Method } from 'types/api'
import HttpClient from './httpClient'
import { BASE_URL } from 'constants/api'
import { USERS_PER_PAGE } from 'constants/users'

export const fetchUserList = async (
  page: number
): Promise<{ users: User[], page: number, totalPages: number }> => {
  const response = await HttpClient.call<User[]>(
    Method.GET,
    `${BASE_URL}/users?_page=${page}&_limit=${USERS_PER_PAGE}`
  )
  const users = response.data
  const totalCount = response.headers.get('X-Total-Count')

  return {
    users,
    page,
    totalPages: Math.ceil(+totalCount / USERS_PER_PAGE)
  }
}
