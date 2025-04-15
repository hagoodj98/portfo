import React from "react";
import  infoData  from "../../components/datai";
import Video from '../../components/Video';
import Character from '../../../public/character.png'
import Image from "next/image";
import him from "../../../public/flippo.svg";
import Storyboards from '../../../public/flippostoryboards.png'
import lightbulb from '../../../public/HUZwDRn.png'
import ImageZoom from "@/app/components/ImageZoom";


export const metadata = {
    title: "Flippo the Character", 
  };

 function Flippo () {
    const storyBoarding = infoData.storyBoarding;
    return (
        <div className="tw-py-20">
            <div className=" tw-relative">
                <div className="tw-container tw-mx-auto tw-flex tw-flex-col md:tw-flex-row-reverse tw-gap-2 md:tw-h-[800px]">
                    <div className="tw-border-2 md:tw-w-1/2 tw-flex tw-flex-col tw-justify-center tw-p-5">
                        <div className="">
                            <h1 className="tw-leading-10 tw-text-3xl lg:tw-text-4xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]  lg:tw-leading-[1.5]  ">Meet Flippo, The Body Builder</h1>
                            <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                            <div>
                                <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-3xl tw-text-black ">Storytelling is important, especially sticking with a concept. I got the opportunity to create a character. I create storyboards to tell a joke. A joke I mention below.</p>
                            </div>
                        </div>
                    </div>
                    <div className="tw-relative md:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                        <div className="">
                            <ImageZoom src={him} className="tw--mt-10 md:tw-mt-0 tw-mx-auto" alt="Flippo himself" />
                        </div>
                    </div>
                </div>
                <div className="tw-absolute  -tw-z-20 tw-h-96  md:tw-w-1/2 tw-inset-x-0 tw-bottom-0 md:tw-top-0 tw-mr-auto  md:tw-h-[800px] tw-bg-bluegreen">
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-p-5">
                <div className=" tw-my-10">
                    <h2 className=" tw-leading-10 tw-text-end tw-text-3xl md:tw-text-5xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5] tw-mb-5">.....A character in the making</h2>
                    <ImageZoom src={Character} alt="Flippo from all angles"/>
                </div>
                <div className=" tw-mx-auto ">
                    <div className=' tw-my-auto '>
                        <h2 className="tw-text-2xl md:tw-text-4xl tw-text-bluegreen tw-mb-5 tw-font-boldonse">StoryBoarding.....</h2>
                        <ImageZoom src={Storyboards} alt="storyboards"/>
                    </div>
                </div>
                <div className=" tw-mx-auto tw-py-16 ">
                    <h3 className="tw-leading-10 tw-text-center tw-text-moreblue tw-font-boldonse md:tw-leading-[1.5]">"Hello World I am Flippo."</h3>
                    <div className="tw-w-28 tw-mx-auto">
                        <Image src={lightbulb} alt="lightbulb vector" />
                    </div>
                    <p className="tw-text-center"><span className="tw-font-semibold">Interesting fact:</span> Flippo parties at least 12 times a week and works out about 15 hours everyday of the week.</p>
                </div>
                <div className="tw-container tw-mx-auto tw-h-full">
                    <div className="tw-mx-auto lg:tw-w-2/3 tw-border-2 tw-h-full ">
                        <Video srclink='../video/fba1-376a-48c9-8b1a-c3ececf9d855.mp4' />
                        <div>
                            <p className="tw-p-5">The Joke goes like this: You are sleep....And so you wake up because you hear a sound coming from your closet. You take your cat and tie it around using a rope and throw it in the closet. You pull the rope and the cat is missing. You come to conclude that "Yep, there's something in there. </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Flippo;