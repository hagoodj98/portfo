import React from "react";
import MusicCover from "../../public/GOOD.jpg";
import Image from "next/image";
import Mockup from "../../public/l4dmockup.svg" 
import Button from "../components/Button";
import persona from '../../public/Yellow-And-Light-Yellow-Modern-User-Persona-Graph-1.png'
import personatwo from '../../public/Yellow-And-Light-Yellow-Modern-User-Persona-Graph.png'
import personathree from '../../public/Yellow-And-Light-Yellow-Modern-User-Persona-Graph-2.png'
import repsonsive from '../../public/Untitleddesign.png'
import Link from "next/link";
import ImageZoom from "../components/ImageZoom";
import Carousel from "@/app/components/Carousel";
import Personas from "../components/Personas";
import Responsive from "@/app/components/Responsive";
import  infoData  from "../components/datai";
import ProjectIntro from '../components/ProjectIntro';
import Card from '../components/Card';
import Video from '../components/Video';
import Flippo from "../../public/redisclient.png";
import Database from "../../public/rememberme.png";
import NodeExpress from "../../public/checkstatus.png";
import Restful from "../../public/restfulapi.png";
import Restful2 from "../../public/resfulapi2.png"
import NodeExpress2 from "../../public/mailchimpwebhook.png";
import funneldiagram from '../../public/funneldiagram.svg'
import poller from '../../public/emailpoller.png';
import checkout from '../../public/funnelcheckout.png';
import mailchimpwebhook from '../../public/mailchimpwebhook.png';
import stripewebhook from '../../public/stripewebhook.png';
import subscriberphoto from '../../public/:subscribe.png';
import csrf from '../../public/csrf.png';
import salt from '../../public/salt.png';
import stripewebhook2 from '../../public/stripewebhooks.png'
import overview from '../../public/Screenshot 2025-04-10 at 2.43.58 PM.png';
import stripepayment from '../../public/stripepayment.png'
import flow from '../../public/subscriptionflow.png'


