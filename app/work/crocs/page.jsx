import React from "react";
import Carousel from "@/app/components/Carousel";
import  infoData  from "../../components/datai";
import Image from "next/image";
import Mockup from "../../../public/crocsmockuplap.svg"
import Flippo from "../../../public/Group 34.png";
import repsonsive from '../../../public/crocsmockup.svg';
import Video from '../../components/Video';
import persona from '../../../public/persona.png'
import personatwo from '../../../public/persona2.png'
import personathree from '../../../public/persona3.png'
import ProjectIntro from '../../components/ProjectIntro'
import Responsive from "@/app/components/Responsive";
import ImageZoom from "@/app/components/ImageZoom";
import Personas from "@/app/components/Personas";


export const metadata = {
    title: "The Object",
  };



 function Crocs () {
    const intialwireArray = infoData.initialCroc;
    const middlewireArray = infoData.middleCroc;
    const finalwireArray = infoData.finalCroc;

    console.log(middlewireArray);
    return (
        <div className="tw-py-20">
            <ProjectIntro projectname='The Object' description='The objective was to choose an object that people care about. Given my background in child care, alot of kids and teens wore these shoes. So I wanted to create a simple website just for them.' srcname={Mockup} />
            <Personas persona={persona} personatwo={personatwo} personathree={personathree} />
            <div className="tw-container tw-mx-auto tw-my-20">
                <div className=" tw-border-bluegreen tw-border-2 tw-flex tw-flex-col lg:tw-flex-row">
                    <div className="tw-flex tw-flex-col tw-justify-center lg:tw-w-4/12  tw-p-6 tw-py-14 md:tw-p-3">
                        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-4xl  tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5] ">Initial Wireframing</h3>
                        <p>At the outset, I began with low-fidelity sketches to outline the overall layout and key content areas. This phase was all about brainstorming different structures and visual arrangements to capture the essence of Crocs. The initial wireframes helped define basic navigation flows and the placement of critical elements like the header, product showcases, and call-to-action buttons.
                        </p>
                    </div>
                    <div className='lg:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides = {intialwireArray}/>
                    </div>
                </div>
                <div className="tw-border-bluegreen tw-border-2 tw-flex tw-flex-col lg:tw-flex-row-reverse  tw-my-5">
                    <div className="tw-flex tw-flex-col tw-justify-center lg:tw-w-4/12 tw-p-6 tw-py-14 md:tw-p-3">
                        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-4xl  tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]">Refined Wireframing</h3>
                        <p>This stage involved enhancing the visual hierarchy and ensuring intuitive navigation. Adjustments were made to balance brand identity with functionality—ensuring that vibrant imagery and interactive components worked harmoniously to guide the user journey effectively.
                        </p>
                    </div>
                    <div className='lg:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides = {middlewireArray}/>
                    </div>
                </div>
                <div className="tw-border-bluegreen tw-border-2 tw-flex tw-flex-col lg:tw-flex-row md:tw-mt-0  ">
                    <div className="tw-flex tw-flex-col tw-justify-center lg:tw-w-4/12 tw-p-6 tw-py-14 md:tw-p-3">
                        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-4xl  tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]">Final Wireframing</h3>
                        <p>Every component was designed—from typography and spacing to interactive elements and image placements.</p>
                    </div>
                    <div className='lg:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides = {finalwireArray}/>
                    </div>
                </div>
            </div>
            <Responsive repsonsive={repsonsive} />
            
            <div className="tw-container tw-mx-auto tw-h-auto">
                <div className="tw-mx-auto lg:tw-w-2/3   tw-h-full ">
                    <Video srclink='../video/crocsfinalVID.mp4'/>
                </div>
            </div>
        </div>
    )
}

export default Crocs;