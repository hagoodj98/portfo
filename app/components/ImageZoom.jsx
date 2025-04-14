'use client';

import React from 'react'
import Zoom from 'next-image-zoom';
import Image from 'next/image';
const imageZoom = (props) => {
  return (
    <div className='tw-group tw-relative tw-flex '>
        <Zoom src={props.src}  alt={props.alt} responsive="true" />
        <div className="tw-absolute  tw-flex  tw-border-2 tw-right-1 tw-h-[40px] tw-w-20 tw-inset-0 tw-m-auto tw-justify-center tw-items-center tw-bg-yellow  tw-transition-all tw-opacity-0 group-hover:tw-opacity-100 tw-z-10">
          <h3 className="tw-text-white tw-text-base">Zoom*</h3>
        </div>
    </div>
  )
}

export default imageZoom;
