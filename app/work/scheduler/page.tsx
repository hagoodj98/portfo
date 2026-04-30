import React from "react";

import { infoData } from "../../components/datai";
import Card from "../../components/Card";
import ProjectIntro from "../../components/ProjectIntro";
import Personas from "@/app/components/Personas";
import PERNSection from "@/app/components/PERNSection";
import ImprovementSection from "@/app/components/ImprovementSection";
import APIEndpoints from "./components/APIEndpoints";
import CISection from "./components/CISection";
import DesignTimeLine from "@/app/components/DesignTimeLine";
import ReposSlides from "./components/Repos";
import CronSection from "./components/CronSection";
import PieSection from "./components/PieSection";
import CalendarSection from "./components/CalendarSection";
import SearchFeature from "./components/SearchFeature";
import FileStructure from "./components/FileStructure";
import TablesSlides from "./components/TablesSlides";
import VideoSection from "../../components/Video";
import Diagram from "@/app/components/Diagram";
import WireframeSlide from "@/app/components/WireframeSlide";

const scheduler = () => {
  const intialwireArray = infoData.initalScheduler;
  const middlewireArray = infoData.middleScheduler;
  const finalwireArray = infoData.finalScheduler;
  const initialScheduler2 = infoData.initialScheduler2;
  const middleScheduler2 = infoData.middleScheduler2;
  const finalScheduler2 = infoData.finalScheduler2;
  return (
    <div className="tw-py-20">
      <ProjectIntro
        projectname="Schedule Jobs"
        description="The purpose of this project was to design and develop a production scheduling system that could streamline how jobs are created, assigned, and tracked across different assembly lines. Traditional scheduling methods—like spreadsheets or paper-based logs—often lead to errors, double bookings, and inefficiencies when coordinating multiple jobs. It was built to provide clarity on job statuses in real time (Available → Scheduled → Busy). "
        srcname="/pos/Mockup.png"
      />
      <Personas
        persona="/sarah.png"
        personatwo="/miguel.png"
        personathree="/priya.png"
      />
      <PERNSection>
        <h3 className="tw-text-2xl md:tw-text-4xl tw-text-black tw-font-boldonse">
          PERN Stack Overview
        </h3>
        <div className="tw-w-28">
          <hr className="tw-h-2 tw-bg-black" />{" "}
        </div>
        <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-3xl tw-text-black ">
          The project is built on the PERN stack, which combines PostgreSQL for
          the database, Express/Nextjs for the server, React for the front-end,
          and Node.js as the runtime environment. This stack allows for
          efficient development of full-stack applications with a clear
          separation of concerns between the client and server.
        </p>
      </PERNSection>
      <div className="tw-container tw-mx-auto tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 ">
        <Card className="tw-bg-bluegreen tw-text-white tw-text-base tw-p-5">
          <h3 className="tw-leading-10 tw-text-xl md:tw-text-2xl tw-font-boldonse  md:tw-leading-[1.5]">
            P
          </h3>
          <p>
            Prisma: ORM that simplifies database interactions, schema
            management, and migrations. It provides a type-safe API for working
            with PostgreSQL, making it easier to query and manipulate data.
          </p>
        </Card>
        <Card className="tw-bg-moreblue tw-text-white tw-p-5">
          <h3 className="tw-leading-10 tw-text-xl md:tw-text-2xl tw-font-boldonse  md:tw-leading-[1.5]">
            E
          </h3>
          <p>
            Express/Nextjs: framework that simplifies building server-side logic
            and API endpoints, handling requests and responses.
          </p>
        </Card>

        <Card className="tw-bg-yellow tw-text-black tw-p-5">
          <h3 className="tw-leading-10 tw-text-xl md:tw-text-2xl tw-font-boldonse  md:tw-leading-[1.5]">
            R
          </h3>
          <p>
            React: The heart interactive user interfaces, React provides dynamic
            rendering and state management. I used Next.js for this!
          </p>
        </Card>

        <Card className="tw-bg-orange tw-text-white tw-p-5">
          <h3 className="tw-leading-10 tw-text-xl md:tw-text-2xl tw-font-boldonse  md:tw-leading-[1.5]">
            N
          </h3>
          <p>
            Nextjs has two available server-side runtimes: Node.js and Edge. I
            used Node.js for this project.
          </p>
        </Card>
      </div>

      <Diagram image="/pos/diagram.png" alt="diagram of endpoints">
        <p className="md:tw-w-2/3 tw-mt-3">
          The following diagram provides a visual overview of the main REST API
          endpoints for authentication, forum content, and reactions. It
          illustrates the flow of requests between the client, Next.js routes,
          and the PostgreSQL database.
        </p>
      </Diagram>
      <TablesSlides />
      <FileStructure />
      <div className="tw-bg-orange  tw-w-full ">
        <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-py-10 ">
          <div className="lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
            <div className="tw-py-10">
              <h1 className=" tw-leading-10 tw-text-xl md:tw-text-2xl tw-text-white tw-font-boldonse md:tw-leading-[1.5]  lg:tw-leading-[1.5]">
                Next.js API Routes
              </h1>
              <div className="tw-w-28">
                <hr className="tw-h-2 tw-bg-bluegreen" />{" "}
              </div>
              <div>
                <p className="md:tw-text-base  tw-text-white">
                  Next.js API routes are serverless functions that run on the
                  server side. They allow you to create backend endpoints within
                  your Next.js application without needing a separate server.
                  Each file in the app/api directory corresponds to an API
                  endpoint, and you can define your request handlers (GET, POST,
                  etc.) within these files. This makes it easy to build
                  full-stack applications with Next.js, as you can handle both
                  frontend and backend logic in the same project.
                </p>
              </div>
            </div>
          </div>
          <APIEndpoints />
        </div>
      </div>
      <div className="tw-container tw-py-10 tw-mx-auto tw-p-5">
        <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse">
          Repository Layer
        </h3>
        <div className="tw-w-56">
          <hr className="tw-h-2 tw-bg-bluegreen" />
        </div>
        <p className="md:tw-w-2/3 tw-mt-3 tw-text-black">
          Each layer handles specific concerns: repositories execute SQL
          queries, services orchestrate business logic, and external services
          handle third-party integrations.
        </p>
        <ReposSlides />
      </div>
      <PERNSection>
        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-5xl  tw-text-black tw-font-boldonse md:tw-leading-[1.5]">
          Technical Architecture
        </h3>
        <div className="tw-w-28">
          <hr className="tw-h-2 tw-bg-black" />{" "}
        </div>
        <div>
          <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-3xl tw-text-black ">
            The project uses Node-Cron alongside the useSWR to populate the
            table data with the assistance of tanstack table. There is a
            predefined list of resources, that has an in-memory presence on the
            back-end. As far as the front-end is concerned, the project uses:
          </p>
          <ul className="tw-list-disc">
            <li>
              Framework: Next.js (React-based) for fast rendering and routing.
            </li>
            <li>
              State Management: React Context and hooks for managing slot
              selection, pending jobs, and real-time updates.
            </li>
            <li>
              Data Validation: Zod schemas to ensure input correctness (time
              slots, resources, etc.) before submission.
            </li>
            <li>
              UI Components: Built with React and styled using TailwindCSS, with
              reusable form components for job selection and scheduling.
            </li>
          </ul>
        </div>
      </PERNSection>
      <div className="tw-container tw-mx-auto tw-my-10 tw-p-5">
        <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse">
          Front-End Implementation: Real-Time Updates
        </h3>
        <div className="tw-w-56">
          <hr className="tw-h-2 tw-bg-bluegreen" />
        </div>
        <p className="md:tw-w-2/3 tw-mt-3 tw-text-black">
          The front-end uses useSWR for data fetching and real-time updates.
          When a job is scheduled, the UI optimistically updates the slot status
          to &quot;Busy&quot; while the API call is in progress. If the call
          succeeds, the new state is confirmed; if it fails, the UI reverts to
          &quot;Available&quot; and displays an error message. This approach
          provides immediate feedback while ensuring data consistency.
        </p>
      </div>

      <SearchFeature />
      <PieSection />
      <CronSection />
      <CalendarSection />
      <CISection />
      <div className="tw-container tw-mx-auto tw-my-10 tw-p-5">
        <div className="tw-my-5">
          <DesignTimeLine>
            <h3 className="tw-text-2xl md:tw-text-3xl md:tw-mt-0 tw-text-bluegreen tw-font-boldonse">
              Wireframing and Design (first iteration)
            </h3>
          </DesignTimeLine>
        </div>
        <WireframeSlide processWireframes={intialwireArray}>
          <div className="lg:tw-col-span-4 tw-p-6">
            <span className="tw-inline-block tw-bg-[#0E1424] tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-mb-3">
              Phase 01 - Exploration
            </span>
            <h4 className="tw-text-xl tw-text-bluegreen tw-font-boldonse tw-mb-3">
              Initial Wireframing
            </h4>
            <p>
              This early stage mapped core page structure and user flow, turning
              rough ideas into low-fidelity screens that guided the first
              implementation pass.
            </p>
          </div>
        </WireframeSlide>
        <WireframeSlide processWireframes={middlewireArray}>
          <div className="lg:tw-col-span-4 tw-p-6">
            <span className="tw-inline-block tw-bg-[#113058] tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-mb-3">
              Phase 02 - Refinement
            </span>
            <h4 className="tw-text-xl tw-text-bluegreen tw-font-boldonse tw-mb-3">
              Refined Wireframing
            </h4>
            <p>
              Layout hierarchy was improved and component placement became more
              intentional, helping align navigation and content blocks with real
              user tasks.
            </p>
          </div>
        </WireframeSlide>
        <WireframeSlide processWireframes={finalwireArray}>
          <div className="lg:tw-col-span-4 tw-p-6">
            <span className="tw-inline-block tw-bg-bluegreen tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-mb-3">
              Phase 03 - Finalization
            </span>
            <h4 className="tw-text-xl tw-text-bluegreen tw-font-boldonse tw-mb-3">
              Final Wireframing
            </h4>
            <p>
              Final screens unified visual consistency and behavior
              expectations, creating a production-ready blueprint before
              implementation and polish.
            </p>
          </div>
        </WireframeSlide>
        <div className="tw-my-5">
          <DesignTimeLine>
            <h3 className="tw-text-2xl md:tw-text-3xl md:tw-mt-0 tw-text-bluegreen tw-font-boldonse">
              Wireframing and Design (final iteration)
            </h3>
          </DesignTimeLine>
        </div>
        <WireframeSlide processWireframes={initialScheduler2 || []}>
          <div className="lg:tw-col-span-4 tw-p-6">
            <span className="tw-inline-block tw-bg-[#0E1424] tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-mb-3">
              Phase 01 - Exploration
            </span>
            <h4 className="tw-text-xl tw-text-bluegreen tw-font-boldonse tw-mb-3">
              Initial Wireframing
            </h4>
            <p>
              This early stage mapped core page structure and user flow, turning
              rough ideas into low-fidelity screens that guided the first
              implementation pass.
            </p>
          </div>
        </WireframeSlide>

        <WireframeSlide processWireframes={middleScheduler2 || []}>
          <div className="lg:tw-col-span-4 tw-p-6">
            <span className="tw-inline-block tw-bg-[#113058] tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-mb-3">
              Phase 02 - Refinement
            </span>
            <h4 className="tw-text-xl tw-text-bluegreen tw-font-boldonse tw-mb-3">
              Refined Wireframing
            </h4>
            <p>
              Layout hierarchy was improved and component placement became more
              intentional, helping align navigation and content blocks with real
              user tasks.
            </p>
          </div>
        </WireframeSlide>
        <WireframeSlide processWireframes={finalScheduler2 || []}>
          <div className="lg:tw-col-span-4 tw-p-6">
            <span className="tw-inline-block tw-bg-bluegreen tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-mb-3">
              Phase 03 - Finalization
            </span>
            <h4 className="tw-text-xl tw-text-bluegreen tw-font-boldonse tw-mb-3">
              Final Wireframing
            </h4>
            <p>
              Final screens unified visual consistency and behavior
              expectations, creating a production-ready blueprint before
              implementation and polish.
            </p>
          </div>
        </WireframeSlide>

        <ImprovementSection>
          <div className="md:tw-w-2/3">
            <li>
              Will implement a more robust error handling strategy for API
              calls, including user-friendly error messages and retry logic to
              improve resilience.
            </li>
            <li>
              Plan to create a basic authentication system to restrict access to
              scheduling features, ensuring only authorized users can create and
              manage jobs.
            </li>
            <li>
              Continuing to better understand when to use react hooks such as
              UseCallback and UseMemo to optimize performance and prevent
              unnecessary re-renders, especially as the app scales. Still
              struggling to find the right balance between code readability and
              performance optimization in this area.
            </li>
            <li>
              File structure can improve by including clearer separation of
              concerns, such as grouping related components in directories that
              use them.
            </li>
          </div>
        </ImprovementSection>
        <VideoSection
          srclink="/pos/demo-small.mp4"
          githubLink="https://github.com/hagoodj98/production_scheduler"
        />
      </div>
    </div>
  );
};

export default scheduler;
