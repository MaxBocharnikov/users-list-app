import React from 'react'
import { useQuery } from '@tanstack/react-query'

import { fetchUserList } from 'api/users'
import UserItem from './user-item'
import Loader from 'components/ui-components/loader'

import styles from './index.module.css'

const UserList: React.FC = () => {
  const {
    isLoading,
    data: users,
    error
  } = useQuery({
    queryKey: ['userList'],
    queryFn: async () => await fetchUserList()
  })

  if (isLoading) return <Loader />
  if (error) return <div>Something went wrong...</div>
  if (!users || users.length === 0) return <div>The list is empty...</div>
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Users:</h2>
      <div className={styles.list}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}

export default UserList
