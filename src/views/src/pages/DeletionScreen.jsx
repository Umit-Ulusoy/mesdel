import React, { useState, useEffect } from 'react'
import { startMessageDeletion, deletionProcessListener } from '../helpers/businessHandler'
import Input from '../components/Input'
import Button from '../components/Button'
function DeletionScreen({data}) {
  const [messageCount, setMessageCount] = useState(0)

  if(!data) return <p>Kullanıcı bulunamadı.</p>
  const user = data.user
  function startDeletion(){
    startMessageDeletion(data.id, messageCount)
    deletionProcessListener()
    setMessageCount(0)
  }
  function handleChange(e){
    setMessageCount(e.target.value)
  }
  useEffect(()=> {
	  chrome.runtime.connect({ name: 'MAIN_POPUP' })
  }, [])
  
  return (
    <>
      <img src={user.avatarUrl} alt="User Avatar Image" className="rounded-lg" />
      <p className='text-base'><span className="font-medium">{user.globalName}</span> / {user.username}</p>
      
      <label className='text-base'>
        Count: 
        <span className='flex flex-row gap-2 mt-2'>
          <Input 
            handleChange={handleChange}
            value={messageCount}
            type="number"
            props={{
              name:"messageCount",
              min: 1
            }}
          />
          <Button
            text="Sil"
            styles="btn-md"
            handleClick={startDeletion}
          />
        </span>
      </label>

	    <div id="progress">0</div>
    </>
  )
}

export default DeletionScreen