import Head from 'next/head'
import Image from 'next/image'
import {MdSearch} from 'react-icons/md'
import { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import styles from '../styles/Home.module.css'
import Checkbox from '../components/Checkbox'

export default function Home() {
  const [isLoading,setLoading] = useState(true);
  useEffect(() => {
        setTimeout(() => {
       setLoading(false);
        },2000)
  },[])
  return (
   <div className='bg-[#272325] min-h-screen flex flex-col'>
    <Head>
      <title>Turbo Barnacle ~ The torrent World</title>
    </Head>
        <Loader isLoading={isLoading}/>
        <div className='flex items-center flex-col mt-[10%]  min-h-[40vh] w-full'>
          <h1 className='text-4xl text-center w-11/12 m-6 font-bold text-white'>Welcome to <strong className='text-blue-900'>Turbo Barnacle</strong> , The Search Engine!</h1>
          <div className='w-5/12 flex justify-center items-center m-6 border rounded-md'>
          <input className='w-11/12 h-12 text-white text-xl bg-inherit  indent-4 focus:outline-blue-600' placeholder='Search , The torrent world...'></input>
          <MdSearch className='text-5xl text-white w-1/12 border-l cursor-pointer'/>
          </div>
        <div className='flex items-center justify-center m-auto w-10/12'>
          <Checkbox name='Movies'/>
          <Checkbox name='Video'/>
          <Checkbox name='Games'/>
          <Checkbox name='Anime'/>
          <Checkbox name='Other'/>
        </div>
        </div>
   </div>
  )
}
