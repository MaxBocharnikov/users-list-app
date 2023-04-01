import React, { memo } from 'react'

import styles from './index.module.css'

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  )
}

export default memo(Loader)
