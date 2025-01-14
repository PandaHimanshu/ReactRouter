import React, { useEffect, useState } from 'react'

function Github() {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users/PandaHimanshu')
    .then(Response=>Response.json())
    .then(data=>{
      console.log(data)
      setData(data)
    })
  },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img className='rounded-full' src={data.avatar_url} alt='git picture' width={300}/> </div>
  )
}

export default Github