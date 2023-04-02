import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchUserList } from 'api/users'

export const useUsersQuery = () => {
  const query = useInfiniteQuery(
    ['userList'],
    async ({ pageParam = 1 }) => await fetchUserList(pageParam),
    {
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.page + 1
        return nextPage <= lastPage.totalPages ? nextPage : undefined
      },
      cacheTime: 0
    }
  )

  return query
}
