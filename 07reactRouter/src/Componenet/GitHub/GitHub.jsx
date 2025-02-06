import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function GitHub() {
    // const [data,setData] = useState("");
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/PralayeshMukherjee')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // })
    const data = useLoaderData();
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      GitHub Followers: {data.followers} || Follwing: {data.following}
      <img src={data.avatar_url} className='w-30 h-30' alt="" />
    </div>
  )
}

export default GitHub;

export const githubInfoLoader = async() =>{
    const response = await fetch('https://api.github.com/users/PralayeshMukherjee');
    return response.json();
}