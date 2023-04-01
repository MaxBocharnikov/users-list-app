import React, { type ReactNode } from 'react'

import styles from './index.module.css'

interface Props {
  children: ReactNode
}

const Page: React.FC<Props> = ({ children }) => {
  return <section className={styles.page}>{children}</section>
}

export default Page
