import { useEffect, useState } from "react"


function HooksEffect() {
  const [someState, setSomeState] = useState(1)

  useEffect(
    () => {
      // Code here is run when the component is mounted

      // setInterval starts a new 'thread' besides the main 'thread' 
      const timerID = setInterval(
        () => {console.log("running")},
        1000
      )

      return () => {
        // Cleanup the started 'thread' here
        clearTimeout(timerID)
      }
    },
    [someState]
  )

  return (
    <div></div>
  )
}

export default HooksEffect