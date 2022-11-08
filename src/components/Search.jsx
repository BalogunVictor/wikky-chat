import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='find a user'/>
      </div>
      <div className="userChat">
        <img src="https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className="userChatInfo">
          <span>jane</span>
        
        </div>
      
      </div>
    
    </div>
  )
}

export default Search