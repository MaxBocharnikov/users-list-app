import React, { type ReactNode } from 'react'
import { render } from '@testing-library/react'

import { UserContextProvider } from 'context/user-context'

export function renderWithContext (component: ReactNode) {
  return render(<UserContextProvider>{component}</UserContextProvider>)
}
