import { useState } from 'react'
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
  useQuery
} from 'react-query'
import { DynamicComponent, MyVar } from './components/DynamicComponent'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GetData />
    </QueryClientProvider>
  )
}

function GetData() {
  const queryClient = useQueryClient()

  const { isLoading, error, data } = useQuery(
    'repoData'
    , () =>
     fetch('https://api.github.com/repos/tannerlinsley/react-query')
      .then(res => res.json()
     )
   )

   if (isLoading) return 'Loading...'
 
   if (error) return 'An error has occurred: ' + error.message
 
   return (
     <div>
       <h1>{data.name}</h1>
       <p>{data.description}</p>
       <strong>👀 {data.subscribers_count}</strong>{' '}
       <strong>✨ {data.stargazers_count}</strong>{' '}
       <strong>🍴 {data.forks_count}</strong>
     </div>
   )
}

export default App
