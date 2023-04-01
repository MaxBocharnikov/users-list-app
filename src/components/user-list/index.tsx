import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { fetchUserList } from 'api/users'
import UserItem from './user-item'
import Loader from 'components/ui-components/loader'
import { UserContext } from 'context/user-context'
import { type UserContextType } from 'types/user-context'
import { type User } from 'types/user'

import styles from './index.module.css'
import { getFilteredUsers } from '../../utils/users'

const UserList: React.FC = () => {
  const { setSelectedUser, filterValue } = useContext(
    UserContext
  ) as UserContextType
  const {
    isLoading,
    data: users,
    error
  } = useQuery({
    queryKey: ['userList'],
    queryFn: async () => await fetchUserList()
  })

  const [filteredUsers, setFilteredUsers] = useState<User[]>([])

  const onUserItemClick = useCallback(
    (user: User | null) => {
      setSelectedUser(user)
    },
    [setSelectedUser]
  )

  useEffect(() => {
    if (!users) return
    const filteredUsers = getFilteredUsers(users, filterValue)
    setFilteredUsers(filteredUsers)
  }, [JSON.stringify(users), filterValue, getFilteredUsers])

  const renderUsers = () => {
    if (isLoading) return <Loader />
    if (error) { return <div className={styles.error}>Something went wrong...</div> }
    if (filteredUsers.length === 0) { return <div className={styles.empty}>The list is empty...</div> }
    return (
      <>
        <div className={styles.list}>
          {filteredUsers.map((user) => (
            <UserItem
              key={user.id}
              user={user}
              onUserItemClick={onUserItemClick}
            />
          ))}
        </div>
      </>
    )
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Users:</h2>
      {renderUsers()}
    </div>
  )
}

export default UserList
