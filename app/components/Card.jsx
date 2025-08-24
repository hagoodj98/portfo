import React from 'react'

const Card = (props) => {
  return (
    <>
      <h3 className='tw-leading-10 tw-text-xl md:tw-text-2xl tw-font-boldonse  md:tw-leading-[1.5]'>{props.title}</h3>
      <p>{props.text}</p>
    </>
  )
}

export default Card
