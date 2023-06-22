'use client'
import { useSession } from 'next-auth/react'
import From from '@component/From'
import { useEffect, useState } from 'react';
import Feed from '@component/Feed';
import { useSearchParams } from 'next/navigation';


const EditPrompt = () => {

  //button desbale
  const [submitting,setSubmitting]=useState(false);
  //session and parmad id get use seachparams
  const{data:session}=useSession()
  const searchParams=useSearchParams()
  const promptId=searchParams.get('id')

//loading state
  const [load ,setLoad]=useState(false)
  //update prompt data state
  const [post,setPost]=useState({
    prompt:'',
    tag:''
  })





  useEffect(() => {
    const getPromptDetails = async () => {
        const response = await fetch(`/api/prompt/${promptId}`);
        const data = await response.json();
     
        setPost({
          prompt:data.prompt,
          tag:data.tag
        })
      };
      if(promptId)  getPromptDetails()
    
  }, [promptId]);
  
  const updatePrompt=async(e)=>{
  e.preventDefault()
  setSubmitting(true)

  if(!promptId) return alert('no prompt id found')
  try{
    const response=await fetch(`/api/prompt/${promptId}`,{
      method:'PATCH',
      body:JSON.stringify({
        prompt:post.prompt,
        tag:post.tag
      })
    })
    if(response.ok){
      console.log('first')
      setLoad(true)
      router.push("/");
    }
  }
  catch(error){
    console.log(error)
  }
  finally{
    setSubmitting(false)

  }
  }
  return (
    <div>
      <From 
      type='Edit'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
      />

      <Feed data={load}/>
  
    </div>
  )
}

export default EditPrompt