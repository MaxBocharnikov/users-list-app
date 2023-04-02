import React, { useContext, useEffect, useState } from 'react'

import Filter from 'components/ui-components/filter'
import { UserContext } from 'context/user-context'
import { type UserContextType } from 'types/user-context'
import useDebounce from 'hooks/use-debounce'

const UserFilter = () => {
  const { filterValue, setFilterValue } = useContext(
    UserContext
  ) as UserContextType
  const [inputValue, setInputValue] = useState<string>(filterValue)
  const debounceFilterValue = useDebounce(inputValue, 300)

  useEffect(() => {
    setFilterValue(debounceFilterValue)
  }, [debounceFilterValue, setFilterValue])

  return (
    <Filter
      placeholder="Search by name or email"
      value={inputValue}
      onChange={setInputValue}
    />
  )
}

export default UserFilter