export const metadata = {
    title: "Music Funnel",
  };


 function Music () {
 
    const intialwireArray = infoData.initialFunnel;
    const middlewireArray = infoData.refinedFunnel;
    const finalwireArray = infoData.finalFunnel;
    
    return (
        <div className="tw-py-20">
            <ProjectIntro projectname='Fan Funnel' description='this is a full-funnel web application designed for music fans. The goal is to capture subscribers, verify their subscription via email (using Mailchimp), manage sessions (using Redis), and integrate payments with Stripe—all while providing a modern, responsive UI.' srcname={MusicCover} />

            <Personas persona={persona} personatwo={personatwo} personathree={personathree} />
            
            <div className="tw-bg-yellow tw-mt-28 tw-py-20">
                <div className="tw-container tw-mx-auto tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="md:tw-w-1/2">
                        <h1 className="tw-leading-10 tw-text-3xl md:tw-text-5xl tw-text-black tw-font-boldonse md:tw-leading-[1.5]">Technical Architecture</h1>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-black"/> </div>
                        <div>
                            <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-3xl tw-text-black ">The Fan Funnel application leverages a modern full-stack architecture built on Next.js 13 and React. It utilizes server-side rendering and API routes for seamless backend integration with services such as Redis for session management, Mailchimp for email subscription automation, and Stripe for payment processing. This architecture creates a smooth flow from initial user sign-up to secure checkout, ensuring scalability and a responsive user experience.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 ">
                <div className="tw-bg-bluegreen tw-text-white tw-text-base tw-p-5">
                    <Card  title="Stack " text="Redis for session management, Mailchimp for email subscription automation, and Stripe for payment processing. "/>
                </div>
                <div className="tw-bg-moreblue tw-text-white tw-text-base tw-p-5">
                    <Card  title=" Endpoints" text="Subscription Flow, Email Confirmation, Checkout Integration, and Webhooks & other API Endpoints"/>
                </div>
                <div className="tw-bg-yellow tw-text-base tw-p-5">
                    <Card  title="Security " size="tw-text-3xl" text=" The use of CSRF tokens and environment variables protects sensitive keys and API credentials. "/>
                </div>
                <div className="tw-bg-orange tw-text-white tw-text-base tw-p-5">
                    <Card  title=" Optimizing" text="The application is optimized for speed and efficiency through production-ready Next.js builds and tailored Tailwind CSS configurations that purge unused styles.  "/>
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-my-10">
                <div className="tw-border-2 lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="tw-py-10">
                        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-5xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5] ">Stack Overview</h3>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                        <div>
                            <p>•	Frontend: Next.js 13, React, Material UI, Tailwind CSS
                            •	Backend: API routes in Next.js (server components for endpoints), integrated with Redis, Mailchimp, and Stripe.</p>
                        </div>
                    </div>
                </div>
                <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className="tw-w-full tw-flex tw-flex-col tw-gap-3  tw-mx-auto ">
                        <div>
                            <ImageZoom src={overview}   alt="database relationship"/>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="tw-py-5 ">
                    <h3 className="tw-leading-10 tw-text-3xl tw-text-center md:tw-text-4xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5] ">Key Components & Endpoints</h3>
                    <div className="tw-mx-auto tw-w-28"><hr className=" tw-h-2 tw-bg-bluegreen"/> </div>
            </div>
            <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-my-10">
                <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="tw-py-10">
                        <h4 className="tw-leading-10 tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5] ">Subscription Endpoint</h4>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                        <div>
                            <p>•Handles initial subscriber registration, stores preliminary sessions in Redis, and triggers email confirmation.</p>
                        </div>
                    </div>
                </div>
                <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className="tw-w-full tw-flex tw-flex-col tw-gap-2  tw-mx-auto ">
                        <div>
                            <ImageZoom src={subscriberphoto}   alt="database relationship"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-my-10">
                <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="tw-py-10">
                        <h4 className=" tw-leading-10 tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5] ">Email Confirmation Endpoint</h4>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                        <div>
                            <p>•Polls to confirm email subscriptions and activates sessions.</p>
                        </div>
                    </div>
                </div>
                <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className="tw-w-full tw-flex  tw-gap-2  tw-mx-auto ">
                        <div className="tw-w-1/2">
                            <ImageZoom src={NodeExpress}/>
                        </div>
                        <div className="tw-w-1/2">
                            <ImageZoom src={poller} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row-reverse tw-gap-2 tw-my-10">
                <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="tw-py-10">
                        <h4 className="tw-leading-10 tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse  md:tw-leading-[1.5]">Checkout Session Endpoint</h4>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                        <div>
                            <p>•Integrates with Stripe for payment processing and handles checkout status updates via webhooks.</p>
                        </div>
                    </div>
                </div>
                <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className="tw-w-full tw-flex tw-flex-col tw-gap-2  tw-mx-auto ">
                        <div>
                            <ImageZoom src={checkout}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-my-10">
                <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="tw-py-10">
                        <h4 className="tw-leading-10 tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse  md:tw-leading-[1.5]">Webhook Endpoints</h4>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                        <div>
                            <p>•Separate endpoints for handling Stripe and Mailchimp webhooks, updating subscriber tags, and updating session data accordingly.</p>
                        </div>
                    </div>
                </div>
                <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className="tw-w-full tw-flex tw-flex-col  md:tw-flex-row md:tw-flex-wrap tw-gap-2  tw-mx-auto ">
                        <div className="md:tw-w-1/2">
                            <ImageZoom src={NodeExpress2}/>
                        </div>
                        <div className="md:tw-w-1/3">
                            <ImageZoom src={stripewebhook}/>
                        </div>
                        <div className="md:tw-w-1/3">
                            <ImageZoom src={stripewebhook2}/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="tw-container tw-mx-auto tw-flex tw-flex-col md:tw-flex-row tw-gap-2 ">
                    <div className=" md:tw-w-1/2  tw-flex tw-flex-col tw-justify-center tw-p-5">
                        <div className="tw-py-10 md:tw-py-0">
                            <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse">Security Measures</h3>
                            <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                            <div>
                                <p>•	Use of HTTPS, CSRF tokens, and HMAC (with salt) to secure email data.
                                •	Environment variable management for sensitive API keys.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="tw-relative md:tw-w-1/2  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                        <div className=" tw-flex tw-flex-col tw-gap-3 tw-mx-auto tw-z-40">
                            <ImageZoom src={csrf} className="tw--mt-10 md:tw-mt-0 tw-mx-auto" alt="Project name" />
                            <ImageZoom src={salt} className="tw--mt-10 md:tw-mt-0 tw-mx-auto" alt="Project name" />
                        </div>
                    </div>
                </div>
                <div className="tw-container tw-mx-auto tw-flex tw-flex-col md:tw-flex-row tw-gap-2 ">
                    <div className=" md:tw-w-1/2 lg:tw-w-8/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                        <div className="tw-py-10 md:tw-py-0">
                            <h3 className="tw-text-2xl md:tw-text-3xl  tw-text-bluegreen tw-font-boldonse">Performance & Optimization</h3>
                            <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                            <div>
                                <p className="">•	Production build optimizations with Next.js. Tailwind purge configuration ensuring only used classes are included in the final build.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="tw-bg-yellow tw-mt-28 tw-py-20">
                <div className="tw-container tw-mx-auto tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="md:tw-w-1/2">
                        <h1 className="tw-leading-10 tw-text-3xl md:tw-text-5xl tw-text-black tw-font-boldonse  md:tw-leading-[1.5]">Features and Functionality</h1>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-black"/> </div>
                        <div>
                            <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-3xl tw-text-black ">The Fan Funnel application delivers an end-to-end experience for music fans—from sign-up to secure payment—by seamlessly integrating user interaction, session handling, and checkout processing. With a focus on responsiveness and security, the application manages subscriptions, sessions, and payments using modern technologies and best practices. Every feature is designed to create a smooth, engaging, and secure user journey.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 ">
                <div className="tw-bg-bluegreen tw-text-white tw-text-base tw-p-5">
                    <Card  title="Subscription Flow" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae consequuntur harum. Quia perspiciatis adipisci, minus fugit minima nemo eos unde suscipit ipsum, cumque, distinctio qui dolorum amet ut illum?"/>
                </div>
                <div className="tw-bg-moreblue tw-text-white tw-text-base tw-p-5">
                    <Card  title="Session Management" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae consequuntur harum. Quia perspiciatis adipisci, minus fugit minima nemo eos unde suscipit ipsum, cumque, distinctio qui dolorum amet ut illum?"/>
                </div>
                <div className="tw-bg-yellow tw-text-base tw-p-5">
                    <Card  title="Checkout Integration" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae consequuntur harum. Quia perspiciatis adipisci, minus fugit minima nemo eos unde suscipit ipsum, cumque, distinctio qui dolorum amet ut illum?"/>
                </div>
            </div>
           
            <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-my-10">
                <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="tw-py-10">
                        <h1 className="tw-leading-10 tw-text-3xl md:tw-text-4xl tw-text-bluegreen tw-font-boldonse  md:tw-leading-[1.5]">Subscription Flow</h1>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                        <div>
                            <p>The subscription process begins when a user signs up by entering their name and email address. Once submitted, the system stores preliminary session data in Redis and triggers an email confirmation using Mailchimp. A dedicated polling mechanism continually checks for the confirmation response. Once the email is verified, the subscriber’s status is updated, and their session is officially activated. This flow ensures that only genuine subscribers move forward in the funnel while maintaining a seamless, user-friendly experience.</p>
                        </div>
                    </div>
                </div>
                <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className="tw-w-full tw-flex tw-flex-col tw-gap-3  tw-mx-auto ">
                        <div>
                            <ImageZoom src={flow}   alt="database relationship"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row-reverse tw-gap-2 tw-my-10">
                <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="tw-py-10">
                        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-4xl tw-text-bluegreen tw-font-boldonse  md:tw-leading-[1.5]">Session Management</h3>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                        <div>
                            <p>Sessions are managed using Redis, which securely stores user data with configurable time-to-live (TTL) values—ranging from a brief 15 minutes for casual sessions to a full week for users opting to be remembered. Upon successful email confirmation, preliminary session data is replaced with an active session record. Security is further enhanced by leveraging secure cookies, CSRF tokens, and HMAC verification, ensuring that user sessions remain protected against unauthorized access and potential exploits.</p>
                        </div>
                    </div>
                </div>
                <div className="tw-relative lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className="tw-w-full tw-flex tw-flex-col tw-gap-3  tw-mx-auto ">
                        <div>
                            <ImageZoom src={Flippo}   alt="database relationship"/>
                        </div>
                        <div>
                            <ImageZoom src={Database}  alt="data being sent to the database "/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-my-10">
                <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="tw-py-10">
                        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-4xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]">Checkout Integration</h3>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                        <div>
                            <p>•	Stripe Checkout: Explain how Stripe is used for handling payments, including the creation of checkout sessions and webhook handling for session completion or expiration.
                            •	Automated Payment Flow: Detail the fallback mechanism where, after a couple of checkout attempts, a payment link is sent via email.</p>
                        </div>
                    </div>
                </div>
                <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className="tw-w-full tw-flex tw-flex-col tw-gap-3  tw-mx-auto ">
                        <div>
                            <ImageZoom src={stripepayment}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-py-10 tw-mx-auto tw-p-5">
                <h3 className="tw-text-3xl md:tw-text-5xl tw-text-bluegreen tw-font-boldonse">Overview of the process</h3>
                <div className="tw-w-48"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                <div className="tw-w-full tw-p-4">
                    <ImageZoom src={funneldiagram} />
                </div>
            </div>
            <div className="tw-container tw-mx-auto">
                <div className="tw-flex tw-flex-col lg:tw-flex-row">
                    <div className="tw-flex tw-flex-col lg:tw-w-4/12 tw-p-6 tw-py-14 md:tw-p-3">
                        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-4xl tw-font-boldonse md:tw-leading-[1.5] tw-text-bluegreen">Initial Wireframing</h3>
                        <p>In the initial phase, the focus was on brainstorming and mapping out the fundamental layout and user flow for the Music Funnel application. This stage involved sketching low-fidelity wireframes to identify key sections such as the subscription form, email confirmation process, session indicators, and checkout integration. The goal was to establish a clear structure that highlighted the most critical user interactions while capturing the overall vision for a seamless, engaging funnel experience.</p>
                    </div>
                    <div className='lg:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides = {intialwireArray}/>
                    </div>
                </div>
                <div className="tw-flex tw-flex-col lg:tw-flex-row-reverse  md:tw-mt-0">
                    <div className="tw-flex tw-flex-col tw-justify-center  lg:tw-w-4/12 tw-p-6 tw-py-14 md:tw-p-3">
                        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-4x tw-font-boldonse md:tw-leading-[1.5] tw-text-bluegreen">Refined Wireframing</h3>
                        <p>Building on the initial sketches, the refined wireframing stage involved incorporating early user feedback and applying modern UI/UX principles. The layout was reworked to enhance navigation, improve visual hierarchy, and create more intuitive placements for interactive elements like subscription prompts and secure checkout buttons. This iterative process allowed for the optimization of user flows, ensuring that the transition between subscription, session management, and payment processing felt natural and user-friendly.</p>
                    </div>
                    <div className='lg:tw-w-8/12 tw-my-auto'>
                        <Carousel wireframeslides = {middlewireArray}/>
                    </div>
                </div>
                <div className="tw-flex tw-flex-col lg:tw-flex-row md:tw-mt-0 ">
                    <div className="tw-flex tw-flex-col tw-justify-center  lg:tw-w-4/12 tw-p-6 tw-py-14 md:tw-p-3">
                        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-4xl tw-font-boldonse md:tw-leading-[1.5] tw-text-bluegreen">Final Wireframing</h3>
                        <p>In the final wireframing phase, high-fidelity prototypes were developed to serve as a precise blueprint for the development process. Every aspect—from typography and color schemes to responsive layouts and interactive behaviors—was meticulously detailed. The final wireframes not only encapsulate the refined user experience but also ensure that every critical component—from the initial subscription interaction to the secure payment checkout—works together harmoniously to deliver an optimized and visually compelling Music Funnel application.</p>
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
                <div className="tw-mx-auto lg:tw-w-2/3  tw-h-full ">
                   <Video srclink='../video/funnelvid.mp4' />
                   <h3 className=" tw-text-bluegreen tw-p-10 tw-font-boldonse">Like my music? You can  <span><Link href="https://jaiquezmusic.com" className="tw-no-underline tw-text-orange">JOIN the family</Link></span></h3> 
                </div>
            </div>
        </div>
    )
}

export default Music;