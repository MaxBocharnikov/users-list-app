import React, { memo } from 'react'

import Input from 'components/ui-components/input'

import styles from './index.module.css'

interface Props {
  value: string
  onChange: (value: string) => void
  placeholder: string
}

const Filter: React.FC<Props> = ({ value, onChange, placeholder }) => {
  return (
    <div className={styles.container}>
      <Input
        dataTestId="filter"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default memo(Filter)
