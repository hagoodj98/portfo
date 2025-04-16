import React from "react";
import Flippo from "../../../public/perndatabaserelationship.svg";
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


export const metadata = {
    title: "Book Blog Project",
  };


const BookBlog = () => {
 
    const intialwireArray = infoData.bookInitial;
    const middlewireArray = infoData.bookMiddle;
    const finalwireArray = infoData.bookFinal
    
    
    return (
        <div className="tw-py-20">
            <ProjectIntro projectname='Book Blog' description='This is a full-stack application built with the PERN stack that allows users to discover, review, and take notes on their favorite books. Getting the data from the Open Library API, the application fetches dynamic book information such as cover images, ratings, and more.' srcname={Mockup} />
            <div className="tw-bg-yellow tw-mt-28 tw-py-20">
                <div className="tw-container tw-mx-auto tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="md:tw-w-1/2">
                        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-5xl  tw-text-black tw-font-boldonse md:tw-leading-[1.5]">And Their was a Great PERN!</h3>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-black"/> </div>
                        <div>
                            <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-3xl tw-text-black ">While grasping the power of the PERN stack, this project is a testament to it. By using PostgreSQL, Express, React, and Node.js, the application not only manages data interactions but also in a user friendly UI. This section highlights the strengths of these technologies in building a dynamic book blog.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 ">
                <div className="tw-bg-bluegreen tw-text-white tw-text-base tw-p-5">
                    <Card  title="P" text="PostgreSQL: A relational database that stores data securing managed by PG Admin"/>
                </div>
                <div className="tw-bg-moreblue tw-text-white tw-text-base tw-p-5">
                    <Card  title="E" text="Express: A flexible web framework that simplifies the routing and middleware management, making it easy to create RESTful endpoints."/>
                </div>
                <div className="tw-bg-yellow tw-text-base tw-p-5">
                    <Card  title="R" text="React: The heart interactive user interfaces, React provides dynamic rendering and state management. I used Next.js for this! "/>
                </div>
                <div className="tw-bg-orange tw-text-white tw-text-base tw-p-5">
                    <Card  title="N" text="NodeJS: Every developer knows the power of Node. To be able to run javascript on your own computer. Obviously, it allows us to be able to make these request to different endpoints"/>
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-my-5">
                <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="tw-py-10">
                        <h3 className="tw-text-3xl md:tw-text-5xl tw-text-bluegreen tw-font-boldonse">PostgreSQL</h3>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                        <div>
                            <p>PostgreSQL is the database I use for this project. It manages the book entries and the users' notes. Its reliability and the tables relationships are what drives supporting the dynamic nature of the application. You see two tables, entry and note, which both hold certain data. I have to establish a One-to-Many relationship in order for the notes to load belonging to the entry selected. In the second photo, the data collected from Open Library API is being into the entry table.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className="tw-w-full tw-flex tw-flex-col tw-gap-3  tw-mx-auto ">
                        <div>
                            <ImageZoom src={Flippo}   alt="database relationship"/>
                        </div>
                        <div>
                            <ImageZoom src={Database}  alt="data being sent to postgres via express "/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 ">
                <div className=" tw-bg-orange  lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="tw-py-10">
                        <h1 className=" tw-leading-10 tw-text-3xl md:tw-text-5xl tw-text-white tw-font-boldonse md:tw-leading-[1.5]  lg:tw-leading-[1.5]">Express and NodeJS</h1>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                        <div>
                            <p className="md:tw-text-base  tw-text-white">Express and Node.js handles the server-side operations of the Book Blog project. Express simplifies the use of RESTful APIs and the handling of HTTP requests. In the examples, I get the ISBN data from the client and use the data to make a GET request to the Open Library API to fetch image covers, publishers, ratings, and more. I used the Open Library URL to make the request, according to the documentation.</p>
                        </div>
                    </div>
                </div>
                <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className=" tw-flex tw-flex-col tw-gap-3 tw-mx-auto ">
                        <ImageZoom src={NodeExpress} alt="photo showing NodeJs"/>
                        <ImageZoom src={NodeExpress2} alt="an API request is being made to open libray" />
                    </div>
                </div>
            </div>
            <div className="tw-container tw-mt-2 tw-mx-auto tw-flex tw-flex-col md:tw-flex-row-reverse tw-gap-2 ">
                <div className=" md:tw-w-1/2 lg:tw-w-8/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="tw-py-10 md:tw-py-0">
                        <h3 className="tw-text-2xl md:tw-text-4xl tw-text-orange tw-font-boldonse">RestFul API</h3>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                        <div>
                            <p className="md:tw-text-base  tw-text-black ">The RESTful API is the connective tissue of the application, enabling communication between the front-end and back-end. It supports all CRUD operations—from fetching book data and user notes to updating or deleting entries. In the last photo, you see the id in the url depending on the entry selected which aligns with one of the routes in the photo above. </p>
                        </div>
                    </div>
                </div>
                <div className="tw-relative md:tw-w-1/2 lg:tw-w-4/12   tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className=" tw-flex tw-flex-col tw-gap-3 tw-mx-auto tw-z-40">
                        <ImageZoom src={Restful} className="tw-z-50 tw--mt-10 md:tw-mt-0 tw-mx-auto" alt="restFul endpoints" />
                        <ImageZoom src={Restful2} className="tw-z-50 tw--mt-10 md:tw-mt-0 tw-mx-auto" alt="the index is in the url" />
                    </div>
                </div>
            </div>
            <div className="tw-container tw-py-10 tw-mx-auto tw-p-5">
                <h3 className="tw-text-3xl md:tw-text-5xl tw-text-bluegreen tw-font-boldonse">Overview of the process</h3>
                <div className="tw-w-48"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                <div className="tw-w-full tw-p-4">
                    <ImageZoom src={booknote} alt="map of endpoints and integration" />
                </div>
            </div>
            <div className="tw-container  tw-mx-auto">
                <div className="tw-flex  tw-flex-col lg:tw-flex-row">
                    <div className="tw-flex tw-flex-col tw-justify-center  lg:tw-w-4/12 tw-p-6 tw-py-14 md:tw-p-5">
                        <h3 className="tw-text-3xl md:tw-text-4xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5] tw-mb-5  lg:tw-leading-[1.5]">Initial Wireframing</h3>
                        <p >This early stage focused on outlining the basic structure and user flows of the application. These sketches and low-fidelity prototypes were created to make a roadmap on how this site should look.</p>
                    </div>
                    <div className='lg:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides = {intialwireArray}/>
                    </div>
                </div>
                <div className="tw-flex   tw-flex-col lg:tw-flex-row-reverse tw-my-5  ">
                    <div className="tw-flex tw-flex-col tw-justify-center   lg:tw-w-4/12   tw-p-6 tw-py-14 md:tw-p-3">
                        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-4xl tw-text-bluegreen tw-font-boldonse tw-mb-5 md:tw-leading-[1.5] lg:tw-leading-[1.5]">Refined Wireframing</h3>
                        <p>Next up. I wanted to get an idea where the UI would align and what would make the most sense since its a personal book blog. To keep record with anything, its good to always know where everything should be.</p>
                    </div>
                    <div className='lg:tw-w-8/12 tw-my-auto  '>
                        <Carousel wireframeslides = {middlewireArray}/>
                    </div>
                </div>
                <div className="tw-flex  tw-flex-col lg:tw-flex-row md:tw-mt-0">
                    <div className="tw-flex tw-flex-col tw-justify-center  lg:tw-w-4/12 tw-p-6  md:tw-p-3">
                        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-4xl tw-text-bluegreen tw-font-boldonse tw-mb-5 md:tw-leading-[1.5]  lg:tw-leading-[1.5]">Final Wireframing</h3>
                        <p>In the final phase, all feedback and insights were incorporated to create a unified blueprint. The final wireframes reflect a good interface where the functionality and design come together, setting the stage for a good transition to the final development phase.</p>
                    </div>
                    <div className='lg:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides={finalwireArray}/>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-my-5 md:tw-py-0 tw-p-6  md:tw-p-3 tw-mx-auto">
                <h3 className="tw-text-2xl md:tw-text-3xl md:tw-mt-0 tw-text-bluegreen tw-font-boldonse">Lessons Learned & Improvements:</h3>
                <div className="md:tw-w-2/3">
                <br />
                    <li>I can write each endpoint inside of an api folder instead of creating a separate server folder. That way I can write the same back-end logic within that endpoint. I thought I needed a separate server to run the endpoints, but I learned you can do the same thing in Express using Nextjs; thus simplifying the architecture. This was my first rodeo, using Nextjs on a project.</li>
                    <br />
                    <li>A challenge when dealing with the Open Library API is coming up with a way to handle the json body so that it would not break the code. When reading the documentation, you get a glimspe of the kind of payload you can expect to get, but it does not always appear that way. </li>
                </div>
            </div>
            <Responsive repsonsive={repsonsive} />
            <div className="tw-container tw-mx-auto tw-h-auto ">
                <div className="tw-mx-auto lg:tw-w-2/3  tw-h-full ">
                   <Video srclink='../video/booknotesfinalVID.mp4' /> 
                </div>
            </div>
        </div>
    )
}

export default BookBlog;