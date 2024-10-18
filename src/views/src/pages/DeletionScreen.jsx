import React from 'react'

function DeletionScreen({data}) {
  if(!data) return <p>Kullanıcı bulunamadı.</p>
  const user = data.user
  return (
    <>
      <h4>DeletionScreen</h4>
      <img src={user.avatarUrl} alt="Avatar Image" />
      <span>User: {user.globalName} / {user.username}</span>
      
      <button>Sil</button>
    </>
  )
}

export default DeletionScreen