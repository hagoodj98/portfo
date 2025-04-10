import React from 'react'

const SmallCard = (props) => {
  return (
    <div>
        <div className='bg-orange w-5/6 text-white rounded-lg p-5'>
            <h4>{props.subtitle}</h4>
            <p>{props.smallcardtext}</p>
        </div>
    </div>
  )
}
export default SmallCard