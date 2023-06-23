'use client'
import Profile from '@component/Profile'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import {produce} from "immer";

const MyProfile = () => {
    const [myPosts,setMyPosts]=useState([])
    const router = useRouter();
    const {data:session}=useSession()

    // const [inputlist,setInputlist]=useState([{fname:'',lname:''},])
    // console.log(inputlist,'0000000000000000000000')

    // const handelremove=(index)=>{
    //   console.log(index,'index')
    //   let data=[...inputlist]
    //   // let item=data.find((itm,indx)=>indx !== index)
    //   data.splice(index,1)
    //   setInputlist(data)
    // }

   
    
    const handleEdit=(post)=>{
      console.log('99999999988888',post)
      router.push(`/update-prompt?id=${post._id}`);

    }
    const handleDelete= async(post)=>{
      const hasConfirmed=confirm('are you sure you want to delete this post?')
      if(hasConfirmed){
        try{
          await  fetch (`/api/prompt/${post._id}`,{
            method:'DELETE'
          });
          
          const filteredPosts=myPosts.filter((p)=>p._id !== post._id)
          setMyPosts(filteredPosts)

        }
        catch(error){
          console.log(error)

        }
      }

    }

    
      useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/user/${session?.user?.id}/posts`);
            const data = await response.json();
            setMyPosts(data);
          };
          if(session?.user.id)  fetchPosts()
        
      }, [session?.user.id]);
    return (
    <div>
        <Profile
        name='my'
        desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
        data={myPosts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        />



        {/* <div>
        <div>
          {
            inputlist?.map((item,index)=>(
              <div style={{display:'flex',justifyContent:'space-between',gap:'4',marginTop:'10px'}}>
                <label for="fname">First name:</label>
                <input  type='text' name='fname'
                 onChange={(e) => {
                            setInputlist((ob) =>
                              produce(ob, (v) => {
                                v[index].fname = e.target.value;
                              })
                            );
                          }}
               
                          />


                <label for="fname">First name:</label>
               <input type='text'  name='lname'  style={{marginLeft:'10px'}}
                onChange={(e) => {
                  setInputlist((ob) =>
                    produce(ob, (v) => {
                      v[index].lname = e.target.value;
                    })
                  );
                }}
              
                />

               <button onClick={()=>{handelremove(index)}} style={{marginLeft:'10px'}}>remove</button>
                </div>
            ))
          }
        </div>
        <button onClick={()=>{
                setInputlist([...inputlist,{fname:'',lname:''}])
        }}>add more</button>
        </div> */}

     
    </div>
  )
}

export default MyProfile