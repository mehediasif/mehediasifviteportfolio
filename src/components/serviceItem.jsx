import React from 'react'

function ServiceItem({title, icon, description}) {
  return (
    <div className='flex flex-col items-center bg-slate-300 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 hover:translate-y-2 transform transition px-4 py-6 m-1 rounded-md'>
        <div className='w-32 h-32 rounded-full shadow-md mb-3 text-slate-800 dark:text-slate-200'>
            {icon}
        </div>
        <h1 className='font-semibold text-lg text-gray-700 dark:text-gray-300 mb-1'>{title}</h1>
        <p className='text-md text-gray-600 dark:text-gray-400 mt-2'>{description}</p>
    </div>
  )
}

export default ServiceItem