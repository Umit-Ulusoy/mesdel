import React, { useState } from 'react'
import { startMessageDeletion } from '../helpers/businessHandler'

function DeletionScreen({data}) {
  const [messageCount, setMessageCount] = useState(0)

  if(!data) return <p>Kullanıcı bulunamadı.</p>
  const user = data.user
  function startDeletion(){
    startMessageDeletion(data.id, messageCount)
  }
  function handleChange(e){
    setMessageCount(e.target.value)
  }
  return (
    <>
      <h4>DeletionScreen</h4>
      <img src={user.avatarUrl} alt="Avatar Image" />
      <span>User: {user.globalName} / {user.username}</span>
      <input type="number" name="messageCount" min={1} value={messageCount} onChange={handleChange} />
      <button onClick={startDeletion}>Sil</button>
    </>
  )
}

export default DeletionScreen