import React from 'react'

function Project({ data: { title, subtitle, description, imgURL, link, github } }) {
  return (
    <div className='bg-white shadow-none border-y sm:border-x border-border shadow-gray-300 sm:rounded-2xl w-full flex flex-col justify-between p-4'>
      <div>
        <img src={imgURL} alt={title} className='h-52 m-auto' />
        <div className='flex items-baseline gap-1 mt-4 mb-3'>
          <h4 className='text-xl font-semibold'>{title}</h4>
          <h5 className='text-gray-700 text-sm'>{subtitle}</h5>
        </div>
        <p>{description}</p>
      </div>
      <div className='flex gap-2 pt-3 mt-4 border-t border-border'>
        <a href={link} target="_blank" className='py-2 text-center w-full bg-white font-semibold border-2 active:scale-95 hover:bg-blue-100 transition-all duration-300 drop-shadow-primary block text-primary border-primary rounded-lg'>Live Demo</a>
        {github &&
          <a href={github} target="_blank" className='py-2 text-center w-full items-center border-2 border-primary-soft active:scale-95 hover:border-blue-100 bg-primary-soft hover:bg-blue-100 font-medium text-primary transition-all duration-300 block rounded-lg'>View Source</a>
        }
      </div>
    </div>
  )
}

export default Project