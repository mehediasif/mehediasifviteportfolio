import React from 'react'
import SectionTitle from './sectiontitle'
import services from '../data/services'
import ServiceItem from './serviceItem'
function KnowledgeDomain() {
  return (
    <div className='mx-auto container'>
      <div className='py-12 px-4 sm:max-w-7xl lg:max-w-5xl bg-slate-200 dark:bg-slate-700'>
      <SectionTitle>Knowledge Domain</SectionTitle>
      <div className='md:grid md:grid-cols-3 lg:max-w-7xl sm:max-w-5xl sm:flex sm:flex-col shadow-md rounded-md'>
        {services.map(service => (
          <ServiceItem
            key={service.title}
            title={service.title}
            icon={service.icon}
            description={service.description}
          >
          </ServiceItem>
        ))}
      </div>
      </div>
    </div>
  )
}

export default KnowledgeDomain