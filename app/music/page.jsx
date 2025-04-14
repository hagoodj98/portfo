import React from "react";
import MusicCover from "../../public/GOOD.jpg";
import persona from '../../public/Yellow-And-Light-Yellow-Modern-User-Persona-Graph-1.png'
import personatwo from '../../public/Yellow-And-Light-Yellow-Modern-User-Persona-Graph.png'
import personathree from '../../public/Yellow-And-Light-Yellow-Modern-User-Persona-Graph-2.png'
import repsonsive from '../../public/Untitleddesign.png'
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
import NodeExpress2 from "../../public/mailchimpwebhook.png";
import funneldiagram from '../../public/funneldiagram.svg'
import poller from '../../public/emailpoller.png';
import checkout from '../../public/funnelcheckout.png';
import stripewebhook from '../../public/stripewebhook.png';
import subscriberphoto from '../../public/:subscribe.png';
import csrf from '../../public/csrf.png';
import salt from '../../public/salt.png';
import stripewebhook2 from '../../public/stripewebhooks.png'
import overview from '../../public/Screenshot 2025-04-10 at 2.43.58 PM.png';
import stripepayment from '../../public/stripepayment.png'
import flow from '../../public/subscriptionflow.png';
import stripe from '../../public/stripe.png';
import stripecheckout from '../../public/stripecheckout.png';
import paymentlink from '../../public/paymentlink.png';
import ProjectLink from "../components/ProjectLink";

