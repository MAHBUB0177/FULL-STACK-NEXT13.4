'use client'
import React, { useCallback, useMemo } from 'react'
import { useState,useEffect } from 'react'
import PromptCrad from './PromptCrad'


const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCrad
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = ({data}) => {
  const[searchText,setSearchText]=useState()
  const[posts,setPosts]=useState([])
  console.log('first',posts)
  const handleSearchChange=()=>{
  }

  const fetchPosts = async () => {
    console.log('createprompt')
    const response = await fetch("/api/prompt");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
 


  return (
    <div>
       <section className='feed'>
        <form  className='relative w-full flex-center'>
          <input
          type='text'
           placeholder='Search for a tag or a username'
           value={searchText}
           onChange={handleSearchChange}
           required
           className='search_input peer'
          />
        </form>
        {/* <PromptCrad /> */}

        <PromptCardList 
        data={posts}
        handleTagClick={()=>{}} />
       </section>
    </div>
  )
}

export default Feed