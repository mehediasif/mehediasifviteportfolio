import React from 'react'

export default function SectionTitle({ children, id }) {
    return (
      <h3 id={id && id} className='lg:text-3xl sm:text-xl text-center font-base mb-6 sm:mb-8 lg:mb-4 font-semibold uppercase tracking-wide text-indigo-700 dark:text-sky-400'>
        {children}
      </h3>
    );
  };