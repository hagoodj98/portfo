import React from "react";
import persona from '../../../public/sarah.png';
import personatwo from '../../../public/miguel.png';
import personathree from '../../../public/priya.png'
import Mockup from "../../../public/smock.png" 
import Carousel from "@/app/components/Carousel";
import  infoData  from "../../components/datai";
import Card from '../../components/Card';
import Video from '../../components/Video';
import ProjectIntro from '../../components/ProjectIntro'
import Personas from "@/app/components/Personas";
import ImageZoom from "@/app/components/ImageZoom";
import diagram from '../../../public/scheduleroverview.svg';
import futurescheduler from '../../../public/soontobecalendarf.png';
import poll from '../../../public/poll.png';
import changesfunction from '../../../public/changefunction.png';
import cronfunctionuses from '../../../public/cronfucntionuses.png';
import markpending from '../../../public/markpending.png';
import mytasksfunction from '../../../public/mytasks.png';
import prefilling from '../../../public/prefillone.png';
import prefillingtwo from '../../../public/prefillingtwo.png';
import prefillingthree from '../../../public/prefillingthree.png'
import productionformdata from '../../../public/productionformdata.png';
import tablestructure from '../../../public/newtablestructure.png';
import recharts from '../../../public/recharts.png';
import Link from "next/link";

