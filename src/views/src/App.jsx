import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Router from "./routes/router"
import { ACTIONS } from "@handlers"
import './main.scss'

function App() {
  const [progressValue, setProgressValue] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const navigate = useNavigate()

  useEffect(()=> {
    navigate('/')
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.action === ACTIONS.MESSAGE.MESSAGE_DELETION_PROGRESS) {
              setProgressValue(request.progress)
          }
  
          if (request.action === ACTIONS.MESSAGE.MESSAGE_DELETION_COMPLETE) {
              setIsComplete(true)
          }
      })
      chrome.runtime.connect({ name: 'MAIN_POPUP' })
  }, [])

  return (
    <>
      <Router progressValue={progressValue} isComplete={isComplete} />
    </>

  )
}

export default App
