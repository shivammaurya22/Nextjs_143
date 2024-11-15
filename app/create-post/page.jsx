import React from 'react'

const CreatePost = () => {
  return (
    <div className='mt-6 mx-auto sm:w-3/4 md:w-2/3 lg:w-1/2 bg-white shadow-lg border border-purple-700 rounded p-4 sm:p-8 min-h-screen'>
      <form className='m-4'>
        <h2 className='font-bold text-3xl sm:text-4xl mb-6 text-center text-indigo-600'>Create Post</h2>
        <label className='text-lg sm:text-2xl'>Title</label>
        <input 
          className='w-full mb-4 text-lg sm:text-2xl p-2 text-gray-700 bg-white border border-purple-700 rounded-md shadow-sm outline-none transition duration-200 ease-in-out 
          focus:border-purple-700 hover:border-purple-900' 
          type='text' 
          placeholder='Enter the Title...'
        />
        
        <label className='text-lg sm:text-2xl'>Content</label>
        <textarea 
          className='w-full mb-4 text-lg sm:text-2xl h-40 sm:h-56 p-2 text-gray-700 bg-white border border-purple-700 rounded-md shadow-sm outline-none transition duration-200 ease-in-out 
          focus:border-purple-700 hover:border-purple-900' 
          placeholder='Enter Your Content...'
        ></textarea>
        
        <label className='text-lg sm:text-2xl'>Tags (comma separated)</label>
        <input 
          className='w-full text-lg sm:text-2xl mb-4 p-2 text-gray-700 bg-white border border-purple-700 rounded-md shadow-sm outline-none transition duration-200 ease-in-out 
          focus:border-purple-700 hover:border-purple-900' 
          type='text' 
          placeholder='Nextjs, Reactjs, Python....'
        />
        
        <button 
          className='bg-purple-700 hover:bg-purple-900 text-white font-bold text-lg sm:text-xl py-3 w-full rounded mt-4 transition duration-200 ease-in-out'>
          Create Post
        </button>
      </form>
    </div>
  )
}

export default CreatePost;
