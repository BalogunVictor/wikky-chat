import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
       <img src="https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <span>Just now</span>
       </div>
       <div className="messageContent">
        <p>hello</p>
        <img src="https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
       </div>
    </div>
  )
}

export default Message