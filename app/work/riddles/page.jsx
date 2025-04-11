import React from "react";
import Image from "next/image";
import Flippo from "../../../public/Group 34.png";
import background from '../../../public/Vector 12 (4).svg';
import me from '../../../public/male-placeholder-image.jpeg'
import Button from "../../components/Button";
import Carousel from "@/app/components/Carousel";
import Mockup from "../../../public/riddlemockup.svg"
import  infoData  from "../../components/datai";
import Video from '../../components/Video';
import ProjectIntro from '../../components/ProjectIntro'
import repsonsive from '../../../public/public api.png';
import ImageZoom from "@/app/components/ImageZoom";
import Responsive from "@/app/components/Responsive";

 function Riddles () {
    const intialwireArray = infoData.initialRiddle;
    const finalwireArray = infoData.finalRiddle;

    return (
        <div className="tw-py-20">
            <ProjectIntro projectname='Riddles' description='“Riddles, Riddles, Riddles” is a fun and interactive capstone project that leverages a public API to fetch and display random riddles. Built with Express, Axios, and EJS templating, the application delivers a dynamic user experience where visitors can reveal a riddle, view hints, and refresh the content for a new challenge. The project integrates Bootstrap for responsive design and jQuery for client-side interactions, ensuring that the interface is both engaging and easy to navigate.' srcname={Mockup} />

            <div className="tw-container tw-mx-auto md:tw-mt-44">
                <div className="  md:tw-my-5 ">
                    <div className=" tw-flex tw-flex-col lg:tw-flex-row   tw-mt-40 md:tw-mt-0">
                        <div className="tw-flex tw-flex-col tw-justify-center lg:tw-w-4/12  tw-p-6 tw-py-14 md:tw-p-3">
                            <h3 className="tw-leading-10 tw-text-3xl md:tw-text-4xl  tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]  lg:tw-leading-[1.5]">Initial Wireframing</h3>
                            <p>In the initial phase, low-fidelity sketches were created to establish the basic layout and functionality. The focus was on mapping out the central riddle display area, the “Reveal Me!” button, and the option to fetch a new riddle. These early wireframes helped define the user flow—from arriving on the page to interacting with the buttons—ensuring that the core experience was intuitive.</p>
                        </div>
                        <div className='lg:tw-w-8/12 tw-my-auto '>
                            <Carousel wireframeslides = {intialwireArray}/>
                        </div>
                    </div>
                </div>
                <div className="tw-flex tw-flex-col lg:tw-flex-row-reverse md:tw-mt-0">
                        <div className="tw-flex tw-flex-col tw-justify-center lg:tw-w-4/12 tw-p-6 tw-py-14 md:tw-p-3">
                            <h3 className="tw-leading-10 tw-text-3xl md:tw-text-4xl  tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]  lg:tw-leading-[1.5]">Final Wireframing</h3>
                            <p>The final phase produced high-fidelity wireframes that served as a detailed blueprint for the development stage. Every component—from the typography and color schemes to the interactive elements—was meticulously planned. The final wireframes ensured a cohesive and responsive design that not only meets the project’s functional requirements but also delivers a visually pleasing user experience across all devices.</p>
                        </div>
                        <div className='lg:tw-w-8/12 tw-my-auto '>
                            <Carousel wireframeslides={finalwireArray}/>
                        </div>
                </div>
            </div>
            <div>
                <Responsive repsonsive={repsonsive} />
            </div>
            <div className="tw-container tw-mx-auto tw-h-full ">
                <div className="tw-m-auto  md:tw-w-[800px] tw-border-2 tw-h-full ">
                    <Video srclink='../video/RiddlesVID.mp4'/>
                </div>
            </div>
        </div>
    )
}

export default Riddles;