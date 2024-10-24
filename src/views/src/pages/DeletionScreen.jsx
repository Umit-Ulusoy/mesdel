import React, { useState, useEffect } from 'react'
import { startMessageDeletion, deletionProcessListener } from '../helpers/businessHandler'

function DeletionScreen({data}) {
  const [messageCount, setMessageCount] = useState(0)

  if(!data) return <p>Kullanıcı bulunamadı.</p>
  const user = data.user
  function startDeletion(){
    startMessageDeletion(data.id, messageCount)
    deletionProcessListener()
  }
  function handleChange(e){
    setMessageCount(e.target.value)
  }
  useEffect(()=> {
	  chrome.runtime.connect({ name: 'MAIN_POPUP' })
  }, [])
  
  return (
    <>
      <h4>DeletionScreen</h4>
      <img src={user.avatarUrl} alt="Avatar Image" />
      <span>User: {user.globalName} / {user.username}</span>
      <input type="number" name="messageCount" min={1} value={messageCount} onChange={handleChange} />
      
	    <button onClick={startDeletion}>Sil</button>
	  
	    <div id="progress">0</div>
    </>
  )
}

export default DeletionScreen