import React from "react";
import Image from "next/image";
import persona from '../../../public/persona4.svg'
import personatwo from '../../../public/persona5.svg'
import personathree from '../../../public/persona6.svg'
import SmallCard from '../../components/SmallCard';
import Mockup from "../../../public/l4dmockup.svg" 
import Carousel from "@/app/components/Carousel";
import  infoData  from "../../components/datai";
import password from '../../../public/Screenshot 2025-04-03 at 10.23.22 PM.png';
import responsive from '../../../public/l4d.png'
import Video from '../../components/Video';
import hash from '../../../public/hashingpassword.png'
import ProjectIntro from '../../components/ProjectIntro'
import Personas from "@/app/components/Personas";
import Responsive from "@/app/components/Responsive";
import ImageZoom from "@/app/components/ImageZoom";
import passport from '../../../public/Screenshot 2025-04-03 at 10.07.37 PM.png'
import passporttwo from '../../../public/Screenshot 2025-04-03 at 10.07.06 PM.png';
import postgresproof from '../../../public/Screenshot 2025-04-03 at 10.41.27 PM.png'
import postgresrelation from '../../../public/Group 7.png'
import diagram from '../../../public/l4ddiagram.svg';

 function Left4Dead () {
    const intialwireArray = infoData.initialLeft4Dead;
    const middlewireArray = infoData.middleLeft4Dead;
    const finalwireArray = infoData.finalLeft4Dead;

    return (
        <div className="tw-py-20">
            <ProjectIntro projectname='GamingSite' description='For this project, I chose to redesign the website for Left 4 Dead—a game I’m truly passionate about. The original site had potential but needed a modern update in terms of usability, visual appeal, and overall user experience. My objective was to reimagine the site by integrating contemporary design principles while still reflecting the gritty, dynamic spirit of Left 4 Dead. This redesign focuses on creating an immersive, engaging platform that both honors the game’s legacy and meets today’s web standards.' srcname={Mockup} />

            <Personas persona={persona} personatwo={personatwo} personathree={personathree} />
            <div className="tw-bg-yellow tw-mt-28 tw-py-20">
                <div className="tw-container tw-mx-auto tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="md:tw-w-1/2">
                        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-5xl  tw-text-black tw-font-boldonse md:tw-leading-[1.5]">Technical Architecture</h3>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-black"/> </div>
                        <div>
                            <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-3xl tw-text-black ">The project uses Express and Node.js for a robust backend, with PostgreSQL managing relational data. It secures user credentials using bcrypt and Passport.js (passport-local) for authentication, while express-session and cookies maintain user sessions. Middleware like body-parser and CORS ensures smooth, secure, and scalable API interactions.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-my-5">
                <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="tw-py-10">
                        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-5xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]">Password Security</h3>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                        <div>
                            <p className="md:tw-text-base ">Password security is a critical component of the project, achieved by using bcrypt for hashing passwords. When users register, their passwords are hashed using bcrypt with a defined number of salt rounds, ensuring that even if the database is compromised, the raw passwords remain protected. During login, the application compares the hashed version of the entered password with the stored hash, which provides a robust defense against brute-force attacks and other common security threats.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className="tw-w-full tw-flex tw-flex-col tw-gap-3  tw-mx-auto ">
                        <div>
                            <ImageZoom src={password}   alt="database relationship"/>
                        </div>
                        <div>
                            <ImageZoom src={hash}  alt="data being sent to the database "/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2">
                <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="tw-py-10">
                        <h3 className="tw-text-3xl md:tw-text-5xl tw-text-bluegreen tw-font-boldonse">Sessions and cookies</h3>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                        <div>
                            <p className="md:tw-text-base  tw-text-black ">In the L4D project, session management is implemented using express-session. This middleware creates and manages session data on the server, while a signed cookie (secured with a secret key) is sent to the client. This cookie allows the application to maintain persistent sessions across HTTP requests, so authenticated users remain logged in as they navigate through the site. By leveraging sessions, the project ensures that user-specific information—like login status—is securely stored and transmitted without exposing sensitive data.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className="tw-w-full tw-flex tw-flex-col tw-gap-3  tw-mx-auto ">
                        <div className=" tw-flex tw-items-center">
                            <Video srclink='../video/cookie_session.webm' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row-reverse tw-gap-2 ">
                <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="tw-py-10">
                        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-5xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]  lg:tw-leading-[1.5]">Passport-local and Session Handling</h3>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                        <div>
                            <p className="md:tw-text-base  tw-text-black ">User authentication is managed via Passport.js using the passport-local strategy. This lightweight strategy handles username and password authentication by querying the PostgreSQL database for the user record. When a user attempts to log in, bcrypt verifies the entered password against the stored hashed password. </p>
                            <p>After successful authentication, serializeUser is used to determine what user information should be stored in the session (typically the user ID or essential user details). Conversely, deserializeUser retrieves the full user information from the session on subsequent requests. This mechanism ensures that user sessions are maintained securely and efficiently, providing a seamless experience across the application.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className="tw-w-full tw-flex tw-flex-col tw-gap-3  tw-mx-auto ">
                        <div>
                            <ImageZoom src={passport}   alt="database relationship"/>
                        </div>
                        <div>
                            <ImageZoom src={passporttwo}  alt="data being sent to the database "/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-flex tw-flex-col  tw-gap-2 tw-my-5">
                <div className="  tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="tw-py-10">
                        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-5xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]  lg:tw-leading-[1.5]">Postgres One-to-Many Relationship</h3>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                    </div>
                </div>
                <div className="tw-relative    tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className="tw-w-full tw-flex tw-flex-col tw-gap-3  tw-mx-auto ">
                        <div >
                            <ImageZoom src={postgresproof} />
                        </div>
                        <div>
                            <ImageZoom src={postgresrelation} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-py-10 tw-mx-auto tw-p-5">
                <h3 className="tw-text-3xl md:tw-text-5xl tw-text-bluegreen tw-font-boldonse">Overview of the process</h3>
                <div className="tw-w-48"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                <div className="tw-w-full tw-p-4">
                    <ImageZoom src={diagram} />
                </div>
            </div>
            <div className="tw-container tw-mx-auto ">
                <div className=" tw-flex tw-flex-col  lg:tw-flex-row  md:tw-mt-0">
                    <div className="tw-flex tw-flex-col tw-justify-center lg:tw-w-4/12 tw-p-6 tw-py-14 md:tw-p-3">
                        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-4xl  tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]  lg:tw-leading-[1.5]">Initial Wireframing </h3>
                        <p>During the initial wireframing phase, I focused on conceptualizing the core structure and layout of the site.</p>
                        <p>Concept Exploration: I began by sketching out basic ideas for navigation, content distribution, and interactive elements.</p>
                        <p>Layout and Flow: Early wireframes helped establish how different sections of the site could be organized to capture user attention and guide them seamlessly through the content.</p>
                        
                    </div>
                    <div className='lg:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides = {intialwireArray}/>
                    </div>
                </div>
                <div className="tw-flex tw-flex-col lg:tw-flex-row-reverse   md:tw-mt-0">
                    <div className="tw-flex tw-flex-col tw-justify-center lg:tw-w-4/12 tw-p-6  md:tw-p-3">
                        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-4xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]  lg:tw-leading-[1.5]">Refined Wireframing</h3>
                        <p>In the refined wireframing stage, I iterated on the initial sketches based on usability feedback and design principles.</p>
                        <p>Modern Aesthetics: This phase incorporated modern design trends while retaining the essence of Left 4 Dead’s distinctive look, striking a balance between functionality and visual appeal.</p>
                    </div>
                    <div className='lg:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides = {middlewireArray}/>
                    </div>
                </div>
                <div className="tw-flex tw-flex-col lg:tw-flex-row md:tw-mt-0">
                    <div className="tw-flex tw-flex-col tw-justify-center  lg:tw-w-4/12   tw-p-6 tw-py-14 md:tw-p-3">
                        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-4xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]  lg:tw-leading-[1.5]">Final Wireframing</h3>
                        <p>The final wireframing phase brought all the ideas and revisions together into a polished, high-fidelity blueprint.</p>
                        <p>Cohesive Structure: The final wireframes reflect a well-organized structure that seamlessly blends aesthetics with functionality.</p>
                    </div>
                    <div className='lg:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides={finalwireArray}/>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-p-6 md:tw-p-3 tw-mx-auto">
                <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse">Lessons Learned & Improvements:</h3>
                <div className="md:tw-w-2/3">
                    <li>Future Enhancements: The project serves as a solid foundation for further iterations, with room for incorporating additional interactive features or integrating social components that engage the gaming community even more. </li>
                    <li>One challenged faced was learning when to call an asynchronous function. Its important because it helps clean up redundant code on the backend.</li>
                    <li>Another challenge was figuring out how can I make the login user's name dynamic using EJS. This site is from pure Express. Nextjs would be a great option with its unique capabilities.</li>
                    <li>Learned about redis in another project. This would indeed speed of the load time expecially when a user logs in and wants to communicate with others. </li>
                </div>
            </div>
            <Responsive repsonsive={responsive} />
            <div className="tw-container tw-mx-auto tw-h-auto">
                <div className="tw-m-auto tw-h-full ">
                    <Video srclink='../video/L4Dfinalvid.mp4' />
                </div>
            </div>
        </div>
    )
}

export default Left4Dead;

