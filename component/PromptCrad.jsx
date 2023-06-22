import { useSession } from 'next-auth/react';
import Image from 'next/image'
import { usePathname } from 'next/navigation';

import React from 'react'

const PromptCrad = ({handleTagClick,post,handleEdit,handleDelete}) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  console.log(pathName,'098876564343')

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'30px'}}>

  
        { session?.user.id &&<div   className='prompt_card '>
          <div className='flex justify-between items-center gap-5'>

          <div
              className='w-full flex-center'
              style={{alignItems:'center',display:"flex"}}
              // onClick={handleProfileClick}
             >
              <Image 
              src={session?.user?.image}
              alt='user_image'
              width={40}
              height={40}
              style={{borderRadius:'10px'}} />
              <div className='flex flex-col ' style={{marginLeft:'10px'}} >
                <h3 className='font-satoshi font-semibold text-gray-900'>{post?.creator?.username}</h3>
                <p className='font-inter text-sm text-gray-500'>
                {post?.prompt.substring(1,40)}.....
                </p>
                <p className='font-inter text-sm blue_gradient cursor-pointer'
                onClick={()=>handleTagClick && handleTagClick(post.tag)}>
                  {post?.tag}

                </p>
              </div>
              <div>
                <button style={{background:'gray',height:'30px',width:'50px',borderRadius:'5px',color:'white',marginLeft:'10px'}} onClick={()=>navigator.clipboard.writeText(`${post?.prompt}`)}>
                copy
                </button>
              </div>
            </div>
          </div>

         {session.user.id === post.creator._id && pathName === "/profile" && <div style={{display:'flex',justifyContent:'center',gap:'2',marginTop:'4px'}}>
              <button style={{background:'green',height:'30px',width:'70px',borderRadius:'5px',color:'white',marginLeft:'10px'}} 
              onClick={()=>handleEdit()}>
                    Edit
              </button>
              <button style={{background:'red',height:'30px',width:'70px',borderRadius:'5px',color:'white',marginLeft:'10px'}} 
              onClick={()=>handleDelete()}>
                    Delete
              </button>
            </div>}

        </div>}
    </div>
  )
}

export default PromptCrad