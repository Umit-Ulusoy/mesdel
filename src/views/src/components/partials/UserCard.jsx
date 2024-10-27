import React from 'react'

function UserCard({data, handleClick}) {
    const user = data.user
    return (
        <>
            <div className="card card-side bg-base-100 shadow-xl" onClick={handleClick}>
                <figure>
                    <img
                    src={`${user?.avatarUrl}`}
                    alt={`${user.username} avatar image`} />
                </figure>
                <div className="card-body flex flex-col justify-center items-center">
                    <h2 className="card-title">{user?.globalName}</h2>
                    <p>{user?.username}</p>
                </div>
            </div>
        </>
    )
}

export default UserCard