export const metadata = {
    title: "Music Funnel",
  };


 function Music () {
 
    const intialwireArray = infoData.initialFunnel;
    const middlewireArray = infoData.refinedFunnel;
    const finalwireArray = infoData.finalFunnel;
    
    return (
        <div className="tw-py-20">
            <ProjectIntro projectname='Fan Funnel' description='This is a full-funnel web application designed for people who likes my music. The goal is to capture subscribers for my running campaigns, buying a fan pack, and joining my patreon.' srcname={MusicCover} />

            <Personas persona={persona} personatwo={personatwo} personathree={personathree} />
            
            <div className="tw-bg-yellow tw-mt-28 tw-py-20">
                <div className="tw-container tw-mx-auto tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="md:tw-w-1/2">
                        <h1 className="tw-leading-10 tw-text-3xl md:tw-text-5xl tw-text-black tw-font-boldonse md:tw-leading-[1.5]">Technical Architecture</h1>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-black"/> </div>
                        <div>
                            <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-3xl tw-text-black ">The Fan Funnel application leverages a modern full-stack built on Next.js 13 and React. It utilizes server-side rendering and API routes for a backend integration with services such as Redis for session management, Mailchimp for email subscription automation, and Stripe for payment processing.</p>
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
                            <p>Frontend: Next.js 13, React, Material UI, Tailwind CSS
                            </p>
                            <p>Backend: API routes in Next.js (server components for endpoints), integrated with Redis, Mailchimp, and Stripe.</p>
                        </div>
                    </div>
                </div>
                <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className="tw-w-full tw-flex tw-flex-col tw-gap-3  tw-mx-auto ">
                        <div>
                            <ImageZoom src={overview} alt="file architecture"/>
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
                            <p>Handles initial subscriber registration, stores data in a preliminary sessionin Redis, and triggers email confirmation via mailchimp.</p>
                        </div>
                    </div>
                </div>
                <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className="tw-w-full tw-flex tw-flex-col tw-gap-2  tw-mx-auto ">
                        <div>
                            <ImageZoom src={subscriberphoto}   alt="/subscribe endpoint code"/>
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
                            <p>Polls to confirm email subscriptions and activates sessions. The /check-status endpoint checks the status of the user. If subscribed, issue sessionToken and CSRF cookies and along with an active session. The email comonponent polls this endpoint every ten seconds to see if the user's status is subscribed. If so, then redirect to the landing page.  </p>
                        </div>
                    </div>
                </div>
                <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className="tw-w-full tw-flex  tw-gap-2  tw-mx-auto ">
                        <div className="tw-w-1/2">
                            <ImageZoom src={NodeExpress} alt="/check-status code"/>
                        </div>
                        <div className="tw-w-1/2">
                            <ImageZoom src={poller} alt="email checker component" />
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
                            <p>Integrates with Stripe for payment processing and handles checkout status updates via webhooks. On the landing page, if user hits the buy fan pack button, then this endpoint will create a stripe checkoutsessison from Stripe's API docs.</p>
                        </div>
                    </div>
                </div>
                <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className="tw-w-full tw-flex tw-flex-col tw-gap-2  tw-mx-auto ">
                        <div>
                            <ImageZoom src={checkout} alt="code that creates stripe session" />
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
                            <p>Separate endpoints for handling Stripe and Mailchimp webhooks, updating subscriber tags, and updating session data accordingly. In the subscription endpoint at the beginning, once data is processed, the endpoint makes an API request to mailchimp. Mailchimp sends a confirmation email to the user. I have a mailchimp webhook that lets me know when user confirmed email.</p>
                            <p>If they do, then change the user status to subscribed and save the data back into redis. The /check-status endpoint checks this.</p>
                            <p>If a stripe session is created, I have a stripe webhook to listen for any events that happen, such as checkout expiry, or completion. If the session was completed, then take the data like shipping address, from the session and make an additional API call to mailchimp to update the tag for that user. </p>
                        </div>
                    </div>
                </div>
                
                <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    
                    <div className="tw-w-full tw-flex tw-flex-col  md:tw-flex-row md:tw-flex-wrap tw-gap-2  tw-mx-auto ">
                        <div className="md:tw-w-1/2">
                            <ImageZoom src={NodeExpress2} alt="mailchimp webhook code"/>
                        </div>
                        <div className="md:tw-w-1/3">
                            <ImageZoom src={stripewebhook} alt="stripe events being listened by stripe webhook"/>
                        </div>
                        <div className="md:tw-w-1/3">
                            <ImageZoom src={stripewebhook2} alt="updating the tags via mailchimp"/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="tw-container tw-mx-auto tw-flex tw-flex-col md:tw-flex-row-reverse tw-gap-2 ">
                    <div className=" md:tw-w-1/2  tw-flex tw-flex-col tw-justify-center tw-p-5">
                        <div className="tw-py-10 md:tw-py-0">
                            <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse">Security Measures</h3>
                            <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                            <div>
                                <p>Use of HTTPS, CSRF tokens, and HMAC (with salt) to secure email data. Environment variable management for sensitive API keys.</p>
                                <p>Redis has a endpoint I use to ensure data is stored security on redis cloud, a paid subscription.</p>
                                <p>CSRF tokens are used to ensure request being made is from a legit user. For example, if a user clicks the buy button, that endpoint first checks if the CSRF matches with what is stored in redis. If they do not match, do not proceed with the request.</p>
                                <p>Stripe has an way to check if they payload actually comes from stripe by using the webhook secret key. Stripe request must also be sent over HTTPS, otherwise it will fail.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="tw-relative md:tw-w-1/2  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                        <div className=" tw-flex tw-flex-col md:tw-flex-row md:tw-flex-wrap tw-gap-3 tw-mx-auto tw-z-40">
                            <p>(click each to zoom**)</p>
                            <div className="md:tw-w-1/2">
                                <ImageZoom src={csrf} alt="the csrf check code" />
                            </div>
                            <div className="md:tw-w-1/3">
                                <ImageZoom src={salt} alt="the salt comparison" />
                            </div>
                            <div className="md:tw-w-1/3">
                                <ImageZoom src={stripe} alt="validating the stripe payload"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tw-container tw-mx-auto tw-flex tw-flex-col md:tw-flex-row tw-gap-2 ">
                    <div className=" md:tw-w-1/2 lg:tw-w-8/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                        <div className="tw-py-10 md:tw-py-0">
                            <h3 className="tw-leading-10 tw-text-2xl md:tw-text-3xl  tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]">Performance & Optimization</h3>
                            <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                            <div>
                                <p className="">Production build optimizations with Next.js. Tailwind purged configuration ensures only used classes are included in the final build.</p>
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
                            <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-3xl tw-text-black ">The Fan Funnel application delivers an end-to-end experience for music fans—from sign-up to secure payment—depending on the user interaction, session handling, and checkout processing. With a focus on responsiveness and security, the application manages subscriptions, sessions, and payments using modern technologies and best practices. Every feature is designed to create a smooth and secure user journey.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 ">
                <div className="tw-bg-bluegreen tw-text-white tw-text-base tw-p-5">
                    <Card  title="Flow" text="Sign up >> purchase fan pack >> and join patreon. "/>
                </div>
                <div className="tw-bg-moreblue tw-text-white tw-text-base tw-p-5">
                    <Card  title="Session" text="Cookies and sessions both share the same TTL when issued. Meaning they both expire concurrently. One does not outlive the other."/>
                </div>
                <div className="tw-bg-yellow tw-text-base tw-p-5">
                    <Card  title="Checkout" text="Stripe checkout integration. Only a certain amount of checkout sessions can be created. Afterwards payment links are sent."/>
                </div>
            </div>
           
            <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-my-10">
                <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="tw-py-10">
                        <h1 className="tw-leading-10 tw-text-3xl md:tw-text-4xl tw-text-bluegreen tw-font-boldonse  md:tw-leading-[1.5]">Subscription Flow</h1>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                        <div>
                            <p>The subscription process begins when a user signs up by entering their name and email address. Once submitted, the system stores preliminary session data in Redis and triggers an email confirmation using Mailchimp. A dedicated polling mechanism continually checks for the confirmation response. Once the email is verified, the subscriber’s status is updated, and their session is officially activated. This flow ensures that only genuine subscribers move forward in the funnel.</p>
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
                            <p>Sessions are managed using Redis, which securely stores user data with configurable time-to-live (TTL) values ranging from a brief 15 minutes for casual sessions to a full week for users opting to be remembered. </p>
                            <p>Upon successful email confirmation, preliminary session data is replaced with an active session record. Security is further enhanced by leveraging secure cookies, CSRF tokens, and HMAC verification, ensuring that user sessions remain protected against unauthorized access.</p>
                        </div>
                    </div>
                </div>
                <div className="tw-relative lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className="tw-w-full tw-flex tw-flex-col tw-gap-3  tw-mx-auto ">
                        <div>
                            <ImageZoom src={Flippo}   alt="the redis client"/>
                        </div>
                        <div>
                            <ImageZoom src={Database}  alt="the ttl of redis data "/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-my-10">
                <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="tw-py-10">
                        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-4xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]">Checkout Integration</h3>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/></div>
                        <div>
                            <p>According to the docs, line 73 is how a stripe session is created. I return the session id. If the id exists, then a stripe session was created successfully.</p>
                            <p>So then, in order for the form to show in the browser I need the NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY that I saved as stripePromise to do the redirect to stripe.</p>
                            <p>I use redis to tally up how many times this request was made. If this request equals three or four, then deny the request and instead send them a simply payment link via email from my own server using nodemailer package. If the request is four or more, simply throw a 429 error.</p>
                        </div>
                    </div>
                </div>
                <div className="tw-relative lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className="tw-w-full tw-flex tw-flex-col md:tw-flex-row md:tw-flex-wrap tw-gap-3  tw-mx-auto ">
                        <div className="md:tw-w-1/2">
                            <ImageZoom src={stripepayment} alt="the api call to create stripe checkout"/>
                        </div>
                        <div className="md:tw-w-1/3">
                            <ImageZoom src={stripecheckout} alt="the front end getting the session id from endpoint"/>
                        </div>
                        <div className="md:tw-w-1/3">
                            <ImageZoom src={paymentlink} alt="payment link structure"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-py-10 tw-mx-auto tw-p-5">
                <h3 className="tw-text-3xl md:tw-text-5xl tw-text-bluegreen tw-font-boldonse">Overview of the process</h3>
                <div className="tw-w-48"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                <div className="tw-w-full tw-p-4">
                    <ImageZoom src={funneldiagram} alt="diagram of how the funnel processes data"/>
                </div>
            </div>
            <div className="tw-container tw-mx-auto">
                <div className="tw-flex tw-flex-col lg:tw-flex-row">
                    <div className="tw-flex tw-flex-col tw-justify-center  lg:tw-w-4/12 tw-p-6 tw-py-14 md:tw-p-3">
                        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-4xl tw-font-boldonse md:tw-leading-[1.5] tw-text-bluegreen">Initial Wireframing</h3>
                        <p>In the initial phase, the focus was on brainstorming and mapping out the fundamental layout and user flow for the Music Funnel application. This stage involved sections such as the subscription form, email confirmation process, session indicators, and checkout integration.</p>
                    </div>
                    <div className='lg:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides = {intialwireArray}/>
                    </div>
                </div>
                <div className="tw-flex tw-flex-col lg:tw-flex-row-reverse  md:tw-mt-0">
                    <div className="tw-flex tw-flex-col tw-justify-center  lg:tw-w-4/12 tw-p-6 tw-py-14 md:tw-p-3">
                        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-4x tw-font-boldonse md:tw-leading-[1.5] tw-text-bluegreen">Refined Wireframing</h3>
                        <p>Building on the initial sketches, the refined wireframing stage involved incorporating early user feedback and applying modern UI/UX principles.</p>
                    </div>
                    <div className='lg:tw-w-8/12 tw-my-auto'>
                        <Carousel wireframeslides = {middlewireArray}/>
                    </div>
                </div>
                <div className="tw-flex tw-flex-col lg:tw-flex-row md:tw-mt-0 ">
                    <div className="tw-flex tw-flex-col tw-justify-center  lg:tw-w-4/12 tw-p-6 tw-py-14 md:tw-p-3">
                        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-4xl tw-font-boldonse md:tw-leading-[1.5] tw-text-bluegreen">Final Wireframing</h3>
                        <p>Every aspect—from typography and color schemes to responsive layouts and interactive behaviors—was concerning a moodboard I created myself. Which intels how do I want my music to sound and do I stand for.</p>
                    </div>
                    <div className='lg:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides={finalwireArray}/>
                    </div>
                </div>
            </div>
            <div className="tw-container  md:tw-py-0 tw-p-6  md:tw-p-3 tw-mx-auto">
                <h3 className="tw-leading-10 tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]">Lessons Learned & Improvements:</h3>
                <div className="md:tw-w-2/3">
                <br />
                    <li>I will improve the quality of the landing and thank you page videos.</li>
                    <br />
                    <li>I am currently working to get all of the legal documents together such as privacy policies and terms of use.</li>
                    <br />
                    <li>Definitely learned about the power of redis and its intuitiveness when handling sessions.</li>
                    <br />
                    <li>Learned about webhooks. It is important to always check and validate the webhook to ensure it is coming from a place I expect.</li>
                </div>
            </div>
            <Responsive repsonsive={repsonsive} />
            <div className="tw-container tw-mx-auto tw-h-auto ">
                <div className="tw-mx-auto lg:tw-w-2/3  tw-h-full ">
                   <Video srclink='../video/funnelvid.mp4' />
                   <h3 className=" tw-leading-10 tw-text-bluegreen tw-p-10 tw-font-boldonse md:tw-leading-[1.5]">Like my music? You can <span className="tw-inline-block"><ProjectLink link="https://jaiquezmusic.com" linktext="join the family"/></span> </h3> 
                </div>
            </div>
        </div>
    )
}

export default Music;