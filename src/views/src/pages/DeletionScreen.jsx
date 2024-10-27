import React, { useState, useEffect } from 'react'
import { startMessageDeletion } from '../helpers/businessHandler'
import Input from '../components/Input'
import Button from '../components/Button'
import Progress from '../components/Progress'

function DeletionScreen({data}) {
  const [messageCount, setMessageCount] = useState(0)

  if(!data) return <p>Kullanıcı bulunamadı.</p>
  const user = data.user
  function startDeletion(){
    startMessageDeletion(data.id, messageCount)
    setMessageCount(0)
  }
  function handleChange(e){
    setMessageCount(e.target.value)
  }
  
  
  return (
    <>
      <img src={user.avatarUrl} alt="User Avatar Image" className="rounded-lg" />
      <p className='text-base'><span className="font-medium">{user.globalName}</span> / {user.username}</p>
      
      <label className='text-base'>
        Count: 
        <span className='flex flex-row gap-2 mt-2 justify-center items-center'>
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
            styles="btn-sm btn-neutral"
            handleClick={startDeletion}
          />
        </span>
      </label>

      <Progress />
    </>
  )
}

export default DeletionScreen