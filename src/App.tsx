import React from 'react'
import MainPage from 'pages/main-page'
import { UserContextProvider } from './context/user-context'

function App () {
  return (
    <UserContextProvider>
      <MainPage />
    </UserContextProvider>
  )
}

export default App
