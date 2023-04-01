import React, { memo } from 'react'

import { type User } from '../../../types/user'

import styles from './index.module.css'

interface Props {
  user: User
}

const UserItem: React.FC<Props> = ({ user }) => {
  return (
    <div className={styles.user}>
      <div className={styles.name}>{user.name}</div>
      <p>{user.email}</p>
      <p>{user.company.name}</p>
    </div>
  )
}

export default memo(UserItem)
