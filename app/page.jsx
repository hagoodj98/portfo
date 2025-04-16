
import React from "react";
import Image from "next/image";
import me from '../public/IMG_1958.JPG'
import anotherme from '../public/Mask group.png'
import yellowlines from '../public/Group 33.svg'
import ImageZoom from "@/app/components/ImageZoom";


export const metadata = {
  title: "Home",
 
};

export default function Home() {
    return (
        <main>
            <div className="tw-mb-30">
              <div className="tw--z-40 tw-relative tw-w-full  tw-bg-gradient-to-b tw-h-80 tw-from-moreblue tw-to-bluegreen">
              </div>
              <div className="tw-container tw-mx-auto tw--mt-52">
                  <div className="tw-w-80 tw-mx-auto">
                    <ImageZoom src={me} alt="this is me"/>
                  </div>
                  <div className="tw-p-6 ">
                    <div className="tw-mx-auto md:tw-w-2/3 tw-flex tw-flex-col tw-items-center">
                      <h1 className=" tw-text-4xl lg:tw-text-6xl tw-text-center tw-text-bluegreen tw-mb-5"> <span className="tw-font-boldonse">My Portfilio</span></h1>
                      <p className=" tw-text-center md:tw-text-base md:tw-w-2/3">Hello! My name is Jaiquez Hagood and I am an web developer. I hope you enjoy exploring my recent work!😁</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="tw-relative tw-bg-gradient-to-t tw-from-moreblue tw-to-bluegreen  ">
              <div className="tw-container tw-mx-auto tw-relative tw-flex tw-flex-col-reverse lg:tw-flex-row  tw-p-10 md:tw-mt-[10px] md:tw-h-auto ">
                <div className=" tw-flex tw-flex-col tw-py-8 tw-justify-center md:tw-col-span-2 tw-w-full md:tw-w-3/4 md:tw-ml-20">
                  <h2 className="tw-text-center lg:tw-text-left tw-text-3xl md:tw-text-5xl tw-text-white tw-font-boldonse tw-mb-5">About Me  </h2>
                  <p className="tw-text-center lg:tw-text-left tw-text-white ">I am from Greenville, South Carolina and I graduated from Carolina High School in 2016 and have an assoicates degree from Greenville Technical College of 2018. I am a digital information design graduate from Winthrop University in 2021. I enjoy coding, producing music, and fishing.</p>
                </div>
                <div className=" tw-relative tw-w-64  lg:tw-w-fit tw-mx-auto">
                  <Image src={anotherme} alt="another photo of me"/>
                </div>
                <Image className="tw-absolute -tw-bottom-40 tw-left-9 md:tw-left-36 tw-w-14 lg:tw-w-16" src={yellowlines} alt="yellows lines"/>
              </div>
            </div>
            <div className="tw-container tw-mx-auto tw-mt-32">
              <div className="tw-grid sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-3 tw-w-full ">
                <div className="tw-order-first md:tw-order-none tw-flex tw-justify-center tw-items-center tw-my-auto">
                    <h2 className="tw-text-3xl md:tw-text-5xl tw-mx-auto tw-py-10 tw-text-bluegreen tw-font-boldonse">Works</h2>
                </div>
                <div className="tw-h-[290px] tw-group tw-relative tw-overflow-hidden tw-bg-[url('../public/booknotesmockup.svg')] tw-bg-no-repeat tw-bg-center tw-bg-cover">
                  <a href="/work/bookblog">
                        <div className="tw-absolute tw-flex tw-justify-center tw-items-center tw-bg-yellow tw-w-full tw-h-full tw-opacity-0 group-hover:tw-opacity-100">
                          <h5 className="tw-text-white tw-font-boldonse">BookBlog Project</h5>
                        </div>
                  </a>
                </div>
                <div className="tw-h-[290px] tw-group tw-relative tw-overflow-hidden  tw-bg-[url('../public/crocsmockuplap.svg')] tw-bg-no-repeat tw-bg-center  tw-bg-cover">
                  <a href="/work/crocs">
                      <div className="tw-absolute tw-flex tw-justify-center tw-items-center tw-bg-yellow tw-w-full tw-h-full tw-opacity-0 group-hover:tw-opacity-100">
                        <h5 className="tw-text-white tw-font-boldonse">The Object Project</h5>
                      </div>
                  </a>
                </div>
                <div className="tw-relative tw-overflow-hidden tw-h-[290px] tw-group tw-bg-[url('../public/riddlemockup.svg')] tw-bg-no-repeat tw-bg-center tw-bg-cover ">
                  <a href="/work/riddles">
                    <div className="tw-absolute tw-flex tw-justify-center tw-items-center tw-bg-yellow tw-w-full tw-h-full tw-opacity-0 group-hover:tw-opacity-100">
                      <h5 className="tw-text-white tw-font-boldonse">Riddles Project</h5>
                    </div>
                  </a>
                </div>
                <div className=" tw-h-[290px] tw-group tw-relative tw-overflow-hidden tw-group tw-bg-[url('../public/l4dmockup.svg')] tw-bg-no-repeat tw-bg-center tw-bg-cover">
                  <a href="/work/l4d">
                      <div className="tw-absolute tw-flex tw-justify-center tw-items-center tw-bg-yellow tw-w-full tw-h-full tw-opacity-0 group-hover:tw-opacity-100">
                        <h5 className="tw-text-white tw-font-boldonse"> GameSite Project</h5>
                      </div>
                  </a>
                </div>
                <div className="tw-h-[290px] tw-group tw-relative tw-overflow-hidden tw-group tw-bg-[url('../public/flippo.svg')] tw-bg-no-repeat tw-bg-center tw-bg-cover">
                  <a href="/work/flippo">
                      <div className="tw-absolute tw-flex tw-justify-center tw-items-center tw-bg-yellow tw-w-full tw-h-full tw-opacity-0 group-hover:tw-opacity-100">
                        <h5 className="tw-text-white tw-font-boldonse">Animate Project</h5>
                      </div>
                  </a>
                </div>
                <div className=" tw-h-[290px] tw-group tw-relative tw-overflow-hidden tw-group tw-bg-[url('../public/VinylRecordMockup.jpg')] tw-bg-no-repeat tw-bg-center tw-bg-cover">
                  <a href="/music">
                      <div className="tw-absolute tw-flex tw-justify-center tw-items-center tw-bg-yellow tw-w-full tw-h-full tw-opacity-0 group-hover:tw-opacity-100">
                        <h5 className="tw-text-white tw-font-boldonse">Music Project</h5>
                      </div>
                  </a>
                </div>
               
                <div></div>
                <div></div>
              </div>
              
            </div>
            <div className="tw-w-1/2  tw-ml-auto tw--mt-96 tw-h-96 tw-bg-gradient-to-b tw-from-moreblue tw-to-bluegreen"></div>
            <div className="  tw-overflow-hidden">
              <div className="  tw-whitespace-nowrap tw-p-3">
                <p className="tw-animate-leftright tw-text-bluegreen tw-text-2xl md:tw-text-3xl lg:tw-text-9xl tw-opacity-25">I Love Design I Love Code I Love Food I Love Video Games I Love Music I Love Design I Love Fishing I Love Food I Love Family I Love It All I Love Design I Love Fishing I Love Food I Love Music I Love Design I Love Fishing I Love Food I Love Family I Love It All</p>
                <p className="tw-text-bluegreen tw-text-2xl md:tw-text-3xl lg:tw-text-9xl tw-animate-rightleft tw-opacity-25">I Love Design I Love Fishing I Love Food  I Love Video Games I Love Music I Love Design I Love Fishing I Love Food I Love Family I Love It All I Love Design I Love Fishing I Love Food I Love Music I Love Design I Love Family I Love It All I Love Food </p>
            </div>
          </div>
              
        </main>
    );
  }