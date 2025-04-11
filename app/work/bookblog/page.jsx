import React from "react";
import Image from "next/image";
import Flippo from "../../../public/perndatabaserelationship.png";
import Database from "../../../public/perndatabase.png";
import NodeExpress from "../../../public/nodeexpress1.png";
import NodeExpress2 from "../../../public/nodeexpress2.png";
import Restful from "../../../public/restfulapi.png";
import Mockup from "../../../public/booknotesmockup.svg"
import Restful2 from "../../../public/resfulapi2.png"
import Card from '../../components/Card';
import Carousel from "@/app/components/Carousel";
import repsonsive from '../../../public/book notes.png'
import Video from '../../components/Video';
import  infoData  from "../../components/datai";
import ProjectIntro from '../../components/ProjectIntro'
import Responsive from "@/app/components/Responsive";
import ImageZoom from "@/app/components/ImageZoom";
import booknote from "../../../public/Group 3.svg";

const BookBlog = () => {
 
    const intialwireArray = infoData.bookInitial;
    const middlewireArray = infoData.bookMiddle;
    const finalwireArray = infoData.bookFinal
    
    
    return (
        <div className="tw-py-20">
            <ProjectIntro projectname='Book Blog' description='This is a full-stack application built with the PERN stack that empowers users to discover, review, and note their favorite books. Leveraging external data from the Open Library API, the application fetches dynamic book information—cover images, ratings, and more—to create a rich, interactive experience.' srcname={Mockup} />
            <div className="tw-bg-yellow tw-mt-28 tw-py-20">
                <div className="tw-container tw-mx-auto tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="md:tw-w-1/2">
                        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-5xl  tw-text-black tw-font-boldonse md:tw-leading-[1.5]">And Their was a Great PERN!</h3>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-black"/> </div>
                        <div>
                            <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-3xl tw-text-black ">Harnessing the power of the PERN stack, this project is a testament to modern web development. By integrating PostgreSQL, Express, React, and Node.js, the application not only manages robust data interactions but also delivers a seamless, user-friendly experience. This section celebrates the strength and synergy of these technologies in building a dynamic book discovery platform.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 ">
                <div className="tw-bg-bluegreen tw-text-white tw-text-base tw-p-5">
                    <Card  title="P" text="PostgreSQL: A reliable and powerful relational database that securely stores book entries and user-generated notes, ensuring data integrity and smooth performance."/>
                </div>
                <div className="tw-bg-moreblue tw-text-white tw-text-base tw-p-5">
                    <Card  title="E" text="Express: A lightweight, flexible web framework that simplifies our routing and middleware management, making it easy to create scalable, RESTful endpoints."/>
                </div>
                <div className="tw-bg-yellow tw-text-base tw-p-5">
                    <Card  title="R" text="React: The heart of our interactive user interface, React provides dynamic rendering and state management, enabling a responsive and engaging browsing experience."/>
                </div>
                <div className="tw-bg-orange tw-text-white tw-text-base tw-p-5">
                    <Card  title="N" text="Node.js: An efficient runtime environment that drives our server-side logic, ensuring that all asynchronous operations and API interactions are handled seamlessly."/>
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-my-5">
                <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="tw-py-10">
                        <h3 className="tw-text-3xl md:tw-text-5xl tw-text-bluegreen tw-font-boldonse">Postgres</h3>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                        <div>
                            <p>PostgreSQL serves as the backbone of our data storage. It efficiently manages the book entries and accompanying user notes, offering robust querying capabilities and scalability. Its reliability and performance are critical in supporting the dynamic nature of the application.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className="tw-w-full tw-flex tw-flex-col tw-gap-3  tw-mx-auto ">
                        <div>
                            <ImageZoom src={Flippo}   alt="database relationship"/>
                        </div>
                        <br />
                        <ImageZoom src={Database}  alt="data being sent to the database "/>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 ">
                <div className=" tw-bg-orange  lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="tw-py-10">
                        <h1 className=" tw-leading-10 tw-text-3xl md:tw-text-5xl tw-text-white tw-font-boldonse md:tw-leading-[1.5]  lg:tw-leading-[1.5]">Express and NodeJS</h1>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                        <div>
                            <p className="md:tw-text-base  tw-text-white">Express and Node.js work in tandem to power the server-side operations of Book Blog. Express simplifies the creation of RESTful APIs and streamlines the handling of HTTP requests, while Node.js provides a non-blocking, event-driven architecture that handles multiple concurrent operations with ease, ensuring smooth and reliable performance.</p>
                        </div>
                    </div>
                </div>
                <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className=" tw-flex tw-flex-col tw-gap-3 tw-mx-auto ">
                        <ImageZoom src={NodeExpress}/>
                        <ImageZoom src={NodeExpress2}/>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-mt-2 tw-mx-auto tw-flex tw-flex-col md:tw-flex-row-reverse tw-gap-2 ">
                <div className=" md:tw-w-1/2 lg:tw-w-8/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="tw-py-10 md:tw-py-0">
                        <h3 className="tw-text-2xl md:tw-text-4xl tw-text-orange tw-font-boldonse">RestFul API</h3>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                        <div>
                            <p className="md:tw-text-base  tw-text-black ">The RESTful API is the connective tissue of the application, enabling seamless communication between the frontend and backend. It supports all CRUD operations—from fetching book data and user notes to updating or deleting entries. This API not only ensures efficient data handling but also integrates external data from the Open Library API, enriching the overall user experience.</p>
                        </div>
                    </div>
                </div>
                <div className="tw-relative md:tw-w-1/2 lg:tw-w-4/12   tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className=" tw-flex tw-flex-col tw-gap-3 tw-mx-auto tw-z-40">
                        <ImageZoom src={Restful} className="tw-z-50 tw--mt-10 md:tw-mt-0 tw-mx-auto" alt="Project name" />
                        <ImageZoom src={Restful2} className="tw-z-50 tw--mt-10 md:tw-mt-0 tw-mx-auto" alt="Project name" />
                    </div>
                </div>
            </div>
            <div className="tw-container tw-py-10 tw-mx-auto tw-p-5">
                <h3 className="tw-text-3xl md:tw-text-5xl tw-text-bluegreen tw-font-boldonse">Overview of the process</h3>
                <div className="tw-w-48"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                <div className="tw-w-full tw-p-4">
                    <ImageZoom src={booknote} />
                </div>
            </div>
            <div className="tw-container  tw-mx-auto">
                <div className="tw-flex tw-flex-col lg:tw-flex-row">
                    <div className="tw-flex tw-flex-col tw-justify-center  lg:tw-w-4/12 tw-p-6 tw-py-14 md:tw-p-5">
                        <h3 className="tw-text-3xl md:tw-text-4xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]  lg:tw-leading-[1.5]">Initial Wireframing</h3>
                        <p >This early stage focused on outlining the basic structure and user flows of the application. Early sketches and low-fidelity prototypes were created to visualize the core functionalities and to establish a solid foundation for further design iterations.</p>
                    </div>
                    <div className='lg:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides = {intialwireArray}/>
                    </div>
                </div>
                <div className="tw-flex tw-flex-col lg:tw-flex-row-reverse  md:tw-mt-0">
                    <div className="tw-flex tw-flex-col tw-justify-center   lg:tw-w-4/12   tw-p-6 tw-py-14 md:tw-p-3">
                        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-4xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5] lg:tw-leading-[1.5]">Refined Wireframing</h3>
                        <p>This early stage focused on outlining the basic structure and user flows of the application. Early sketches and low-fidelity prototypes were created to visualize the core functionalities and to establish a solid foundation for further design iterations.</p>
                    </div>
                    <div className='lg:tw-w-8/12 tw-my-auto  '>
                        <Carousel wireframeslides = {middlewireArray}/>
                    </div>
                </div>
                <div className="tw-flex tw-flex-col lg:tw-flex-row md:tw-mt-0">
                    <div className="tw-flex tw-flex-col tw-justify-center  lg:tw-w-4/12 tw-p-6  md:tw-p-3">
                        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-4xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]  lg:tw-leading-[1.5]">Final Wireframing</h3>
                        <p>In the final phase, all feedback and insights were incorporated to create a cohesive, high-fidelity design blueprint. The final wireframes reflect a polished interface where functionality and aesthetics merge, setting the stage for a seamless transition to the final development phase.</p>
                    </div>
                    <div className='lg:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides={finalwireArray}/>
                    </div>
                </div>
            </div>
            <div className="tw-container  md:tw-py-0 tw-p-6  md:tw-p-3 tw-mx-auto">
                <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse">Lessons Learned & Improvements:</h3>
                <div className="md:tw-w-2/3">
                <br />
                    <li>I can write each endpoint inside of an api folder instead of creating a separate server folder. That way I can write the same backend logic within that endpoint. I thought I needed a separate server to run the endpoints but I learned you can do the same thing in Express using Nextjs. Thus simplifying the architecture. This was my first rodeo, using Nextjs on an project.</li>
                    <br />
                    <li>A challenge when dealing with the Open Library API is coming up with a way to handle the json body so that it would not break the code. When reading the documentation, you get a glimspe of the kind of payload you can expect to get. But it does not always appear that way. </li>
                </div>
            </div>
            <Responsive repsonsive={repsonsive} />
            <div className="tw-container tw-mx-auto tw-h-auto ">
                <div className="tw-m-auto tw-h-full ">
                   <Video srclink='../video/booknotesfinalVID.mp4' /> 
                </div>
            </div>
        </div>
    )
}

export default BookBlog;