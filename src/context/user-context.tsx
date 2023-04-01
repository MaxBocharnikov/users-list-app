import React, { createContext, type ReactNode, useState } from 'react'
import { type UserContextType } from 'types/user-context'
import { type User } from 'types/user'

export const UserContext = createContext<UserContextType | null>(null)

interface Props {
  children: ReactNode
}

export const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  return (
    <UserContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </UserContext.Provider>
  )
}
