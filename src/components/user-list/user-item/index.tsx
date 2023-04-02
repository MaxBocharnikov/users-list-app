import React, { memo } from 'react'

import { type User } from '../../../types/user'

import styles from './index.module.css'

interface Props {
  user: User
  onUserItemClick: (user: User | null) => void
}

const UserItem: React.FC<Props> = ({ user, onUserItemClick }) => {
  return (
    <div
      data-testid={`user-${user.id}`}
      className={styles.user}
      onClick={() => {
        onUserItemClick(user)
      }}
    >
      <div className={styles.name}>{user.name}</div>
      <p>{user.email}</p>
      <p>{user.company.name}</p>
    </div>
  )
}

export default memo(UserItem)
