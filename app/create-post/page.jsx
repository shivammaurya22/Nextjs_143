import React from 'react'

const CreatePost = () => {
  return (
    <div className='mt-6 ml-72 w-1/2 bg-[#fff] shadow-lg border border-purple-700 rounded min-h-screen'>
      <form className='m-4'>
      <h2 className='font-bold text-4xl mb-4 text-center text-indigo-600'>Create Post</h2>
        <label className='text-2xl'>Title</label><br />
        <input className='w-full mb-4 text-2xl p-2 text-gray-700 bg-white border border-purple-700 rounded-md shadow-sm outline-none transition duration-200 ease-in-out 
           focus:border-purple-700 hover:border-purple-900' type='text' placeholder='Enter the Title...' />
           <label className='text-2xl'>Content</label><br />
        <textarea className='w-full mb-4 text-2xl h-56 p-2 text-gray-700 bg-white border border-purple-700 rounded-md shadow-sm outline-none transition duration-200 ease-in-out 
           focus:border-purple-700 hover:border-purple-900' type='text' placeholder='Enter Your Content...'></textarea>
           <label className='text-2xl'>Tags(comma seperated)</label><br />
        <input className='w-full text-2xl mb-4 p-2 text-gray-700 bg-white border border-purple-700 rounded-md shadow-sm outline-none transition duration-200 ease-in-out 
           focus:border-purple-700 hover:border-purple-900' type='text' placeholder='Nextjs, Reactjs, Python....' />
           <button className='bg-purple-700 text-xl hover:bg-purple-900 text-white font-bold py-3 w-full rounded mt-4'>Create Post</button>
      </form>
    </div>
  )
}

export default CreatePost;
