import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='py-10 gap-10 px-21 flex justify-between h-[90vh] '>
        <LeftContent />
        <RightContent users={props.users}/>
        
    </div>
  )
}

export default Page1Content