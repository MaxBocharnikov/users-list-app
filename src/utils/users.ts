import { type User } from 'types/user'

export const getFilteredUsers = (
  users: User[],
  filterValue: string
): User[] => {
  if (!filterValue) return users
  return users.filter(
    (user) =>
      user.name.toLowerCase().includes(filterValue.toLowerCase()) ||
      user.email.toLowerCase().includes(filterValue.toLowerCase())
  )
}
