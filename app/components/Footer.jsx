

import React from 'react'
import Button from '../components/Button'
import background from '../../public/Vector 16.svg'
import Link from 'next/link'

const footer = () => {
  const date = new Date();

  const year = date.getFullYear();



  return (
    <main>
      <div className="tw-container tw-mx-auto tw-flex tw-flex-col  tw-items-center">
        <div className='tw-flex tw-flex-col tw-items-center tw-p-4 sm:tw-p-16 tw-max-w-5xl'>
          <h2 className='tw-text-2xl md:tw-text-3xl lg:tw-text-5xl tw-text-bluegreen tw-font-boldonse tw-py-5'>Thanks for Visiting</h2>
          <p className='tw-text-base tw-text-center lg:tw-text-2xl '>If you want to contact me, please send me an email. Happy coding. Cheers!🥂</p>
          <div>
            <a href="mailto:west00brook@gmail.com"><Button text="Contact Me" /></a>
          </div>
        </div>
      </div>
      <div className='tw-bg-bluegreen'>
        <div className='tw-container tw-mx-auto tw-flex tw-justify-center '>
          <footer className='  tw-justify-center lg:tw-justify-between  tw-py-6  '>
            <p className='tw-text-white'>©  {year} Copyright by Jaiquez. All rights reversed</p>
            <hr />
          </footer>
        </div>
      </div>
     
     
    </main>
  )
}

export default footer
