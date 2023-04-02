import React, { useContext } from 'react'

import Page from 'components/ui-components/page'
import UserList from 'components/user-list'
import { UserContext } from 'context/user-context'
import { type UserContextType } from 'types/user-context'
import UserDetails from 'components/user-details'
import UserFilter from 'components/user-filter'

import styles from './index.module.css'

const MainPage: React.FC = () => {
  const { selectedUser } = useContext(UserContext) as UserContextType
  return (
    <Page>
      <UserFilter />
      <div className={styles.usersInfo}>
        <UserList />
        {selectedUser && <UserDetails user={selectedUser} />}
      </div>
    </Page>
  )
}

export default MainPage
