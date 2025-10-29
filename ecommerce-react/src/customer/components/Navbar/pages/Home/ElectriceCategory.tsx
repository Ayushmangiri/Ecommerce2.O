import React from 'react'
import ElectriceCategoryCard from './ElectriceCategoryCard';
const ElectriceCategory = () => {
  return (
    <div className='flex flex-wrap justify-between lg:gap-10 px-5 lg:px-20'>
        {[1,1,1,1,1,1,1].map((item,index)=><ElectriceCategoryCard key={index} />)}
     
    </div>  
  )
}

export default ElectriceCategory