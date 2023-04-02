import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import MainPage from 'pages/main-page'
import { useUsersQuery } from 'hooks/use-users-query'
import { renderWithContext } from './utils/render-with-context'
import mockedUserList from './mocks/mocked-user-list'

const mockedUseUsersQuery = useUsersQuery as jest.Mock<any>
jest.mock('hooks/use-users-query')

describe('user-list', () => {
  beforeEach(() => {
    mockedUseUsersQuery.mockImplementation(() => ({ isLoading: true }))
  })
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should select correct user to show details ', () => {
    mockedUseUsersQuery.mockImplementation(() => ({
      status: 'success',
      data: {
        pages: [
          {
            users: mockedUserList
          }
        ]
      }
    }))
    renderWithContext(<MainPage />)
    expect(screen.queryByTestId('user-details-name')).not.toBeInTheDocument()
    fireEvent.click(screen.getByTestId('user-1'))
    expect(screen.queryByTestId('user-details-name')).toHaveTextContent(
      'Leanne Graham'
    )
    fireEvent.click(screen.getByTestId('user-2'))
    expect(screen.queryByTestId('user-details-name')).toHaveTextContent(
      'Ervin Howell'
    )
  })

  it('should correctly filter the list ', () => {
    mockedUseUsersQuery.mockImplementation(() => ({
      status: 'success',
      data: {
        pages: [
          {
            users: mockedUserList
          }
        ]
      }
    }))
    renderWithContext(<MainPage />)
    expect(screen.getByTestId('user-1')).toBeInTheDocument()
    const filter = screen.getByTestId('filter')
    fireEvent.change(filter, { target: { value: 'Leanne Graham' } })
    setTimeout(() => {
      expect(screen.getByTestId('user-1')).toBeInTheDocument()
      expect(screen.queryByTestId('user-2')).not.toBeInTheDocument()
    }, 500)
  })
})
