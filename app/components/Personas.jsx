import React from 'react'
import Image from 'next/image'
import ImageZoom from "@/app/components/ImageZoom";

const Personas = (props) => {
  return (
    <div className="tw-relative tw-container tw-mx-auto  sm:tw-my-32">
                <div className="tw-grid  tw-grid-cols-1 gap-3 md:tw-grid-cols-2 tw-justify-items-center">
                    <div className="tw-py-10 md:tw-py-0 tw-flex tw-items-center">
                        <h4 className="tw-text-4xl md:tw-text-5xl tw-text-bluegreen">Personas</h4>
                    </div>
                    <ImageZoom src={props.persona} className=" " alt="Project name" />
                    <ImageZoom src={props.personatwo} className="" alt="Project name" />
                    <ImageZoom src={props.personathree} className="" alt="Project name" />
                </div>
    </div>
  )
}

export default Personas
