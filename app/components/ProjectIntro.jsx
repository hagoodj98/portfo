import React from 'react'
import Image from 'next/image'
import yellowlines from '../../public/Group 33.svg'
import ImageZoom from "@/app/components/ImageZoom";

const ProjectIntro = (props) => {
  return (
    <div className="tw-relative">
                <div className="tw-relative tw-container tw-mx-auto tw-flex tw-flex-col md:tw-flex-row tw-gap-2 md:tw-h-[800px]">
                    <div className="tw-border-2 md:tw-w-1/2 tw-flex tw-flex-col tw-justify-center tw-p-5 ">
                        <div className="tw-p-5 md:tw-p-0">
                            <h1 className="tw-leading-10 tw-text-4xl md:tw-leading-[1.5]  lg:tw-leading-[1.5] lg:tw-text-5xl tw-font-boldonse tw-text-bluegreen">{props.projectname}</h1>
                            <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                            <div>
                                <p className="md:tw-text-base lg:tw-text-xl  tw-text-black ">{props.description}</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="tw-relative md:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                        <div>
                            <ImageZoom src={props.srcname} className="  tw-mx-auto" alt="Project name" />
                        </div>
                    </div>
                    <Image className="tw-absolute tw-hidden sm:tw-block sm:-tw-bottom-44 tw-left-9  tw-w-14 lg:tw-w-16" src={yellowlines} />

                </div>
                <div className="tw-absolute -tw-z-20 tw-h-60 sm:tw-h-96  md:tw-w-1/2 tw-inset-x-0 tw-bottom-0 md:tw-top-0 tw-ml-auto  md:tw-h-[800px] tw-bg-bluegreen">
                </div>
    </div>
  )
}

export default ProjectIntro
