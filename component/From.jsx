import Link from 'next/link'
import React from 'react'

const From = ({post,setPost,submitting,type,handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h5 className='head_text text-left'>
        <span className='blue_gradient'>{type} Post</span>
      </h5>
      <p className='desc text-left max-w-md'>
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>


      {/* //form submit */}
     <form
      onSubmit={handleSubmit}
      className='mt-20 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your AI Prompt
          </span>

          <textarea
            value={post?.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your post here'
            required
            className='form_textarea '
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Field of Prompt{" "}
            <span className='font-normal'>
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
          <input
            value={post?.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4' style={{marginTop:'10px'}}>
          <Link href='/' style={{background:'gray',height:'30px',width:'150px',borderRadius:'5px',color:'white',justifyContent:'center' ,display:'flex'}}>
            Cancel
          </Link>

          <button type='submit' disabled={submitting}  style={{background:'red',height:'30px',width:'150px',borderRadius:'5px',color:'white',marginLeft:'10px'}}>
          {submitting? `${type}ing..`: type}
          </button>

        </div>


     </form>
      </section>
  )
}

export default From