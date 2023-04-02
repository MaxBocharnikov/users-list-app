import React from 'react'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import UserList from 'components/user-list'
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

  it('should display loader', () => {
    mockedUseUsersQuery.mockImplementation(() => ({
      status: 'loading'
    }))
    renderWithContext(<UserList />)

    const loader = screen.getByTestId('loader')
    expect(loader).toBeInTheDocument()
  })

  it('should display error', () => {
    mockedUseUsersQuery.mockImplementation(() => ({
      status: 'error'
    }))
    renderWithContext(<UserList />)
    expect(screen.getByText(/Something went wrong.../i)).toBeInTheDocument()
  })

  it('should no data found message', () => {
    mockedUseUsersQuery.mockImplementation(() => ({
      status: 'loaded',
      data: undefined
    }))
    renderWithContext(<UserList />)
    expect(screen.getByText(/The list is empty.../i)).toBeInTheDocument()
  })

  it('should display users list', () => {
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
    renderWithContext(<UserList />)
    expect(screen.getByText(`${mockedUserList[0].name}`)).toBeInTheDocument()
    expect(screen.getByText(`${mockedUserList[1].email}`)).toBeInTheDocument()
  })
})
