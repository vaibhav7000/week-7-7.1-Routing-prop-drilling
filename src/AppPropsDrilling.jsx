import { createContext, useContext, useState } from "react"

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
        <CountContext.Provider value={{
            count, setCount
        }}>
            <Count/>
        </CountContext.Provider>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons  />
  </div>
}

function CountRenderer() {
    const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons() {
    const {count, setCount} = useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App

// Context API was introduced to solve problem of "prop drilling"

const CountContext = createContext(0);