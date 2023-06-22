'use client'
import { useSession } from 'next-auth/react'
import From from '@component/From'
import { useState } from 'react';
import { useRouter } from "next/navigation";
import Feed from '@component/Feed';

const CreatePrompt = () => {
  const [submitting,setSubmitting]=useState(false);
  const{data:session}=useSession()
  const [load ,setLoad]=useState(false)
  const router = useRouter();
  const [post,setPost]=useState({
    prompt:'',
    tag:''
  })

  const createPrompt=async(e)=>{
  e.preventDefault()
  setSubmitting(true)
  try{
    const response=await fetch(`/api/prompt/new`,{
      method:'POST',
      body:JSON.stringify({
        prompt:post.prompt,
        userId:session?.user?.id,
        tag:post.tag
      })
    })
    console.log(response,'response0000000')
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
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
      />

      {/* <Feed data={load}/> */}
    </div>
  )
}

export default CreatePrompt