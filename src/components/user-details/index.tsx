import React from 'react'
import { type User } from 'types/user'

import styles from './index.module.css'

interface Props {
  user: User
}

const UserDetails: React.FC<Props> = ({ user }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Details:</h2>
      <div className={styles.info}>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.website}</p>
        <div className={styles.address}>
          <p>{user.address.street}</p>
          <p>{user.address.suite}</p>
          <p>{user.address.city}</p>
          <p>{user.address.zipcode}</p>
        </div>
        <div className={styles.company}>
          <p>{user.company.name}</p>
          <p>{user.company.catchPhrase}</p>
          <p>{user.company.bs}</p>
        </div>
      </div>
    </div>
  )
}

export default UserDetails
