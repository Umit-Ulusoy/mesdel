import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Router from "./routes/router"
import { ACTIONS } from "@handlers"
import './main.scss'

function App() {
  const [progressValue, setProgressValue] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
	  navigate('/');

	  const port = chrome.runtime.connect({ name: 'MAIN_POPUP' });
	  
	  const handleMessage = (request, sender, sendResponse) => {
		if (request.action === ACTIONS.MESSAGE.MESSAGE_DELETION_PROGRESS) {
		  setProgressValue(request.progress);
		}

		if (request.action === ACTIONS.MESSAGE.MESSAGE_DELETION_COMPLETE) {
		  setIsComplete(true);
		}
	  };

	  chrome.runtime.onMessage.addListener(handleMessage);

	  return () => {
		port.disconnect();
		chrome.runtime.onMessage.removeListener(handleMessage);
	  };
  }, []);

  return (
    <>
      <Router progressValue={progressValue} isComplete={isComplete} />
    </>

  )
}

export default App
