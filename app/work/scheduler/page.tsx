import React from "react";

import { infoData } from "../../components/datai";
import Card from "../../components/Card";
import ProjectIntro from "../../components/ProjectIntro";
import Personas from "@/app/components/Personas";
import PERNSection from "@/app/components/PERNSection";
import ImprovementSection from "@/app/components/ImprovementSection";
import APIEndpoints from "./components/APIEndpoints";
import CISection from "./components/CISection";
import ReposSlides from "./components/Repos";
import CronSection from "./components/CronSection";
import PieSection from "./components/PieSection";
import OrderLogTableSection from "./components/OrderLogTableSection";
import CalendarSection from "./components/CalendarSection";
import SearchFeature from "./components/SearchFeature";
import SchedulingRules from "./components/SchedulingRules";
import LoginFlowSection from "./components/LoginFlowSection";
import FileStructure from "./components/FileStructure";
import TablesSlides from "./components/TablesSlides";
import VideoSection from "../../components/Video";
import Diagram from "@/app/components/Diagram";
import WireframeSlide from "@/app/components/WireframeSlide";

const scheduler = () => {
  const initialScheduler = infoData.initialScheduler;
  const middleScheduler = infoData.middleScheduler;
  const finalScheduler = infoData.finalScheduler;
  return (
    <div className="tw-py-20">
      <ProjectIntro
        projectname="Production Scheduler"
        description="A full-stack production planning app for creating orders, assigning employees and resources, and tracking work from pending through completion. The current implementation adds permission-gated workflows, schedule-conflict validation, automated status transitions, and an activity log so teams can coordinate work with a clear record of changes."
        srcname="/pos/productiondisplay.png"
      />
      <Personas
        persona="/pos/persona.png"
        personatwo="/pos/miguel.png"
        personathree="/pos/persona3.png"
      />
      <PERNSection>
        <h3 className="tw-text-2xl md:tw-text-4xl tw-text-black tw-font-boldonse">
          Current Technology Stack
        </h3>
        <div className="tw-w-28">
          <hr className="tw-h-2 tw-bg-black" />{" "}
        </div>
        <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-3xl tw-text-black ">
          The current application uses Next.js App Router with React and
          TypeScript, Prisma with PostgreSQL for persistence, and Zod for
          request validation. Next.js route handlers provide the backend API,
          while a Node.js cron process updates order statuses in the background.
        </p>
      </PERNSection>
      <div className="tw-container tw-mx-auto tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 ">
        <Card className="tw-bg-bluegreen tw-text-white tw-text-base tw-p-5">
          <h3 className="tw-leading-10 tw-text-xl md:tw-text-2xl tw-font-boldonse  md:tw-leading-[1.5]">
            Data
          </h3>
          <p>
            PostgreSQL and Prisma: persist production orders, selected
            resources, users, permissions, and order history through a
            relational schema and typed data-access layer.
          </p>
        </Card>
        <Card className="tw-bg-moreblue tw-text-white tw-p-5">
          <h3 className="tw-leading-10 tw-text-xl md:tw-text-2xl tw-font-boldonse  md:tw-leading-[1.5]">
            Framework
          </h3>
          <p>
            Next.js App Router: serves the application pages and API route
            handlers for authentication, resource management, scheduling, and
            order history.
          </p>
        </Card>

        <Card className="tw-bg-yellow tw-text-black tw-p-5">
          <h3 className="tw-leading-10 tw-text-xl md:tw-text-2xl tw-font-boldonse  md:tw-leading-[1.5]">
            UI
          </h3>
          <p>
            React: powers the interactive calendar, order and resource forms,
            status dashboard, and shared client state.
          </p>
        </Card>

        <Card className="tw-bg-orange tw-text-white tw-p-5">
          <h3 className="tw-leading-10 tw-text-xl md:tw-text-2xl tw-font-boldonse  md:tw-leading-[1.5]">
            Validation
          </h3>
          <p>
            TypeScript and Zod: provide typed application contracts and
            validation for resource, employee, date, and time inputs before
            scheduling changes are saved.
          </p>
        </Card>
      </div>

      <Diagram
        image="/pos/schedulerdiagram.png"
        alt="Production Scheduler architecture diagram"
      >
        <p className="md:tw-w-2/3 tw-mt-3">
          The diagram shows how the scheduler UI calls Next.js route handlers
          for authentication, resources, production orders, and order logs.
          Protected operations validate permissions and input before repository
          methods persist changes through Prisma and PostgreSQL.
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
                  Next.js App Router route handlers expose the scheduler API
                  alongside its pages. Current routes cover session status and
                  permission checks, resource search and creation, pending and
                  scheduled orders, rescheduling, employee lookup, soft
                  deletion, and order-log retrieval. Zod schemas and shared
                  authorization and error-handling helpers keep request
                  processing consistent.
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
          Repository modules isolate Prisma data access for production orders,
          resources, users, permissions, and order logs. Route handlers apply
          validation and workflow rules before calling those repositories.
        </p>
        <ReposSlides />
      </div>
      <PERNSection>
        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-5xl  tw-text-black tw-font-boldonse md:tw-leading-[1.5]">
          Application Architecture
        </h3>
        <div className="tw-w-28">
          <hr className="tw-h-2 tw-bg-black" />{" "}
        </div>
        <div>
          <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-3xl tw-text-black ">
            The application separates interactive planning from automated status
            updates. The calendar and dashboard refresh persisted order data
            with SWR, while a Node-Cron process evaluates scheduled orders
            against the current time. The main implementation includes:
          </p>
          <ul className="tw-list-disc">
            <li>
              Framework and UI: Next.js App Router and React for application
              pages, the calendar, forms, and dashboard.
            </li>
            <li>
              Data layer: Prisma repositories backed by PostgreSQL for
              production orders, employees, resources, permissions, and audit
              history.
            </li>
            <li>
              Access control: session-based authentication with permission
              checks on protected resource and order operations.
            </li>
            <li>
              Validation and automation: Zod request schemas and a background
              cron task for time-based order status transitions.
            </li>
          </ul>
        </div>
      </PERNSection>
      <div className="tw-container tw-mx-auto tw-my-10 tw-p-5">
        <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse">
          Security: Authentication and Authorization
        </h3>
        <div className="tw-w-56">
          <hr className="tw-h-2 tw-bg-bluegreen" />
        </div>
        <p className="md:tw-w-2/3 tw-mt-3 tw-text-black">
          Access is protected end to end: a Server Action handles login, a
          signed httpOnly session cookie carries the user&apos;s permissions,
          and both the route proxy and each API route verify those permissions
          before any schedule data changes.
        </p>
      </div>
      <LoginFlowSection />

      <div className="tw-container tw-mx-auto tw-my-10 tw-p-5">
        <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse">
          Front-End Implementation: Live Schedule Updates
        </h3>
        <div className="tw-w-56">
          <hr className="tw-h-2 tw-bg-bluegreen" />
        </div>
        <p className="md:tw-w-2/3 tw-mt-3 tw-text-black">
          The calendar and status chart use SWR to refresh order data every five
          seconds. Orders are color-coded by lifecycle state, and calendar
          actions let permitted users edit or delete eligible orders. The server
          validates schedule details and permissions before persisting changes,
          while the background task advances orders through Scheduled, Busy, and
          Completed states.
        </p>
      </div>

      <SearchFeature />
      <PieSection />
      <OrderLogTableSection />
      <CronSection />
      <CalendarSection />
      <CISection />
      <div className="tw-container tw-mx-auto tw-my-10 tw-p-5">
        <WireframeSlide processWireframes={initialScheduler || []}>
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

        <WireframeSlide processWireframes={middleScheduler || []}>
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
        <WireframeSlide processWireframes={finalScheduler || []}>
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

        <VideoSection
          srclink="/pos/productionvideo-compressed.mp4"
          githubLink="https://github.com/hagoodj98/production_scheduler"
        />
        <div className="tw-container tw-mx-auto tw-my-5 tw-p-5 lg:tw-w-2/3">
          <h4 className="tw-text-xl tw-font-bold tw-text-black">
            About this demo
          </h4>
          <p className="tw-text-black tw-mt-2">
            The demo uses three admin users to show that different people are
            authorized to do different things:
          </p>
          <ul className="tw-list-disc tw-ml-6 tw-text-black">
            <li>
              <strong>Emily:</strong> can only reschedule and delete orders.
            </li>
            <li>
              <strong>Jane:</strong> can search resources and create schedules.
            </li>
            <li>
              <strong>Michael:</strong> all of the above.
            </li>
          </ul>
          <p className="tw-text-black tw-mt-2">
            All admin users can view the order log table.
          </p>
        </div>
        <SchedulingRules />
      </div>
    </div>
  );
};

export default scheduler;
