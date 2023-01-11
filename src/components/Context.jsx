import { createContext, useContext, useState } from 'react'

// First create a context
const myContext = createContext("default value")

function Context() {
  const [state, setState] = useState('some value')

  return (
    // Then wrap the parts of the application we want with the context
    <myContext.Provider value={state}>
      <div>
        <NestedComponent/>
      </div>
    </myContext.Provider>
  )
}

function NestedComponent() {
  return (
    <div>
      <DeeplyNestedComponent/>
    </div>
  )
}

function DeeplyNestedComponent(props) {
  const context = useContext(myContext)

  return (
    <div>
      <h1>{context}</h1>
    </div>
  )
}


export default Context