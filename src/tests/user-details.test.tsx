import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import UserDetails from 'components/user-details'
import mockedUserList from './mocks/mocked-user-list'

describe('user-details', () => {
  it('should display correct user details info', () => {
    const user = mockedUserList[0] as any
    render(<UserDetails user={user} />)

    expect(screen.getByText(user.name)).toBeInTheDocument()
    expect(screen.getByText(user.email)).toBeInTheDocument()
    expect(screen.getByText(user.address.city)).toBeInTheDocument()
    expect(screen.getByText(user.company.name)).toBeInTheDocument()
    expect(screen.getByText(user.phone)).toBeInTheDocument()
    expect(screen.getByText(user.website)).toBeInTheDocument()
  })
})