const scheduler = () => {
    const intialwireArray = infoData.initalScheduler;
    const middlewireArray = infoData.middleScheduler;
    const finalwireArray = infoData.finalScheduler;

  return (
    <div className="tw-py-20">
        <ProjectIntro projectname='Schedule Jobs' description='The purpose of this project was to design and develop a production scheduling system that could streamline how jobs are created, assigned, and tracked across different assembly lines. Traditional scheduling methods—like spreadsheets or paper-based logs—often lead to errors, double bookings, and inefficiencies when coordinating multiple jobs. It was built to provide clarity on job statuses in real time (Available → Scheduled → Busy). ' srcname={Mockup} />
        <Personas persona={persona} personatwo={personatwo} personathree={personathree} />
        <div className="tw-bg-yellow tw-mt-28 tw-py-20">
            <div className="tw-container tw-mx-auto tw-flex tw-flex-col tw-justify-center tw-p-5">
                <div className="md:tw-w-1/2">
                    <h3 className="tw-leading-10 tw-text-3xl md:tw-text-5xl  tw-text-black tw-font-boldonse md:tw-leading-[1.5]">Technical Architecture</h3>
                    <div className="tw-w-28"><hr className="tw-h-2 tw-bg-black"/> </div>
                    <div>
                        <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-3xl tw-text-black ">The project uses Node-Cron alongside the useSWR to populate the table data with the assistance of tanstack table. There is a predefined list of resources, that has an in-memory presence on the back-end. As far as the front-end is concerned, the project uses:</p>
                        <ul className="tw-list-disc">
                            <li>Framework: Next.js (React-based) for fast rendering and routing.</li>
                            <li>State Management: React Context and hooks for managing slot selection, pending jobs, and real-time updates.</li>
                            <li>Data Validation: Zod schemas to ensure input correctness (time slots, resources, etc.) before submission.</li>
                            <li>UI Components: Built with React and styled using TailwindCSS, with reusable form components for job selection and scheduling.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-my-5">
            <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                <div className="tw-py-10">
                    <h3 className="tw-leading-10 tw-text-3xl md:tw-text-5xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]">Tanstack Table Structure</h3>
                    <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                    <div>
                        <p className="md:tw-text-base ">Firstly, I created a table definition that is built on data, rows, and columns. The data should be what's already prefined somewehere in the app; however, if there was some change to that prefined data such as Availablity then the table will render such. The columns are built by the separate data file where I can dyanmically create more columns by adding to the time slots array. Then the rows model allows us to transform the data in useful ways  for data grid features like sorting/filterings.
                        </p>
                    </div>
                </div>
            </div>
            <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                <div className="tw-w-full tw-flex tw-flex-col tw-gap-3  tw-mx-auto ">
                    <div>
                        <ImageZoom src={tablestructure}  alt="tanstack table"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2">
            <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                <div className="tw-py-10">
                    <h3 className=" tw-leading-10 tw-text-3xl md:tw-text-5xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]">UseSWR </h3>
                    <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                    <div>
                        <p className="md:tw-text-base  tw-text-black ">As before I mentioned that the table relies on data. And that's where useSWR comes in. By default, the table renders in the original data, that is where all jobs have available slots in their respected time slot. With the help of useSWR, it listens for any real-time updates to the status change, depending on the current time. In the case where has been a recent change in the data, then useSWR will bring that new data into the table component and the table will no longer render the original data, but the updates.</p>
                    </div>
                </div>
            </div>
            <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                <div className="tw-w-full tw-flex tw-flex-col tw-gap-3  tw-mx-auto ">
                    <div>
                        <ImageZoom src={poll}  alt="tanstack table"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row-reverse tw-gap-2 ">
            <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                <div className="tw-py-10">
                    <h3 className="tw-leading-10 tw-text-3xl md:tw-text-5xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]  lg:tw-leading-[1.5]">Form Data</h3>
                    <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                        <div>
                            <p className="md:tw-text-base  tw-text-black ">There are two endpoints that hanlde the data in the form. One is mark-pending, where if the user does not submit the form but fills in all fields, then that data gets sent to the endpoint thats responsible for only adding to an array and changing the status from Available - Pending. The other endpoint, schedule-task, expects data from the form itself alongside the cell id, in which the user selected before being routed to the form page. This endpoint changes the status from Pending to Scheduled, then adds the data to an array that node-cron will use to know when to change the status apprioprately. 
                            </p>
                        </div>
                </div>
            </div>
            <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                <div className="tw-w-full tw-flex tw-flex-col tw-gap-3  tw-mx-auto ">
                    <div>
                        <ImageZoom src={markpending} alt="markpending endpoint"/>
                    </div>
                    <div>
                        <ImageZoom src={productionformdata} alt="the productionform"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row-reverse tw-gap-2 ">
            <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                <div className="tw-py-10">
                    <h3 className="tw-leading-10 tw-text-3xl md:tw-text-5xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]  lg:tw-leading-[1.5]">...myTask</h3>
                    <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                        <div>
                            <p className="md:tw-text-base  tw-text-black ">After the data is processed in the schedule-task endpoint, it calls a function that is responsible for later processing by node-cron.
                            </p>
                        </div>
                </div>
            </div>
            <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                <div className="tw-w-full tw-flex tw-flex-col tw-gap-3  tw-mx-auto ">
                    <div>
                        <ImageZoom src={mytasksfunction} alt="the mytask function" />
                    </div>
                </div>
            </div>
        </div>
       
        <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2">
            <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                <div className="tw-py-10">
                    <h3 className=" tw-leading-10 tw-text-3xl md:tw-text-5xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]">node-cron</h3>
                    <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                    <div>
                        <p className="md:tw-text-base  tw-text-black ">node-cron runs in the background of the app. It makes a POST request to the schedule-task endpoint and retrieves the array that the myTasks function adds the data to. Cron then passes that array to another function, loopThroughScheduledJobs, which gets each item in the array and pass it to one final function, changeStatuses. Finally, changeStatuses compares the time slot from the user and the current time, then changes the statuses apprioprately.
                        </p>
                    </div>
                </div>
            </div>
            <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                <div className="tw-w-full tw-flex tw-flex-col tw-gap-3  tw-mx-auto ">
                    <div>
                        <ImageZoom src={cronfunctionuses}  alt="function cron uses"/>
                    </div>
                    <div>
                        <ImageZoom src={changesfunction}  alt="changes function"/>
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
                        <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-3xl tw-text-black ">To further enhance the user experience for the user I incorporated a couple features to make the application more intuitive.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="tw-container tw-mx-auto tw-grid md:tw-grid-cols-2  ">
            <div className="tw-bg-bluegreen tw-text-white tw-text-base tw-p-5">
                <Card  title="Prefilling form" text="The form prefills the last inputed data selected by the user before submitting. That way the client does not have to remember what they selected to which job."/>
            </div>
            <div className="tw-bg-moreblue tw-text-white tw-text-base tw-p-5">
                <Card  title="Data Visual" text="This gives users a quick view on which jobs have availablilty."/>
            </div>
        </div>
        <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2">
            <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                <div className="tw-py-10">
                    <h3 className=" tw-leading-10 tw-text-3xl md:tw-text-5xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]"> RechartsJS</h3>
                    <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                    <div>
                        <p className="md:tw-text-base  tw-text-black ">React has a library that is Reliable, Composable, and powerful. All you would do is choose an apprioprate chart and incorporate the data with the chart. Recharts are used by its data variable. And all I did was keep track of how many Available statuses there are. And since useSWR listens for real-time updates, the chart changes automatically.
                        </p>
                    </div>
                </div>
            </div>
            <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                <div className="tw-w-full tw-flex tw-flex-col tw-gap-3  tw-mx-auto ">
                    <div>
                        <ImageZoom src={recharts}  alt="recharts setup"/>
                    </div>
                   
                </div>
            </div>
        </div>
        <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-my-10">
            <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                <div className="tw-py-10">
                    <h3 className="tw-leading-10 tw-text-3xl md:tw-text-4xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]">Prefilling the form</h3>
                    <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/></div>
                    <div>
                        <p>Remember the mark-pending endpoint adds the validated data to an array, a pending array. Then I have a context that I use to set whatever the poll-resource endpoint gives me from the backend. The cell I select, I want to find in the pending array, if there is a match, then I want to retrieve the existing properties of that item. With the help of the context, I share state with the production form component to load that data in its apprioprate fields.</p>
                        
                    </div>
                </div>
            </div>
            <div className="tw-relative lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                <div className="tw-w-full tw-flex tw-flex-col md:tw-flex-row md:tw-flex-wrap tw-gap-3  tw-mx-auto ">
                    <div className="md:tw-w-1/2">
                        <ImageZoom src={prefilling} alt="the api call to create stripe checkout"/>
                    </div>
                    <div className="md:tw-w-1/3">
                        <ImageZoom src={prefillingtwo} alt="the front end getting the session id from endpoint"/>
                    </div>
                    <div className="md:tw-w-1/3">
                        <ImageZoom src={prefillingthree} alt="the front end getting the session id from endpoint"/>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="tw-container tw-py-10 tw-mx-auto tw-p-5">
            <h3 className="tw-text-3xl md:tw-text-5xl tw-text-bluegreen tw-font-boldonse">Overview of the process</h3>
            <div className="tw-w-48"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
            <div className="tw-w-full tw-p-4">
                <ImageZoom src={diagram} alt="diagram of endpoints"/>
            </div>
        </div>
        <div className="tw-container tw-mx-auto ">
            <div className="  tw-flex tw-flex-col  lg:tw-flex-row  md:tw-mt-0">
                <div className="tw-flex tw-flex-col tw-justify-center lg:tw-w-4/12 tw-p-6 tw-py-14 md:tw-p-3">
                    <h3 className="tw-leading-10 tw-text-3xl md:tw-text-4xl  tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]  lg:tw-leading-[1.5] tw-mb-5">Initial Wireframing </h3>
                    <p>For something that was a challenge I envisioned the application to have about three pages. Dashboard, a way to veiw orders, and the form itself.</p>
                </div>
                <div className='lg:tw-w-8/12 tw-my-auto '>
                    <Carousel wireframeslides = {intialwireArray}/>
                </div>
            </div>
            <div className=" tw-flex tw-flex-col lg:tw-flex-row-reverse  tw-my-5 ">
                <div className="tw-flex tw-flex-col tw-justify-center lg:tw-w-4/12 tw-p-6  md:tw-p-3">
                    <h3 className="tw-leading-10 tw-text-3xl md:tw-text-4xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]  lg:tw-leading-[1.5] tw-mb-5">Refined Wireframing</h3>
                    <p>Continued iteration, of the simple work flow I desired for the app.</p>
                    
                </div>
                <div className='lg:tw-w-8/12 tw-my-auto '>
                    <Carousel wireframeslides = {middlewireArray}/>
                </div>
            </div>
            <div className=" tw-flex tw-flex-col lg:tw-flex-row md:tw-mt-0">
                <div className="tw-flex tw-flex-col tw-justify-center  lg:tw-w-4/12 tw-p-6 tw-py-14 md:tw-p-3">
                    <h3 className="tw-leading-10 tw-text-3xl md:tw-text-4xl tw-text-bluegreen tw-font-boldonse md:tw-leading-[1.5]  lg:tw-leading-[1.5] tw-mb-5">Final Wireframing</h3>
                    <p>The color scheme derived from the colors I chose for the chart, given the amount of jobs/resources were prefined in the app.</p>
                </div>
                <div className='lg:tw-w-8/12 tw-my-auto '>
                    <Carousel wireframeslides={finalwireArray}/>
                </div>
            </div>
        </div>
        <div className="tw-container tw-p-6 md:tw-p-3 tw-my-5 tw-mx-auto">
            <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse tw-mb-5">Lessons Learned & Improvements:</h3>
            <div className="md:tw-w-2/3">
                <li> I'd like to incorporate color coding depending on the status of the job.</li>
                <li> Right now, the data is stored within the application. I manage the data in a storage via PostgreSql, where users can add jobs to and load in the app.
                </li>
                <li>I learned the importance of when to access state. Before I gotten the prefilling to work, I tried setting the state and accessing it. But in React, you cannot access state in the same render.</li>
                <br />
            </div>
        </div>
        <div className="tw-container tw-mx-auto tw-p-6 md:tw-p-3 tw-my-5">
            <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse tw-mb-5">The future version will look similar to...</h3>
            <div>
                <ImageZoom src={futurescheduler} alt="photo of what the future project might look"/>
            </div>
        </div>
       
        <div className="tw-container tw-mx-auto tw-h-auto">
            <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse tw-mb-5">Final Demo...</h3>
            <div className="tw-mx-auto lg:tw-w-2/3  tw-h-full ">
                <Video srclink='../video/schedulerdemo.mp4' />
                <div>
                    <Link href="https://github.com/hagoodj98/production-order-scheduler"> Project on Github</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default scheduler;
