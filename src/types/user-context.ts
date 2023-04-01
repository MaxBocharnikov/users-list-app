import { type User } from './user'

export interface UserContextType {
  selectedUser: User | null
  setSelectedUser: (selectedUser: User | null) => void
}
