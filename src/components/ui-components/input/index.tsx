import React, { type ChangeEvent, memo } from 'react'

import styles from './index.module.css'

interface Props {
  value: string
  onChange: (value: string) => void
  placeholder: string
  type?: string
  dataTestId?: string
}

const Input: React.FC<Props> = ({
  value,
  onChange,
  placeholder,
  type = 'text',
  dataTestId
}) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }
  return (
    <input
      data-testid={dataTestId}
      className={styles.input}
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
      type={type}
    />
  )
}

export default memo(Input)
