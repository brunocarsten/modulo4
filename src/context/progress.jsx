import { createContext, useState, useEffect } from 'react'

const ProgressContext = createContext()

function ProgressProvider({ children }) {
  const [state, setState] = useState({
    step: 0
  })
  const [doneItems, setDoneItems] = useState([])

  const handleState = (payload) => {
    console.log(payload)
    setState({ step: payload })
  }

  const handleCurrentStep = () => {
    setDoneItems([...doneItems, state.step])
  }

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('progress'))

    if (doneItems != '') {
      localStorage.setItem('progress', JSON.stringify(doneItems))
    }
  }, [doneItems])

  const value = { state, doneItems, handleState, handleCurrentStep }
  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export { ProgressProvider, ProgressContext }
