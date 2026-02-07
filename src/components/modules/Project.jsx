import React from 'react'

function Project({ data: { title, subtitle, description, imgURL, link, github } }) {
  return (
    <div className='bg-white dark:bg-slate-700 shadow-none border-y sm:border-x border-border shadow-gray-300 sm:rounded-2xl w-full flex flex-col justify-between p-4'>
      <div>
        <img src={imgURL} alt={title} className='h-52 m-auto' />
        <div className='flex items-baseline gap-1 mt-4 mb-3'>
          <h4 className='text-xl font-semibold'>{title}</h4>
          <h5 className='text-gray-700 dark:text-gray-300 text-sm'>{subtitle}</h5>
        </div>
        <p>{description}</p>
      </div>
      <div className='flex gap-2 pt-3 mt-4 border-t border-border'>
        <a
          href={link}
          target="_blank"
          className="
    py-2 text-center w-full font-semibold
    rounded-lg
    border border-primary/10 dark:border-primary/20
    text-primary dark:text-[#d2dfff]
    bg-primary-soft dark:bg-primary/60
    hover:bg-primary/30 dark:hover:bg-primary/80
    active:scale-95
    transition-all duration-300
    block
  "
        >Live Demo</a>

        {github &&
          <a
            href={github}
            target="_blank"
            className="
    py-2 text-center w-full font-medium
    rounded-lg
    border border-border dark:border-slate-600/90
    text-foreground
    bg-transparent
    hover:bg-slate-100 dark:hover:bg-slate-800/20
    active:scale-95
    transition-all duration-300
    block
  "
          >View Source</a>
        }
      </div>
    </div>
  )
}

export default Project