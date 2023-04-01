import React, { type ChangeEvent, memo } from 'react'

import styles from './index.module.css'

interface Props {
  value: string
  onChange: (value: string) => void
  placeholder: string
  type?: string
}

const Input: React.FC<Props> = ({
  value,
  onChange,
  placeholder,
  type = 'text'
}) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }
  return (
    <input
      className={styles.input}
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
      type={type}
    />
  )
}

export default memo(Input)
